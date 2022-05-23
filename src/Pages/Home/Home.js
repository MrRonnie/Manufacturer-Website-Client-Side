import React from "react";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Info from "./Info";
import MidCard from "./MidCard";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <MidCard></MidCard>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
