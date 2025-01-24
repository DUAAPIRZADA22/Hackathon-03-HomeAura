"use client";

import React, { useState } from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CardContext"; // Importing CartContext
import { urlFor } from "../../sanity/lib/image";
import Image from "next/image"; // Import Image component
import { Toast } from "../components/Toast"; // Assuming you have a Toast component

const Wishlist = () => {
  const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist();
  const { dispatch: cartDispatch } = useCart(); // Use CartContext to dispatch cart actions
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error" | "info">("success");
  const [showToast, setShowToast] = useState(false);

  const handleRemoveFromWishlist = (id: string) => {
    wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", id });
  };

  const handleAddToCart = (product: any) => {
    // Dispatch add to cart action
    cartDispatch({
      type: "ADD_TO_CART",
      product: {
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
        description: product.description,
      },
    });

    // Show toast message
    setToastMessage(`${product.name} added to cart!`);
    setToastType("success");
    setShowToast(true);

    // Automatically hide toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
      {wishlistState.wishlist.length === 0 ? (
        <p>Your wishlist is empty!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlistState.wishlist.map((product) => (
            <div key={product._id} className="border rounded-lg p-4">
              {/* Use Image component instead of img */}
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={400}  // Specify the width and height
                height={160} // Specify the height
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">£{product.price}</p>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleRemoveFromWishlist(product._id)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Toast Message */}
      {showToast && toastMessage && (
        <Toast message={toastMessage} type={toastType} onClose={() => setShowToast(false)} />
      )}
    </div>
  );
};

export default Wishlist;
























