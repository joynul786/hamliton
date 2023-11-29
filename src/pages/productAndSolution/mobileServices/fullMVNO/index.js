import FullMvnoHeader from "component/productAndSolution/mobileServices/fullMVNO/fullMvnoHeader";
import FullMvnoInfo from "component/productAndSolution/mobileServices/fullMVNO/fullMvnoInfo";
import FullMvnoSolutions from "component/productAndSolution/mobileServices/fullMVNO/fullMvnoSolutions";
import MobileServicesNav from "component/productAndSolution/mobileServices/mobileServicesNav";
import { RouteConstant } from "navigation/constant";
import BasicBreadcrumbs from "parts/basicBreadcrumbs";
import Footer from "parts/footer";
import GetUpdate from "parts/getUpdate";
import Navbar from "parts/navbar";
import RelatedNews from "parts/relatedNews";
import React from "react";

const FullMVNO = () => {
  return (
    <>
      <Navbar />
      <main>
        <BasicBreadcrumbs
          links={[
            { label: "Mobile Services", link: RouteConstant?.MOBILE_SERVICES },
            { label: "Full MVNO" },
          ]}
        />
        <MobileServicesNav />
        <FullMvnoHeader />
        <FullMvnoInfo />
        <FullMvnoSolutions />
        <RelatedNews />
        <GetUpdate />
      </main>
      <Footer />
    </>
  );
};

export default FullMVNO;
