import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import ContactUs from "./ContactUs";
import Info from "./Info";
import MidCard from "./MidCard";
import Products from "./Products";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <BusinessSummary></BusinessSummary>
      <MidCard></MidCard>
      <ContactUs></ContactUs>
      <Reviews></Reviews>
      <Info></Info>

      <Footer></Footer>
    </div>
  );
};

export default Home;
