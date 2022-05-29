import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L4nnGAxohSxP9Q6TOOKhWzcyWTTCOGaDXxuMnjeEFLQSSAdIrfkBPss9N2HWGJT3cVMQVOvcvxwvbXrU6vhWxh500qD22LRsH"
);

const Payment = () => {
  const { id } = useParams();

  const {
    data: order,
    refetch,
    isLoading,
  } = useQuery(["order", id], () =>
    fetch(`https://rocky-dawn-14713.herokuapp.com/oneOrder/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="text-center font-semibold">
        <h2> id : {id}</h2>
        <h2> Payment for : {order?.itemName}</h2>
      </div>

      <div className="card lg:w-96 max-w-lg bg-base-100 shadow-xl border border-green-500 mb-14 lg:ml-24">
        <div className="card-body">
          <h2 className="text-xl font-semibold">
            Payment for{" "}
            <span className="text-green-500">{order?.itemName}</span>
          </h2>
          <p>Quantity : {order?.orderQuantity} units</p>
          <p>
            Total :{" "}
            <span className="font-bold text-green-600">
              {order?.totalPrice}
            </span>{" "}
            $
          </p>
        </div>
      </div>

      {/* PAYMENT PART HERE------------------------------------------------------ */}
      <div className="card lg:w-96 max-w-lg bg-base-100 shadow-xl border border-green-500 lg:ml-24">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
