import React from "react";
import { useNavigate } from "react-router-dom";
import card from "../../assets/images/mid-card.jpg";
import PrimaryButton from "../Shared/PrimaryButton";

const MidCard = () => {
  const navigate = useNavigate();
  return (
    <div className="hero min-h-screen justify-center mt-5">
      <div className="hero-content flex-col lg:flex-row-reverse gap-14 px-24">
        <img src={card} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold ">
            In the mind of every artist there is a Masterpiece
          </h1>
          <p className="py-6 text-justify">
            When love and skill work together, expect a masterpiece. All the
            masterpieces of art contain both light and shadow. A happy life is
            not one filled with only sunshine, but one which uses both light and
            shadow to produce beauty. a masterpiece doesn't so much transcend
            its time as perpetuate it; it keeps its moment alive.
          </p>
          <PrimaryButton>
            <span onClick={() => navigate("/")}>Book Now</span>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default MidCard;
