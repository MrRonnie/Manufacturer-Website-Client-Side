import React from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div
      className="w-full bg-cover bg-center"
      style={{
        height: "34rem",
        background: `url(${banner})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
        <div className="text-center">
          <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">
            Build Your new <span className=" text-secondary">Masterpiece</span>
          </h1>
          <p className="mt-2 text-lg text-white">
            Life is a masterpiece that you create. Your soul is your paintbrush,
            your world is your canvass, your life is your masterpiece.
          </p>
          <button className="mt-4 px-4 py-2 bg-secondary text-white text-sm uppercase font-medium rounded hover:bg-emerald-600 focus:outline-none focus:bg-emerald-600">
            <Link to="/">Start Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
