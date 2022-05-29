import React from "react";
import { toast } from "react-toastify";

const MyOrderModal = ({ refetch, deleteOrder, setDeleteOrder }) => {
  const { itemName, orderQuantity, _id } = deleteOrder;

  const deleteItem = () => {
    fetch(`https://rocky-dawn-14713.herokuapp.com/order/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success(
            `Order of ${itemName} for ${orderQuantity} units Deleted`
          );
          refetch();
          setDeleteOrder(null);
        }
      });
  };
  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-order-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box">
          <label
            htmlFor="my-order-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="text-lg font-semibold ">
            Delete order for{" "}
            <span className="text-red-500 font-bold">{itemName}</span> ?
          </h3>

          <div className="modal-action">
            <button onClick={deleteItem} className="btn btn-sm rounded">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrderModal;
