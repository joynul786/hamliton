import IotHeader from "component/productAndSolution/internetOfThings/iotHeader";
import IotOffer from "component/productAndSolution/internetOfThings/iotOffer";
import Footer from "parts/footer";
import Navbar from "parts/navbar";
import React from "react";
import IotBgImage from "assets/img/static/bg/iot-bg.png";

import IotChoose from "component/productAndSolution/internetOfThings/iotChoose";
import IotFaq from "component/productAndSolution/internetOfThings/iotFaq";

import "../../../styles/productAndSolution/internetOfThings.scss";

const InternetOfThings = () => {
  return (
    <>
      <Navbar />
      <main>
        <IotHeader />
        <section>
          <img src={IotBgImage} alt="Internet of things" />
        </section>
        <IotOffer />
        <IotChoose />
        <IotFaq />
      </main>
      <Footer />
    </>
  );
};

export default InternetOfThings;
