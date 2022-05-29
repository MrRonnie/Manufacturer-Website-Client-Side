import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import ReviewCard from "./ReviewCard";
import quote from "../../assets/icons/quote.svg";

const Reviews = () => {
  const { data: feedbacks, refetch } = useQuery("feedbacks", () =>
    fetch("https://rocky-dawn-14713.herokuapp.com/feedbacks").then((res) =>
      res.json()
    )
  );

  return (
    <div className="mt-28 ">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonials</h4>
          <h2 className="text-3xl ">What Our Clients Says</h2>
        </div>
        <div>
          <img src={quote} className="lg:w-48 w-24" alt="" />
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-5   py-10">
        {feedbacks?.map((f) => (
          <ReviewCard key={f._id} review={f}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
