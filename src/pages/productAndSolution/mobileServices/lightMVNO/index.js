import LightMvnoHeader from "component/productAndSolution/mobileServices/lightMVNO/lightMvnoHeader";
import LightMvnoInfo from "component/productAndSolution/mobileServices/lightMVNO/lightMvnoInfo";
import LightMvnoSolutions from "component/productAndSolution/mobileServices/lightMVNO/lightMvnoSolutions";
import MobileServicesNav from "component/productAndSolution/mobileServices/mobileServicesNav";
import { RouteConstant } from "navigation/constant";
import BasicBreadcrumbs from "parts/basicBreadcrumbs";
import Footer from "parts/footer";
import GetUpdate from "parts/getUpdate";
import Navbar from "parts/navbar";
import RelatedNews from "parts/relatedNews";
import React from "react";

const LightMVNO = () => {
  return (
    <>
      <Navbar />
      <main>
        <BasicBreadcrumbs
          links={[
            { label: "Mobile Services", link: RouteConstant?.MOBILE_SERVICES },
            { label: "Light MVNO" },
          ]}
        />
        <MobileServicesNav />
        <LightMvnoHeader />
        <LightMvnoInfo />
        <LightMvnoSolutions />
        <RelatedNews />
        <GetUpdate />
      </main>
      <Footer />
    </>
  );
};

export default LightMVNO;
