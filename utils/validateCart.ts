import { client } from "../sanity/lib/client";
import { Products } from "../typings";

export const validateCart = async (cart: Products[]): Promise<Products[]> => {
  try {
    // Extract product IDs from the cart
    const productIds = cart.map((item) => item._id);

    // Fetch product details from Sanity
    const products = await client.fetch(
      `*[_type == "product" && _id in $productIds]{
        _id,
        price
      }`,
      { productIds }
    );

    // Validate the cart
    const validatedCart = cart
      .map((item) => {
        const product = products.find((p: { _id: string }) => p._id === item._id);
        if (product) {
          return {
            ...item,
            price: product.price, // Overwrite price to match the database
          };
        }
        return null; // Remove invalid items
      })
      .filter(Boolean);

    return validatedCart as Products[];
  } catch (error) {
    console.error("Error validating cart:", error);
    return cart; // Return the original cart if validation fails
  }
};