import { Box, Container, Grid, Typography } from "@mui/material";
import SectionHeading from "component/sectionHeading";
import React from "react";
import HeaderImage from "assets/img/static/bg/bss-header.png";
import HeaderShape from "assets/img/static/shape/bss-header.png";

const BssHeader = () => {
  return (
    <section>
      <Box pt={10} pb={5} color="black.main">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Box pt={3} fontWeight={400}>
                <SectionHeading
                  title="Business Support <br />System (BSS)"
                  titleFontSize={54}
                />
                <Typography variant="body1" mt={3}>
                  Hamilton’s Business Support System (BSS) hosts the various
                  services enjoyed by end-users. It contains a variety of
                  cross-integrated modules and functions, enabling you to manage
                  your service offerings any way you want.
                </Typography>
                <Typography variant="body1" mt={1}>
                  With fully independent, real-time controls for pre-paid and
                  post-paid account management, you’ll be able to efficiently
                  launch creative, new offerings.
                </Typography>
                <Typography variant="body1" mt={1}>
                  Aside from real-time controls for voice, SMS, and data (VSD)
                  services, the Hamilton BSS also provides offline and Over The
                  Top (OTT) interfaces that enable you to enrich your product
                  catalog with OTT services and online content services.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box height="100%" minHeight="400px" position="relative">
                <Box
                  bgcolor="secondary.main"
                  width="50%"
                  height="100%"
                  position="absolute"
                  right={0}
                  borderRadius={5}
                  overflow="hidden"
                >
                  <img
                    src={HeaderShape}
                    alt="BSS"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "absolute",
                      top: -10,
                    }}
                  />
                </Box>
                <Box position="absolute" bottom={0} width="100%" height="110%">
                  <img
                    src={HeaderImage}
                    alt="BSS"
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

export default BssHeader;
