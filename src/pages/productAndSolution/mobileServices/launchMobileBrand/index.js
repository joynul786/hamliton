import LaunchMobileBrandHeader from "component/productAndSolution/mobileServices/launchMobileBrand/launchMobileBrandHeader";
import LaunchMobileBrandInfo from "component/productAndSolution/mobileServices/launchMobileBrand/launchMobileBrandInfo";
import MobileServicesNav from "component/productAndSolution/mobileServices/mobileServicesNav";
import { RouteConstant } from "navigation/constant";
import BasicBreadcrumbs from "parts/basicBreadcrumbs";
import Footer from "parts/footer";
import GetUpdate from "parts/getUpdate";
import Navbar from "parts/navbar";
import React from "react";

const LaunchMobileBrand = () => {
  return (
    <>
      <Navbar />
      <main>
        <BasicBreadcrumbs
          links={[
            { label: "Mobile Services", link: RouteConstant?.MOBILE_SERVICES },
            { label: "Launch your own mobile brand" },
          ]}
        />
        <MobileServicesNav />
        <LaunchMobileBrandHeader />
        <LaunchMobileBrandInfo />
        <GetUpdate />
      </main>
      <Footer />
    </>
  );
};

export default LaunchMobileBrand;
