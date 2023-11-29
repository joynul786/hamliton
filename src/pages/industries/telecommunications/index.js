import { Box } from "@mui/material";
import TelecommunicationsHeader from "component/industries/telecommunications/telecommunicationsHeader";
import TelecommunicationsInfo from "component/industries/telecommunications/telecommunicationsInfo";
import TelecommunicationsLaunch from "component/industries/telecommunications/telecommunicationsLaunch";
import Footer from "parts/footer";
import GetUpdate from "parts/getUpdate";
import Navbar from "parts/navbar";
import RelatedNews from "parts/relatedNews";
import React from "react";

const Telecommunications = () => {
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
        <TelecommunicationsHeader />
        <TelecommunicationsInfo />
        <TelecommunicationsLaunch />
        <RelatedNews />
        <GetUpdate />
      </main>
      <Footer />
    </>
  );
};

export default Telecommunications;
