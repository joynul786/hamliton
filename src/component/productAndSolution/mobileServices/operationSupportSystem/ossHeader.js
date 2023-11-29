import { Box, Container, Grid, Typography } from "@mui/material";
import SectionHeading from "component/sectionHeading";
import React from "react";
import HeaderImage from "assets/img/static/bg/oss-header.png";

const OssHeader = () => {
  return (
    <section>
      <Box pt={10} pb={5} color="black.main">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box pt={3} fontWeight={400}>
                <SectionHeading
                  title="Operations Support System (OSS)"
                  titleFontSize={54}
                />
                <Typography variant="body1" mt={3}>
                  The Operations Support System (OSS) offered within the
                  Hamilton Mobile Service Suite was designed to function as an
                  interface for any network, whether mobile, fixed, OTT,
                  broadband, TV, or otherwise. The OSS architecture is scalable
                  both horizontally and vertically. Hamilton's OSS leverages
                  global standards, protocols, and techniques, making it easy to
                  integrate into any existing environments.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box
                bgcolor="secondary.main"
                height="100%"
                minHeight="450px"
                position="relative"
              >
                <Box position="absolute" bottom={0} width="100%" height="110%">
                  <img
                    src={HeaderImage}
                    alt="MVNO"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "bottom center",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default OssHeader;
