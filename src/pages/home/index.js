import HomeAbout from "component/home/homeAbout";
import HomeChooseUs from "component/home/homeChooseUs";
import HomeHeader from "component/home/homeHeader";
import Navbar from "parts/navbar";
import React from "react";
import ContactUs from "parts/contactUs";
import Footer from "parts/footer";
import ProductSlider from "component/home/productsSlider";

import "../../styles/home/index.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <HomeHeader />
        <HomeAbout />
        <ProductSlider/>

        <HomeChooseUs />
        <ContactUs/>
      </main>
      <Footer />
    </>
  );
};

export default Home;
