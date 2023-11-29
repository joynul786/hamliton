import { Box, Container } from "@mui/material";
import StandardButton from "component/buttons/standardButton";
import SectionHeading from "component/sectionHeading";
import Footer from "parts/footer";
import Navbar from "parts/navbar";
import React from "react";

const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <main>
        <Container>
          <Box py={15} textAlign="center" color="black.main">
            <SectionHeading title="Page Not Found" />
            <Box pt={3}>
              <StandardButton buttonText="Back To Home" link="/" />
            </Box>
          </Box>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default PageNotFound;
