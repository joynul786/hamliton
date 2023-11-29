import HomeAbout from "component/home/homeAbout";
import HomeChooseUs from "component/home/homeChooseUs";
import HomeHeader from "component/home/homeHeader";
import HomeServices from "component/home/homeServices";
import Navbar from "parts/navbar";
import React from "react";

import HomeCoverage from "component/home/homeCoverage";
import HomeTestimonial from "component/home/homeTestimonial";
import GetUpdate from "parts/getUpdate";
import Footer from "parts/footer";

import "../../styles/home/index.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <HomeHeader />
        <HomeAbout />
        <HomeChooseUs />
        <HomeServices />
        <HomeCoverage />
        <HomeTestimonial />
        <GetUpdate />
      </main>
      <Footer />
    </>
  );
};

export default Home;
