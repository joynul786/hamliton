import Footer from "parts/footer";
import Navbar from "parts/navbar";
import React from "react";

import GetUpdate from "parts/getUpdate";
import TopPattern from "assets/img/static/shape/pattern-1.png";
import { Box } from "@mui/material";
import CallCenterServicesHeader from "component/productAndSolution/callCenterServices/header";
import CallCenterServicesInfo from "component/productAndSolution/callCenterServices/info";
import CallCenterServicesSteps from "component/productAndSolution/callCenterServices/steps";
import CallCenterServicesCustomerExperience from "component/productAndSolution/callCenterServices/customerExperience";

import "../../../styles/productAndSolution/callCenterServices.scss";

const CallCenterServices = () => {
  return (
    <>
      <Navbar />
      <main>
        <CallCenterServicesHeader />
        <CallCenterServicesInfo />
        <CallCenterServicesSteps />
        <CallCenterServicesCustomerExperience />
        <section>
          <Box
            pt={15}
            sx={{
              background: `url(${TopPattern})`,
              backgroundRepeat: "repeat",
            }}
          />
        </section>
        <GetUpdate />
      </main>
      <Footer />
    </>
  );
};

export default CallCenterServices;
