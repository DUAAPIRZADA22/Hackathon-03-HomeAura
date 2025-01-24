import React from "react";
import {FaInstagram,  FaFacebookF, FaTwitter,FaLinkedinIn, FaSkype,FaPinterestP,} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-darkPrimary w-full flex flex-col">
      <div className="flex flex-col lg:flex-row justify-between items-start w-full max-w-[1440px] mx-auto px-6 py-6 space-y-6 lg:space-y-0">

        <div className="flex flex-col w-full lg:w-[150px]">
          <h2 className="font-clash-display text-white text-[18px] font-bold leading-[19.68px] mb-4">
            Menu
          </h2>
          {[
            "New arrivals",
            "Best sellers",
            "Recently viewed",
            "Popular this week",
            "All products",
          ].map((item, index) => (
            <p
              key={index}
              className="font-satoshi text-white text-[14px] leading-[18.9px] mt-4 first:mt-0"
            >
              {item}
            </p>
          ))}
        </div>

       
        <div className="flex flex-col w-full lg:w-[150px]">
          <h2 className="font-clash-display text-white font-bold text-[18px] leading-[19.68px] mb-4">
            Categories
          </h2>
          {[
            "Crockery",
            "Furniture",
            "Homeware",
            "Plant pots",
            "Chairs",
            "Crockery",
          ].map((item, index) => (
            <p
              key={index}
              className="font-satoshi text-white text-[14px] leading-[18.9px] mt-4 first:mt-0"
            >
              {item}
            </p>
          ))}
        </div>

        <div className="flex flex-col w-full lg:w-[150px]">
          <h2 className="font-clash-display text-white text-[18px] font-bold leading-[19.68px] mb-4">
            Our Company
          </h2>
          {[
            "About us",
            "Vacancies",
            "Contact us",
            "Privacy",
            "Return policy",
          ].map((item, index) => (
            <p
              key={index}
              className="font-satoshi text-white text-[14px] leading-[18.9px] mt-4 first:mt-0"
            >
              {item}
            </p>
          ))}
        </div>

     
        <div className="flex flex-col w-full lg:w-[250px]">
          <h2 className="font-clash-display text-white text-[18px] font-bold leading-[19.68px] mb-6">
            Join our mailing list
          </h2>
          <div className="flex flex-col sm:flex-row w-full">
            <input
              type="email"
              placeholder="Your@email.com"
              className="h-[50px] sm:h-[60px] px-4 text-darkPrimary text-sm bg-purple-900 rounded-t-md sm:rounded-l-md sm:rounded-t-none border-none outline-none w-full sm:w-[70%] mb-4 sm:mb-0"
            />
            <button className="bg-white text-darkPrimary h-[50px] sm:h-[60px] px-4 font-satoshi rounded-b-md sm:rounded-r-md sm:rounded-b-none w-full sm:w-[30%]">
              Sign Up
            </button>
          </div>
        </div>
      </div>


      <div className="bg-gray-500 h-[1px] w-full"></div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1440px] mx-auto px-6 py-4">
        <div className="text-white font-satoshi text-[14px] leading-[18.9px]">
          © 2022 Avion LTD
        </div>
        <div className="flex space-x-4 mt-4 lg:mt-0">
          <FaLinkedinIn className="text-white text-[20px] lg:text-[25px]" />
          <FaFacebookF className="text-white text-[20px] lg:text-[25px]" />
          <FaInstagram className="text-white text-[20px] lg:text-[25px]" />
          <FaSkype className="text-white text-[20px] lg:text-[25px]" />
          <FaTwitter className="text-white text-[20px] lg:text-[25px]" />
          <FaPinterestP className="text-white text-[20px] lg:text-[25px]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;





