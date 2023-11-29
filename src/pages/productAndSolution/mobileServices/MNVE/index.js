import MnveHeader from "component/productAndSolution/mobileServices/MNVE/mnveHeader";
import MnveInfo from "component/productAndSolution/mobileServices/MNVE/mnveInfo";
import MnveSolutions from "component/productAndSolution/mobileServices/MNVE/mnveSolutions";
import MobileServicesNav from "component/productAndSolution/mobileServices/mobileServicesNav";
import { RouteConstant } from "navigation/constant";
import BasicBreadcrumbs from "parts/basicBreadcrumbs";
import Footer from "parts/footer";
import GetUpdate from "parts/getUpdate";
import Navbar from "parts/navbar";
import RelatedNews from "parts/relatedNews";
import React from "react";

const MNVE = () => {
  return (
    <>
      <Navbar />
      <main>
        <BasicBreadcrumbs
          links={[
            { label: "Mobile Services", link: RouteConstant?.MOBILE_SERVICES },
            { label: "MNVE  (Enabler/Aggregator)" },
          ]}
        />
        <MobileServicesNav />
        <MnveHeader />
        <MnveInfo />
        <MnveSolutions />
        <RelatedNews />
        <GetUpdate />
      </main>
      <Footer />
    </>
  );
};

export default MNVE;
