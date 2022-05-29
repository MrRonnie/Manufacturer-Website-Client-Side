import React from "react";
import { toast } from "react-toastify";

const MakeAdminRow = ({ user, name, index, refetch }) => {
  const makeAdmin = () => {
    const url = `http://localhost:5000/user/${user.email}`;

    fetch(url, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`${user.email} is an admin now`);
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user.email}</td>
      <td>Loading...</td>
      <td className=" flex justify-center">
        {user?.role === "admin" ? (
          <span className="bg-secondary text-white px-8 font-semibold rounded-md ">
            Admin
          </span>
        ) : (
          <button
            onClick={makeAdmin}
            className="bg-emerald-600 text-white px-3 rounded"
          >
            Make Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default MakeAdminRow;
