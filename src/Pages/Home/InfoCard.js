import React from "react";

const InfoCard = ({ img, cardTitle, cardDetail, bgClass }) => {
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl  py-5 ${bgClass}`}>
      <figure className="pl-5">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardDetail}</p>
      </div>
    </div>
  );
};

export default InfoCard;
