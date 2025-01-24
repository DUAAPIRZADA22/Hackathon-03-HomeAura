import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { RiPlantLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { CiCreditCard1 } from "react-icons/ci";

const Brand = () => {
  const rows = [
    {
      icon: <TbTruckDelivery size={32} />,
      heading: "Next day as standard",
      paragraph: "Order before 3pm and get your order the next day as standard.",
    },
    {
      icon: <TiTick size={32} />,
      heading: "Made by true artisans",
      paragraph: "Hand made crafted goods made with real passion and craftsmanship.",
    },
    {
      icon: <RiPlantLine size={32} />,
      heading: "Unbeatable Prices",
      paragraph: "For our materials and quality, you won't find better prices anywhere.",
    },
    {
      icon: <CiCreditCard1 size={32} />,
      heading: "Recycled packaging",
      paragraph: "We use 100% recycled packaging to ensure our footprint is manageable.",
    },
  ];

  return (
    <div className="w-full h-auto mb-20 px-4">
      <h1 className="font-clash-display text-darkPrimary mt-24 text-center text-[24px] font-extrabold sm:text-[28px]">
        What makes our brand different
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {rows.map((row, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-left p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="mb-4 flex items-start">
              <div className="mr-4 text-darkPrimary">{row.icon}</div>
            </div>
            <h1 className="font-clash-display text-darkPrimary font-semibold text-[18px] sm:text-[20px]">
              {row.heading}
            </h1>
            <p className="font-satoshi text-darkPrimary text-[14px] sm:text-[16px] mt-2">
              {row.paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;









