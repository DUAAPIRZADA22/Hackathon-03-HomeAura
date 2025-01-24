import Image from 'next/image';
import React from 'react';

const Last = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-gray-100 w-full h-auto py-8">
      <div className="w-full md:w-[720px] h-auto md:h-[603px] bg-white flex flex-col items-start justify-start p-8">
        <h1 className="font-clash-display text-darkPrimary font-extrabold text-[30px] text-left">
          From a studio in London to a global brand with over 400 outlets
        </h1>

        <p className="font-satoshi text-darkPrimary text-[16px] text-left mt-6 leading-relaxed">
          When we started Avion, the idea was simple: make high-quality furniture affordable and available for the mass
          market. <br /> <br />
          Handmade and lovingly crafted furniture and homeware is what we live, breathe, and design. Our Chelsea boutique
          became the hotbed for the London interior design community.
        </p>

        <button className="mt-auto bg-gray-200 text-darkPrimary w-[150px] h-[56px] flex items-center justify-center font-satoshi 
        hover:shadow-lg transition-shadow rounded-md">
          Get in Touch
        </button>
      </div>

      <div className="w-full md:w-[720px] h-auto md:h-[603px] mt-6 md:mt-0">
        <Image
          src="/d1.png"
          alt="Decorative"
          width={1000} height={1000}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Last;








