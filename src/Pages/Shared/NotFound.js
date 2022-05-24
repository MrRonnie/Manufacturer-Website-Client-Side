import React from "react";
import { Link } from "react-router-dom";
import dribbble from "../../assets/images/dribbble_1.gif";
import PrimaryButton from "./PrimaryButton";

const NotFound = () => {
  return (
    <div>
      <div className="mt-8 text-center bg-white">
        <h1 className="text-accent  text-8xl">
          4<span className="text-gray-500">0</span>4
        </h1>
        <p className="mt-3 mb-3 text-gray-400 text-2xl">
          The page you requested could not found !!
        </p>
        <Link to="/">
          <PrimaryButton>Go to homepage</PrimaryButton>
        </Link>

        <div className="w-max mx-auto flex justify-center">
          <img src={dribbble} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
