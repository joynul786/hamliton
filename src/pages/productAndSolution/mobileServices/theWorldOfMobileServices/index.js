import MobileServicesNav from "component/productAndSolution/mobileServices/mobileServicesNav";
import TheWorldOfMobileServicesHeader from "component/productAndSolution/mobileServices/theWorldOfMobileServices/theWorldOfMobileServicesHeader";
import TheWorldOfMobileServicesHelp from "component/productAndSolution/mobileServices/theWorldOfMobileServices/theWorldOfMobileServicesHelp";
import TheWorldOfMobileServicesInfo from "component/productAndSolution/mobileServices/theWorldOfMobileServices/theWorldOfMobileServicesInfo";
import { RouteConstant } from "navigation/constant";
import BasicBreadcrumbs from "parts/basicBreadcrumbs";
import Footer from "parts/footer";
import GetUpdate from "parts/getUpdate";
import Navbar from "parts/navbar";
import React from "react";

const TheWorldOfMobileServices = () => {
  return (
    <>
      <Navbar />
      <main>
        <BasicBreadcrumbs
          links={[
            { label: "Mobile Services", link: RouteConstant?.MOBILE_SERVICES },
            { label: "The World of Mobile Services" },
          ]}
        />
        <MobileServicesNav />
        <TheWorldOfMobileServicesHeader />
        <TheWorldOfMobileServicesInfo />
        <GetUpdate />
        <TheWorldOfMobileServicesHelp />
      </main>
      <Footer />
    </>
  );
};

export default TheWorldOfMobileServices;
