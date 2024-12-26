import React from 'react';

const Hero = () => {
  return (
    <div className="hero mt-6 md:mt-10 mb-6 md:min-h-80 text-white flex flex-col md:flex-row justify-between items-center relative p-5 md:p-10 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-500">
      {/* Left Section */}
      <div className="z-10 text-center md:text-left">
        <span className="text-md md:text-md font-semibold">Sale</span>
        <h2 className="text-2xl md:text-5xl font-semibold uppercase my-2 leading-tight">
          Up To <br /> 50% OFF
        </h2>
        <p className="mb-4 md:mb-6 text-sm md:text-base">More Discounts</p>
        <a
          href="/"
          className="px-4 bg-black py-2 text-sm uppercase hover:text-purple-700 text-white rounded"
        >
          Shop Now
        </a>
      </div>

      {/* Right Section */}
      <img
        className="max-w-[150px] sm:max-w-[200px] md:max-w-[300px] object-cover mt-4 md:mt-0"
        src="./images/hero2.png"
        alt="Hero Image"
      />
    </div>
  );
};

export default Hero;
