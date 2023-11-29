import MobileServicesChoose from "component/productAndSolution/mobileServices/mobileServicesChoose";
import MobileServicesFaq from "component/productAndSolution/mobileServices/mobileServicesFaq";
import MobileServicesHeader from "component/productAndSolution/mobileServices/mobileServicesHeader";
import MobileServicesNav from "component/productAndSolution/mobileServices/mobileServicesNav";
import BrandsSlider from "parts/brandsSlider";
import Footer from "parts/footer";
import GetUpdate from "parts/getUpdate";
import Navbar from "parts/navbar";
import RelatedNews from "parts/relatedNews";
import React from "react";

const MobileServices = () => {
  return (
    <>
      <Navbar />
      <main>
        <MobileServicesNav />
        <MobileServicesHeader />
        <BrandsSlider />
        <MobileServicesChoose />
        <RelatedNews />
        <GetUpdate />
        <MobileServicesFaq />
      </main>
      <Footer />
    </>
  );
};

export default MobileServices;
