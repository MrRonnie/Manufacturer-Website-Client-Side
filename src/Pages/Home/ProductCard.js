import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, img, description, minimumOrder, available, price } =
    product;
  return (
    <div>
      <div className="mx-5 sm:mx-0 rounded-xl border  ">
        <div className=" m-3   rounded-xl">
          <img
            className="rounded-t-lg mx-auto rounded-lg block py-3  object-cover h-72   "
            src={img}
            alt=""
          />
        </div>
        <div className="p-5 pt-0">
          <div>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </div>
          <p className="mb-2  text-gray-400 dark:text-gray-400 text-md">
            {description.length > 60
              ? description.substring(0, 140 - 3) + "..."
              : description}
          </p>
          <hr />
          <p className="my-3 text-sm text-slate-500">
            <span className="font-semibold">Minimum Order:</span> {minimumOrder}
          </p>
          <hr />

          <div className="flex justify-between items-center mt-2 mb-3">
            <h3 className="text-2xl font-bold text-emerald-500">${price}</h3>
            <p className="text-gray-500 text-md">
              Stock: <span className="text-green-600">{available}</span>
            </p>
          </div>
          <div className="px-2">
            <Link
              to={`/purchase/${_id}`}
              className="block w-full py-3 px-4 text-sm font-medium  text-center btn btn-primary uppercase text-white bg-secondary border-0 "
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
