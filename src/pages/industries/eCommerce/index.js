import ECommerceHeader from "component/industries/eCommerce/eCommerceHeader";
import ECommerceInfo from "component/industries/eCommerce/eCommerceInfo";
import Footer from "parts/footer";
import GetUpdate from "parts/getUpdate";
import Navbar from "parts/navbar";
import RelatedNews from "parts/relatedNews";
import React from "react";

const ECommerce = () => {
  return (
    <>
      <Navbar />
      <main>
        <ECommerceHeader />
        <ECommerceInfo />
        <RelatedNews />
        <GetUpdate />
      </main>
      <Footer />
    </>
  );
};

export default ECommerce;
