
"use client";
import React from "react"; 
import { useWishlist } from "../context/WishlistContext";
import { urlFor } from "../../sanity/lib/image";
import { Products } from "../../typings";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface WishlistButtonProps {
  product: Products;
}

export const WishlistButton = ({ product }: WishlistButtonProps) => {
  const { state, dispatch } = useWishlist();

  // Check if the product is already in the wishlist
  const isInWishlist = state.wishlist.some((item) => item._id === product._id);

  // Function to toggle the product in or out of the wishlist
  const toggleWishlist = () => {
    if (isInWishlist) {
      dispatch({ type: "REMOVE_FROM_WISHLIST", id: product._id });
    } else {
      dispatch({
        type: "ADD_TO_WISHLIST",
        product: {
          _id: product._id,
          name: product.name, 
          price: product.price,
          image: product.image ? urlFor(product.image).url() : "",
          slug: product.slug || { current: "" },
          title: ""
        },
      });
    }
  };

  return (
    <button
      onClick={toggleWishlist}
      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
    >
      {isInWishlist ? (
        <FaHeart className="w-6 h-6 fill-red-500 stroke-red-500" />
      ) : (
        <FaRegHeart className="w-6 h-6" />
      )}
    </button>
  );
};

