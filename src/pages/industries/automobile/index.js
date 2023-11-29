import AutomobileHeader from "component/industries/automobile/automobileHeader";
import AutomobileInfo from "component/industries/automobile/automobileInfo";
import AutomobileIntroducingIOT from "component/industries/automobile/automobileIntroducingIOT";
import Footer from "parts/footer";
import GetUpdate from "parts/getUpdate";
import Navbar from "parts/navbar";
import RelatedNews from "parts/relatedNews";
import React from "react";

const Automobile = () => {
  return (
    <>
      <Navbar />
      <main>
        <AutomobileHeader />
        <AutomobileIntroducingIOT />
        <AutomobileInfo />
        <RelatedNews />
        <GetUpdate />
      </main>
      <Footer />
    </>
  );
};

export default Automobile;
