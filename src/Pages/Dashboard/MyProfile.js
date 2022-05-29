import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [user] = useAuthState(auth);
  const url = `https://rocky-dawn-14713.herokuapp.com/user/${user?.email}`;
  const { data, isLoading, refetch } = useQuery("userInfo", () =>
    fetch(url).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const updateInfo = (e) => {
    e.preventDefault();
    const education = e.target.education.value;
    const city = e.target.city.value;
    const contact = e.target.contact.value;
    const linkedIn = e.target.linkedIn.value;

    const updatedInfo = {
      education,
      city,
      contact,
      linkedIn,
    };

    fetch(`https://rocky-dawn-14713.herokuapp.com/user/${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "Application/json",
        authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast("Information Updated Successfully");
          setIsEdit(false);
        }
      });
  };

  return (
    <div>
      <p className="text-2xl mb-10 lg:ml-10">Your Information</p>

      <div className=" border lg:ml-10 lg:w-96 shadow-md p-7">
        <h2 className="my-2 text-lg ">
          Name : <span className="font-semibold">{data.email}</span>
        </h2>
        <h2 className="my-2 text-lg ">
          email : <span className="font-semibold">{user.displayName}</span>
        </h2>
        <h2 className="my-2 text-lg ">
          City : <span className="font-semibold">{data.city}</span>
        </h2>
        <h2 className="my-2 text-lg ">
          Contact : <span className="font-semibold">{data.contact}</span>
        </h2>
        <h2 className="my-2 text-lg ">
          Education : <span className="font-semibold">{data.education}</span>
        </h2>
        <h2 className="my-2 text-lg ">
          LinkedIn : <span className="font-semibold">{data.linkedIn}</span>
        </h2>
      </div>
      <div className=" ">
        <button
          onClick={() => setIsEdit(true)}
          className="btn btn-sm rounded h-5 mt-5 lg:ml-10"
        >
          Update Information
        </button>
      </div>

      {isEdit && (
        <form
          onSubmit={updateInfo}
          action=""
          className="form-control lg:max-w-lg gap-y-5 mx-auto"
        >
          <input
            className=" input input-bordered rounded h-9"
            readOnly
            value={user.displayName}
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className=" input input-bordered rounded h-9"
            type="text"
            readOnly
            name="email"
            value={data.email}
            placeholder="Email"
          />

          <input
            className=" input input-bordered rounded h-9"
            type="text"
            name="education"
            placeholder="Education"
          />

          <input
            className=" input input-bordered rounded h-9"
            type="text"
            name="city"
            placeholder="City"
          />

          <input
            className=" input input-bordered rounded h-9"
            type="text"
            name="contact"
            placeholder="Contact Number"
          />

          <input
            className=" input input-bordered rounded h-9"
            type="text"
            name="linkedIn"
            placeholder="LinkedIn Profile"
          />

          <input className="btn rounded" type="submit" value="Update" />
        </form>
      )}
    </div>
  );
};

export default MyProfile;
