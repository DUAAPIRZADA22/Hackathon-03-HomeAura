import Image from "next/image";
import React from "react";

const products = [
  {
    id: 1,
    name: "The Dandy Chair",
    image: "/home.png",
    price: 250,
  },
  {
    id: 2,
    name: "Rustic Vase Set",
    image: "/photo1.png",
    price: 155,
  },
  {
    id: 3,
    name: "The Silky Vase",
    image: "/photo3.png",
    price: 125,
  },
  {
    id: 4,
    name: "The Lucy Lamp",
    image: "/photo2.png",
    price: 399,
  },
];

const Ceramics = () => {
  return (
    <div className="w-full h-auto bg-white relative">
      <div className="text-darkPrimary text-[30px] font-extrabold font-clash-display mt-20 px-6 md:ml-[80px] md:mt-[80px]">
        New Ceramics
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 mt-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center transition-transform hover:scale-105"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={1000} 
              height={1000}
              className="w-[260px] h-[300px] object-cover font-bold shadow-md"
            />
            <div className="text-darkPrimary font-bold text-[18px] md:text-[20px] font-clash-display mt-2">
              {product.name}
            </div>
            <div className="text-darkPrimary text-[16px] md:text-[18px] font-satoshi mt-1">
              £{product.price}
            </div>
          </div>
        ))}
      </div>

      <div className="w-[200px] h-[56px] bg-gray-200 text-darkPrimary flex items-center justify-center gap-2 mt-10 mx-auto shadow-sm hover:shadow-lg transition-shadow">
        <button className="w-full h-full text-center font-satoshi text-sm">
          View Collection
        </button>
      </div>
    </div>
  );
};

export default Ceramics;





