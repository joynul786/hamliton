import { Box } from "@mui/material";
import HealthCareHeader from "component/industries/healthCare/healthCareHeader";
import HealthCareInfo from "component/industries/healthCare/healthCareInfo";
import Footer from "parts/footer";
import GetUpdate from "parts/getUpdate";
import Navbar from "parts/navbar";
import RelatedNews from "parts/relatedNews";
import React from "react";

const HealthCare = () => {
  return (
    <>
      <Navbar />
      <main style={{ position: "relative", overflow: "hidden" }}>
        <Box
          width={200}
          height="100%"
          bgcolor="primary.100"
          position="absolute"
          sx={{ transform: "rotate(28deg)" }}
          zIndex={-1}
        />
        <HealthCareHeader />
        <HealthCareInfo />
        <RelatedNews />
        <GetUpdate />
      </main>
      <Footer />
    </>
  );
};

export default HealthCare;
