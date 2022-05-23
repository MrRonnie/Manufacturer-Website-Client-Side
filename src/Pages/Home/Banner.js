import React from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div
      class="w-full bg-cover bg-center"
      style={{
        height: "34rem",
        background: `url(${banner})`,
        backgroundSize: "cover",
      }}
    >
      <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
        <div class="text-center">
          <h1 class="text-white text-2xl font-semibold uppercase md:text-3xl">
            Build Your new <span class=" text-blue-400">Masterpiece</span>
          </h1>
          <button class="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <Link to="/">Start Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
