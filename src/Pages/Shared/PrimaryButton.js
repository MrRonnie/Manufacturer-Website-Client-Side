import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="btn btn-primary uppercase text-white font-bold bg-secondary border-0">
      {children}
    </button>
  );
};

export default PrimaryButton;
