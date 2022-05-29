import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);

  const submitReview = (e) => {
    e.preventDefault();
    const review = {
      email: user.email,
      comment: e.target.reviewText.value,
      rating: e.target.rating.value,
    };

    fetch("http://localhost:5000/feedbacks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Review Added");
        }
      });
  };

  return (
    <div>
      <h2 className="text-center text-3xl my-3 font-semibold text-gray-600">
        Add A Review
      </h2>
      <p className="text-center font-semibold text-gray-600 ">
        Please write your review or feedbacks here and dont forget to give us a
        rating!
      </p>
      <div className="divider w-1/2 mx-auto font-bold">*</div>

      <form onSubmit={submitReview} className=" text-center" action="">
        <textarea
          name="reviewText"
          className="textarea textarea-bordered border-gray-300 rounded lg:w-96 h-56 lg:h-36"
          placeholder="Write your review here"
        ></textarea>
        <br />
        <input
          min="0"
          max="5"
          type="number"
          className="lg:w-96 input input-bordered lg:h-8 w-44 h-8 rounded"
          placeholder="Rating (1-5)"
          name="rating"
          id=""
        />
        <br />
        <input
          type="submit"
          value="Submit"
          className="btn lg:w-96 w-44 mt-5 rounded"
        />
      </form>
    </div>
  );
};

export default AddReview;
