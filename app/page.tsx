import React from "react";
import Navbar from "./components/Navbar";
import Brand from "./components/Brand";
import Ceramics from "./components/Ceramics";
import Products from "./components/Products";
import Join from "./components/Join";
import Last from "./components/Last";
import Image from "next/image";

const Page = () => {
  return (
    <div className="bg-white">
      <div className="relative sm:-mt-28 md:-mt-20">
        <div className="flex flex-col md:flex-row items-center justify-start px-6 md:px-8 space-x-0">
          <div className="bg-darkPrimary w-full md:w-[750px] h-auto md:h-[584px] flex flex-col justify-between p-6">
            <h1 className="text-white font-clash-display mt-8 ml-14 font-bold text-[24px] sm:text-[28px] md:text-[32px] leading-[32px] sm:leading-[38px] md:leading-[44.8px] text-left">
              The furniture brand for the <br /> future, with timeless designs
            </h1>

            <div className="flex justify-center md:justify-start mt-6">
              <button className="bg-Primary text-white font-satoshi w-[170px] h-14 mb-8 ml-12">
                View collection
              </button>
            </div>

            <p className="text-white font-satoshi font-light text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[27px] mt-6">
              A new era in eco-friendly furniture with Avelon, the French luxury
              retail brand <br />
              with nice fonts, tasteful colors, and a beautiful way to display
              things digitally <br />
              using modern web technologies.
            </p>
          </div>

          <div className="w-full md:w-[520px] h-auto flex justify-center md:justify-start mt-6 md:mt-0">
            <Image
              src="/home.png"
              alt="Furniture"
              width={1000}
              height={1000}
              className="w-full h-auto object-cover md:max-w-[520px] sm:w-full md:h-[584px] sm:h-[400px] lg:h-[584px]"
              priority 
            />
          </div>
        </div>
      </div>

      <Brand />
      <Ceramics />
      <Products />
      <Join />
      <Last />
    </div>
  );
};

export default Page;































