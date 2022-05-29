import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Footer from "../Shared/Footer";

const Portfolio = () => {
  return (
    <>
      <div className=" shadow-lg rounded font-mono  pl-10 p-5 lg:ml-20">
        <h1 className="text-xl my-2 font-semibold text-emerald-600">
          My Portfolio
        </h1>
        <p className="text-md font-semibold">Name: Omar Faruk Ronnie </p>
        <p className="text-md font-semibold my-2">
          Email: ronymaze55@gmail.com{" "}
        </p>
        <p className="text-md font-semibold">Education</p>
        <ul className="">
          <li className="ml-24 font-medium">SSC - Science</li>
          <li className="ml-24 font-medium">HSC - Science</li>
          <li className="ml-24 font-medium">
            Bachelor - Computer Science and Technology
          </li>
        </ul>
        <br />
        <p className="text-md font-semibold">Skills</p>
        <ul>
          <li className="ml-24 font-medium">HTML</li>
          <li className="ml-24 font-medium">CSS</li>
          <li className="ml-24 font-medium">Bootstrap , Tailwind</li>
          <li className="ml-24 font-medium">React JS</li>
          <li className="ml-24 font-medium">Git</li>
          <li className="ml-24 font-medium">Javascript, Typescript, ES6 </li>
        </ul>

        <p className="text-md font-semibold my-4">My Projects</p>
        <ul>
          <li className="ml-24 font-medium text-blue-600">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://gadget-warehouse-management.web.app/"
            >
              {" "}
              Warehouse Management
            </a>
          </li>
          <li className="ml-24 font-medium text-blue-600">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://independent-service-prov-a3a74.web.app/"
            >
              Independent Service Provider
            </a>
          </li>
          <li className="ml-24 font-medium text-blue-600">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://cameramania.netlify.app/"
            >
              Camera Mania
            </a>
          </li>
        </ul>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Portfolio;
