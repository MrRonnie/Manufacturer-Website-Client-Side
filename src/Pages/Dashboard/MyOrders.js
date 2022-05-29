import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import MyOrderModal from "./MyOrderModal";
import MyOrderRow from "./MyOrderRow";

const MyOrders = () => {
  const [deleteOrder, setDeleteOrder] = useState(null);
  const [user, loading] = useAuthState(auth);
  const url = `http://localhost:5000/order?email=${user?.email}`;

  const {
    data: myOrders,
    isLoading,
    refetch,
  } = useQuery(["myOrders", user], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading || loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2>My Orders : {myOrders?.length}</h2>

      {/* //table */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Payment Status</th>
              <th>Transaction Id</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order, index) => (
              <MyOrderRow
                key={order._id}
                setDeleteOrder={setDeleteOrder}
                refetch={refetch}
                index={index}
                order={order}
              ></MyOrderRow>
            ))}
          </tbody>
        </table>
      </div>

      {deleteOrder && (
        <MyOrderModal
          deleteOrder={deleteOrder}
          setDeleteOrder={setDeleteOrder}
          refetch={refetch}
        ></MyOrderModal>
      )}
    </div>
  );
};

export default MyOrders;
