import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Purchase = () => {
  const [warning, setWarning] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [isDisabled, setIsDisabled] = useState(null);
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [item, setItem] = useState({});

  const { _id, name, img, description, minimumOrder, available, price } = item;

  //getting the item's info
  useEffect(() => {
    fetch(`http://localhost:5000/item/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  const quantityHandle = (event) => {
    setIsDisabled(false);
    setWarning("");
    const stringInput = event.target.value;
    const input = parseInt(stringInput);

    if (minimumOrder > input) {
      setIsDisabled(true);
      setWarning(`You have to order atleast ${minimumOrder} units`);
    } else if (available < input) {
      setIsDisabled(true);
      setWarning(`Can not order more than ${available} units`);
    } else {
      setQuantity(input);
    }
  };

  const placeOrder = (e) => {
    e.preventDefault();
    const email = user.email;
    const itemId = _id;
    const orderQuantity = parseInt(e.target.orderQuantity.value);
    const totalPrice = parseInt(e.target.totalPrice.value);
    const customerName = e.target.customerName.value;
    const itemName = name;
    const contact = e.target.contact.value;
    const address = e.target.address.value;

    const orderSummary = {
      email,
      itemId,
      itemName,
      orderQuantity,
      totalPrice,
      customerName,
      contact,
      address,
    };
    console.log(orderSummary);

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
      body: JSON.stringify(orderSummary),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Order Placed Successfully");
        }
      });

    e.target.reset();
  };

  return (
    <div className="mb-20">
      <div className="mb-10 mt-5 text-center">
        <h3 className="font-semibold ">
          <span>{user?.displayName}</span>
        </h3>
        <h3 className="font-semibold  text-green-700">
          <span>{user?.email}</span>
        </h3>
      </div>

      {/* Product info */}
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
              {description}
            </p>
            <hr />
            <p className="my-3 text-sm text-slate-500">
              <span className="font-semibold">Minimum Order:</span>{" "}
              {minimumOrder}
            </p>
            <hr />

            <div className="flex justify-between items-center mt-2 mb-3">
              <h3 className="text-2xl font-bold text-emerald-500">${price}</h3>
              <p className="text-gray-500 text-md">
                Stock: <span className="text-green-600">{available}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="mt-20">
        <form
          onSubmit={placeOrder}
          className="form-control lg:max-w-lg gap-y-5 mx-auto"
          action=""
        >
          <input
            className=" input input-bordered rounded"
            placeholder="Email"
            readOnly
            value={user?.email}
            type="email"
            name="email"
          />

          <input
            required
            className=" input input-bordered rounded"
            placeholder="Name"
            value={user?.displayName}
            type="text"
            name="customerName"
          />

          <input
            required
            className=" input input-bordered rounded"
            placeholder="Contact"
            type="text"
            name="contact"
          />

          <input
            required
            onChange={quantityHandle}
            className=" input input-bordered rounded"
            placeholder="Order Quantity"
            type="number"
            name="orderQuantity"
          />

          <input
            required
            className=" input input-bordered rounded"
            placeholder="Total"
            readOnly
            value={price * quantity}
            type="number"
            name="totalPrice"
          />

          <span className="text-red-500 text-sm">{warning}</span>
          <input
            required
            className=" input input-bordered rounded"
            placeholder="Address"
            type="text"
            name="address"
          />

          <input
            className="btn "
            disabled={isDisabled}
            type="submit"
            value="Place Order"
          />
        </form>
      </div>
    </div>
  );
};

export default Purchase;
