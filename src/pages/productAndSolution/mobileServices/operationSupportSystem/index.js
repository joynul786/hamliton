import MobileServicesNav from "component/productAndSolution/mobileServices/mobileServicesNav";
import OssDetails from "component/productAndSolution/mobileServices/operationSupportSystem/ossDetails";
import OssFunctional from "component/productAndSolution/mobileServices/operationSupportSystem/ossFunctional";
import OssHeader from "component/productAndSolution/mobileServices/operationSupportSystem/ossHeader";
import { RouteConstant } from "navigation/constant";
import BasicBreadcrumbs from "parts/basicBreadcrumbs";
import Footer from "parts/footer";
import GetUpdate from "parts/getUpdate";
import Navbar from "parts/navbar";
import RelatedNews from "parts/relatedNews";
import React from "react";

const OperationSupportSystem = () => {
  return (
    <>
      <Navbar />
      <main>
        <BasicBreadcrumbs
          links={[
            { label: "Mobile Services", link: RouteConstant?.MOBILE_SERVICES },
            { label: "Operation Support System (OSS)" },
          ]}
        />
        <MobileServicesNav />
        <OssHeader />
        <OssFunctional />
        <OssDetails />
        <RelatedNews />
        <GetUpdate />
      </main>
      <Footer />
    </>
  );
};

export default OperationSupportSystem;
