import React from "react";
import { toast } from "react-toastify";

const AddAProduct = () => {
  const addToInventory = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.img.files[0];
    const description = e.target.description?.value;
    const minimumOrder = parseInt(e.target.minimumOrder?.value);
    const available = parseInt(e.target.available?.value);
    const price = parseInt(e.target.price?.value);

    //   For storage image in third party storage imgBB
    const imgStorageKey = "9c6876786806d3dbb028b047daea8168";

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const img = data.data.url;
          console.log(img);

          const newProduct = {
            name,
            img,
            description,
            minimumOrder,
            available,
            price,
          };

          fetch("http://localhost:5000/product", {
            method: "POST",
            headers: {
              "content-type": "Application/json",
              authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            },
            body: JSON.stringify(newProduct),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                toast.success("Product Added Successfully in the Inventory");
                e.target.reset();
              }
            });
        }
      });
  };

  return (
    <div>
      <h2 className="text-xl text-center font-semibold my-3">Add a Product</h2>

      <form
        onSubmit={addToInventory}
        action=""
        className="form-control lg:max-w-lg gap-y-5 mx-auto"
      >
        <input
          className=" input input-bordered rounded h-9"
          required
          type="text"
          placeholder="name"
          name="name"
        />
        <input
          className=" input input-bordered rounded h-9"
          required
          type="file"
          placeholder="image"
          name="img"
        />
        <input
          className=" input input-bordered rounded h-9"
          required
          type="text"
          placeholder="description"
          name="description"
        />
        <input
          className=" input input-bordered rounded h-9"
          required
          type="number"
          placeholder="minimum order"
          name="minimumOrder"
        />
        <input
          className=" input input-bordered rounded h-9"
          required
          type="number"
          placeholder="available"
          name="available"
        />
        <input
          className=" input input-bordered rounded h-9"
          required
          type="number"
          placeholder="price"
          name="price"
        />

        <input
          className=" h-9 btn btn-black"
          required
          type="submit"
          value="Add to Inventory"
        />
      </form>
    </div>
  );
};

export default AddAProduct;
