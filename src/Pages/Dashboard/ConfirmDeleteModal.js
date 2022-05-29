import React from "react";
import { toast } from "react-toastify";

const ConfirmDeleteModal = ({ product, setProduct, refetch }) => {
  const { _id, name } = product;

  const deleteProduct = () => {
    fetch(`http://localhost:5000/product/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.deletedCount > 0) {
          toast.success(`Deleted ${name}`);
          refetch();
          setProduct(null);
        }
      });
  };
  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box">
          <label
            htmlFor="delete-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="text-lg font-semibold ">
            Sure to Delete{" "}
            <span className="text-red-500 font-bold">{name}</span> ?
          </h3>

          <div className="modal-action">
            <button onClick={deleteProduct} className="btn btn-sm rounded">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
