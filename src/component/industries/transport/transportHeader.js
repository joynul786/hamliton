import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Image1 from "assets/img/static/bg/transport-header.png";
import SectionHeading from "component/sectionHeading";

const TransportHeader = () => {
  return (
    <section>
      <Box
        color="white.main"
        sx={{
          background: ({ palette }) =>
            `linear-gradient(0deg,  ${palette?.primary?.[800]}, ${palette?.primary?.[800]} ), url(${Image1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Box pt={30} pb={5}>
            <Box pb={5}>
              <SectionHeading
                title="Transport <span>&</span>  Logistic"
                titleColor="white.main"
                titleFontWeight={400}
              />
            </Box>
            <Typography>
              Hamilton's Mobile Service Suite offers an Operations Support
              System (OSS) that serves as an interface for various networks,
              including mobile, fixed, OTT, broadband, TV, and more. Its
              architecture is designed to be scalable both horizontally and
              vertically, allowing it to handle increasing amounts of traffic
              and data as needed. The OSS is built on global standards,
              protocols, and techniques, making it simple to integrate into
              existing environments without causing disruption.
            </Typography>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default TransportHeader;
