import FinancialServicesHeader from "component/industries/financialServices/financialServicesHeader";
import FinancialServicesInfo from "component/industries/financialServices/financialServicesInfo";
import Footer from "parts/footer";
import GetUpdate from "parts/getUpdate";
import Navbar from "parts/navbar";
import RelatedNews from "parts/relatedNews";
import React from "react";

const FinancialServices = () => {
  return (
    <>
      <Navbar />
      <main>
        <FinancialServicesHeader />
        <FinancialServicesInfo />
        <RelatedNews />
        <GetUpdate />
      </main>
      <Footer />
    </>
  );
};

export default FinancialServices;
