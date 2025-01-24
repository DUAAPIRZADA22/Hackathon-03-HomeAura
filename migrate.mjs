// Import environment variables from .env.local
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

// Import the Sanity client to interact with the Sanity backend
import {createClient} from "@sanity/client";

// Load required environment variables
const {
  projectId, // Sanity project ID
  token, // Sanity API token
  BASE_URL = "https://hackathon-apis.vercel.app", // API base URL for products and categories
} = process.env;

// Check if the required environment variables are provided
if (!projectId || !token) {
  console.error("Missing required environment variables. Please check your .env.local file.");
  process.exit(1); // Stop execution if variables are missing
}

// Create a Sanity client instance to interact with the target Sanity dataset
const targetClient = createClient({
  projectId: projectId, // Your Sanity project ID
  dataset: "production", // Default to "production" if not set
  useCdn: false, // Disable CDN for real-time updates
  apiVersion: "2023-01-01", // Sanity API version
  token: token, // API token for authentication
});

// Function to upload an image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    // Fetch the image from the provided URL
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error(`Failed to fetch image: ${imageUrl}`);

    // Convert the image to a buffer (binary format)
    const buffer = await response.arrayBuffer();

    // Upload the image to Sanity and get its asset ID
    const uploadedAsset = await targetClient.assets.upload("image", Buffer.from(buffer), {
      filename: imageUrl.split("/").pop(), // Use the file name from the URL
    });

    return uploadedAsset._id; // Return the asset ID
  } catch (error) {
    console.error("Error uploading image:", error.message);
    return null; // Return null if the upload fails
  }
}

// Function to create or fetch a category
async function createCategory(category, counter) {
  try {
    const categoryExist = await targetClient.fetch(
      `*[_type=="category" && slug.current==$slug][0]`,
      { slug: category.slug }
    );
    if (categoryExist) {
      return categoryExist._id;
    }

    const catObj = {
      _type: "category",
      _id: category.slug + "-" + counter,
      name: category.name,
      slug: {
        _type: "slug",
        current: category.slug,
      },
    };

    const response = await targetClient.createOrReplace(catObj);
    console.log("Category created successfully", response);
    return response._id;
  } catch (error) {
    console.error("❌ Failed to create category:", category.name, error);
    throw error;
  }
}

// Main function to migrate data from REST API to Sanity
async function migrateData() {
  console.log("Starting data migration...");

  try {
    // Fetch products from the REST API
    const productsResponse = await fetch(`${BASE_URL}/api/products`);
    if (!productsResponse.ok) throw new Error("Failed to fetch products.");
    const productsData = await productsResponse.json(); // Parse response to JSON

    const categoryIdMap = {}; // Map to store migrated category IDs
    let counter = 0; // Counter for category IDs

    // Migrate products
    for (const product of productsData) {
      console.log(`Migrating product: ${product.name}`);

      // Upload product image
      const imageId = await uploadImageToSanity(product.image);

      // Create or fetch category
      if (!categoryIdMap[product.category.slug]) {
        const categoryId = await createCategory(product.category, counter++);
        categoryIdMap[product.category.slug] = categoryId;
      }

      // Prepare the new product object
      const newProduct = {
        _type: "product",
        name: product.name,
        slug: {
          _type: "slug",
          current: product.name.toLowerCase().replace(/\s+/g, "-"),
        },
        price: product.price,
        image: imageId
          ? {
              _type: "image",
              asset: {
                _type: "reference",
                _ref: imageId,
              },
            }
          : undefined,
        category: {
          _type: "reference",
          _ref: categoryIdMap[product.category.slug],
        },
        description: product.description,
        features: product.features,
        dimensions: product.dimensions,
        tags: product.tags,
      };

      // Save the product to Sanity
      const result = await targetClient.create(newProduct);
      console.log(`Migrated product: ${product.name} (ID: ${result._id})`);
    }

    console.log("Data migration completed successfully!");
  } catch (error) {
    console.error("Error during migration:", error.message);
    process.exit(1); // Stop execution if an error occurs
  }
}

// Start the migration process
migrateData();