import BssDetails from "component/productAndSolution/mobileServices/businessSupportSystem/bssDetails";
import BssFunctional from "component/productAndSolution/mobileServices/businessSupportSystem/bssFunctional";
import BssHeader from "component/productAndSolution/mobileServices/businessSupportSystem/bssHeader";
import MobileServicesNav from "component/productAndSolution/mobileServices/mobileServicesNav";
import { RouteConstant } from "navigation/constant";
import BasicBreadcrumbs from "parts/basicBreadcrumbs";
import Footer from "parts/footer";
import GetUpdate from "parts/getUpdate";
import Navbar from "parts/navbar";
import RelatedNews from "parts/relatedNews";
import React from "react";

const BusinessSupportSystem = () => {
  return (
    <>
      <Navbar />
      <main>
        <BasicBreadcrumbs
          links={[
            { label: "Mobile Services", link: RouteConstant?.MOBILE_SERVICES },
            { label: "Business Support System (BSS)" },
          ]}
        />
        <MobileServicesNav />

        <BssHeader />
        <BssFunctional />
        <BssDetails />
        <RelatedNews />
        <GetUpdate />
      </main>
      <Footer />
    </>
  );
};

export default BusinessSupportSystem;
