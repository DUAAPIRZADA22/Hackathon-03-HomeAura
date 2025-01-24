"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "../../../sanity/lib/client";
import SingleProduct from "../../components/SingleProduct";
import RelatedProducts from "../../components/RelatedProducts";

interface Product {
  image: string;
  _id: string;
  name: string;
  price: number;
  salesPrice?: number;
  description: string;
  tags: string[];
  sizes?: string[];
  slug: {
    current: string;
  };
}

export default function Page() {
  const { slug } = useParams<{ slug: string }>(); // Access the slug from the URL
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the product data
        const productQuery = `*[_type == "product" && slug.current == $slug][0]{
          image, name, price, salesPrice, description, tags, sizes, slug
        }`;
        const productData: Product = await client.fetch(productQuery, { slug });
        setProduct(productData);

        // Fetch related products
        const relatedProductsQuery = `*[_type == "product" && slug.current != $slug][0...5]{
          image, name, price, salesPrice, description, tags, sizes, slug
        }`;
        const relatedProductsData: Product[] = await client.fetch(
          relatedProductsQuery,
          { slug }
        );
        setRelatedProducts(relatedProductsData);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to fetch product data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-7xl m-auto xl:px-0 px-5 mt-24">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl m-auto xl:px-0 px-5 mt-24">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <p>Sorry, we couldn&apos;t find the product you&apos;re looking for.</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl m-auto xl:px-0 px-5 mt-24">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <p>Sorry, we couldn&apos;t find the product you&apos;re looking for.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl m-auto xl:px-0 px-5 mt-24">
      <SingleProduct product={product} />
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-5">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <RelatedProducts
              key={relatedProduct.slug.current}
              product={relatedProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
}