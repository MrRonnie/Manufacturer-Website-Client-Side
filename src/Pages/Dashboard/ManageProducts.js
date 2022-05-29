import { faCancel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

const ManageProducts = () => {
  const [product, setProduct] = useState(null);

  const {
    data: products,
    refetch,
    isLoading,
  } = useQuery("products", () =>
    fetch("https://rocky-dawn-14713.herokuapp.com/products").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-600 text-center ">
        {" "}
        Manage Products
      </h2>
      <div className="divider w-2/4 mx-auto bg-black h-[1px]"></div>
      <h2 className="text-2xl text-primary font-semibold my-3 ">
        Total : {products.length}
      </h2>

      <div className="overflow-x-auto w-3/4 mx-auto border">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th></th>
              <th>Price/unit</th>
              <th>Available</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, index) => (
              <tr key={p._id}>
                <th>{index + 1}</th>
                <td>{p.name}</td>
                <td>
                  <img className="w-10" src={p.img} alt="" />
                </td>
                <td>{p.price}$</td>
                <td>{p.available} units</td>
                <td onClick={() => setProduct(p)}>
                  <label
                    htmlFor="delete-modal"
                    className=" btn bg-red-400 border-0 btn-xs rounded-lg  modal-button"
                  >
                    <FontAwesomeIcon icon={faCancel}></FontAwesomeIcon>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {product && (
        <ConfirmDeleteModal
          product={product}
          refetch={refetch}
          setProduct={setProduct}
        ></ConfirmDeleteModal>
      )}
    </div>
  );
};

export default ManageProducts;
