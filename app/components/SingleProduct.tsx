"use client"; 
import { useCart } from "../context/CardContext";``
import { PiShoppingCart } from "react-icons/pi";
import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "../../sanity/lib/image";
import { useCallback } from "react";
import { Toast } from "./Toast";

interface Products {
  name: string
  price: number
  salesPrize?: number
  tags?: string[]
  description: string
  size?: string[]
  height?: number
  width?: number 
  _id: string,
  quantity?: number
slug?: {
  current: string;
},
index?: number; 
image: string,

}

const SingleProduct = ({product}: {product: Products}) => {

const { dispatch } = useCart();
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [quantity , setQuantity] = useState(1)

  // Add to cart handler with useCallback
  const handleAddToCart = useCallback(() => {
    // Set loading state
    setIsLoading(true);
    try {
      dispatch({
        type: "ADD_TO_CART",
        product: {
          _id: product._id,
          name: product.name,
          price: product.price,
          image: urlFor(product.image).url(),
          quantity: quantity,
          description: product.description
        },
      });

      setShowToast(true);
      setQuantity(1);  // Reseting quantity after adding
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      setShowToast(true);
      console.error(error);
      // You would want to add error handling Toast component
    } finally {
      setIsLoading(false);  // End loading state
    }
  }, [dispatch, product, quantity]);



     const handleQuantityChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value);
      setQuantity(value < 1 ? 1 : value);
    }, []);
  
  
    return (
      <div className="flex flex-wrap xl:flex-nowrap gap-36 mb-6 justify-center text-center xl:justify-start xl:text-left">
        <div className="">
          <Image
            className="rounded-xl xl:ml-14 xl:w-[600px] xl:h-[450px] object-cover"
            src={urlFor(product.image).url()}
            alt='product image'
            priority
            width={1000}
            height={1000}
          ></Image>
        </div>
        <div className="xl:w-1/2 m-0 flex flex-col items-center xl:items-start">
          <h1 className="text-5xl xl:w-96 font-bold">{product.name}</h1>
          <p className="bg-primary py-1 px-3 font-medium my-6 text-lg text-black text-bold rounded-full inline-block">
            ${product.price} USD
          </p>
          <p className="text-lg py-10 border-t text-[#7d7b8e]">
            {product.description}
          </p>
          <div className="flex items-center gap-4 mb-3">
            <label htmlFor="quantity" className="text-2xl font-bold">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="border rounded px-3 py-1 w-20"
            />
          </div>
          <div className="flex gap-2 items-center bg-primary text-black px-6 rounded py-3 hover:bg-accent border border-spacing-6 bg-cyan-300 ">
          <button onClick={handleAddToCart} disabled={isLoading}>
            <PiShoppingCart className="text-2xl text-bold" />
             Add to Cart
          </button>
          </div>
        </div>

        {showToast && (
        <Toast
          message="Added to cart successfully!"
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
      
      </div>
    );
  }
  ;
  
  export default SingleProduct;