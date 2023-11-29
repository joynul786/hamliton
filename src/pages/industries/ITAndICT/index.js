import ITAndICTHeader from "component/industries/ITAndICT/ITAndICTHeader";
import ITAndICTInfo from "component/industries/ITAndICT/ITAndICTInfo";
import ITAndICTProducts from "component/industries/ITAndICT/ITAndICTProducts";
import Footer from "parts/footer";
import GetUpdate from "parts/getUpdate";
import Navbar from "parts/navbar";
import RelatedNews from "parts/relatedNews";
import React from "react";

const ITAndICT = () => {
  return (
    <>
      <Navbar />
      <main>
        <ITAndICTHeader />
        <ITAndICTInfo />
        <ITAndICTProducts />
        <RelatedNews />
        <GetUpdate />
      </main>
      <Footer />
    </>
  );
};

export default ITAndICT;
