import React from 'react';

const Join = () => {
  return (
    <div className="bg-gray-100 w-full flex justify-center items-center py-8">
      <div className="bg-white max-w-screen-xl w-full h-auto px-6 py-8 md:px-[80px] md:py-[60px] flex flex-col items-center justify-center rounded-lg shadow-md">
        <h1 className="font-clash-display font-extrabold text-[30px] sm:text-[28px] md:text-[36px] text-center text-darkPrimary">
          Join the club and get the benefits
        </h1>

    
        <p className="font-satoshi text-[14px] sm:text-[16px] text-center text-darkPrimary mt-4 leading-[1.6]">
          Sign up for our newsletter and receive exclusive offers on new <br className="hidden sm:block" />
          ranges, sales, pop-up store events, and more.
        </p>

        <div className="flex flex-col sm:flex-row items-center mt-8 gap-4 sm:gap-0 border sm:border-none rounded-md overflow-hidden">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full sm:w-[300px] md:w-[400px] h-[56px] px-4 text-darkPrimary border border-gray-700 sm:border-none rounded-md sm:rounded-none focus:outline-none"
          />
          <button className="bg-darkPrimary text-white w-full sm:w-[120px] h-[56px] flex items-center justify-center font-satoshi rounded-md sm:rounded-none">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;



