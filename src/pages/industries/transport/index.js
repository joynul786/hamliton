import TransportHeader from "component/industries/transport/transportHeader";
import TransportInfo from "component/industries/transport/transportInfo";
import Footer from "parts/footer";
import GetUpdate from "parts/getUpdate";
import Navbar from "parts/navbar";
import RelatedNews from "parts/relatedNews";
import React from "react";

const Transport = () => {
  return (
    <>
      <Navbar />
      <main>
        <TransportHeader />
        <TransportInfo />
        <RelatedNews />
        <GetUpdate />
      </main>
      <Footer />
    </>
  );
};

export default Transport;
