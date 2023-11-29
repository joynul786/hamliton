import NPOHeader from "component/industries/NPO/NPOHeader";
import NPOInfo from "component/industries/NPO/NPOInfo";
import NPOProducts from "component/industries/NPO/NPOProducts";
import Footer from "parts/footer";
import GetUpdate from "parts/getUpdate";
import Navbar from "parts/navbar";
import RelatedNews from "parts/relatedNews";
import React from "react";

const NPO = () => {
  return (
    <>
      <Navbar />
      <main>
        <NPOHeader />
        <NPOInfo />
        <NPOProducts />
        <RelatedNews />
        <GetUpdate />
      </main>
      <Footer />
    </>
  );
};

export default NPO;
