import { Box } from "@mui/material";
import ManufactureHeader from "component/industries/manufacture/manufactureHeader";
import ManufactureInfo from "component/industries/manufacture/manufactureInfo";
import Footer from "parts/footer";
import GetUpdate from "parts/getUpdate";
import Navbar from "parts/navbar";
import RelatedNews from "parts/relatedNews";
import React from "react";

const Manufacture = () => {
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
        <ManufactureHeader />
        <ManufactureInfo />
        <RelatedNews />
        <GetUpdate />
      </main>
      <Footer />
    </>
  );
};

export default Manufacture;
