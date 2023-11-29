import HospitalityHeader from "component/industries/hospitality/hospitalityHeader";
import HospitalityInfo from "component/industries/hospitality/hospitalityInfo";
import Footer from "parts/footer";
import GetUpdate from "parts/getUpdate";
import Navbar from "parts/navbar";
import RelatedNews from "parts/relatedNews";
import React from "react";

const Hospitality = () => {
  return (
    <>
      <Navbar />
      <main>
        <HospitalityHeader />
        <HospitalityInfo />
        <RelatedNews />
        <GetUpdate />
      </main>
      <Footer />
    </>
  );
};

export default Hospitality;
