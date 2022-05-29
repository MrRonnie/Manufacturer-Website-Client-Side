import React from "react";
import { toast } from "react-toastify";

const AdminOrderDeleteModal = ({ order, refetch, setDeleteOrder }) => {
  const { _id, email, itemName } = order;

  const deleteUnpaidOrder = () => {
    fetch(`http://localhost:5000/order/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          setDeleteOrder(null);
          toast.success("Order Deleted");
        }
      });
  };

  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="admin-delete-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box">
          <label
            htmlFor="admin-delete-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="text-lg font-semibold ">
            Sure to Delete the order for {itemName} of {email}{" "}
            <span className="text-red-500 font-bold"></span> ?
          </h3>

          <div className="modal-action">
            <button onClick={deleteUnpaidOrder} className="btn btn-sm rounded">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDeleteModal;
