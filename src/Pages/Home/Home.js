import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import ContactUs from "./ContactUs";
import Info from "./Info";
import MidCard from "./MidCard";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BusinessSummary></BusinessSummary>
      <Info></Info>
      <MidCard></MidCard>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
