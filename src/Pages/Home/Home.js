import React from "react";
import Footer from "../Shared/Footer";
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
      <MidCard></MidCard>
      <ContactUs></ContactUs>
      <Info></Info>
      <Footer></Footer>
    </div>
  );
};

export default Home;
