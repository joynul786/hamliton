import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import Title from "component/title";
import React from "react";
import WrappedBgImage from "assets/img/static/shape/bss-functional.png";
import LogoImage from "assets/img/static/icon/logo.png";
import WrappedImageCard from "component/cards/wrappedImageCard";

const BssFunctional = () => {
  const { palette } = useTheme();

  return (
    <section>
      <Box color="black.main" pt={10}>
        <Container>
          {/* Wrapped content */}
          <Box pb={10}>
            <Box pb={3}>
              <Title
                title="Functional — Business Support System (BSS)"
                fontSize={36}
              />
            </Box>
            <Grid container alignItems="center" spacing={5}>
              <Grid item xs={12} md={5}>
                <Box pt={5}>
                  <Typography variant="body1">
                    Hamilton’s BSS provides several modules with flexible user
                    interfaces that facilitate the development of bespoke MVNO
                    and telecommunications deployments. Its functionalities can
                    be divided into four primary categories:
                  </Typography>
                  <Typography variant="body1" mt={3}>
                    Whether you want to launch an Mobile Virtual Network Enabler
                    (MVNE), Full Mobile Virtual Network Operator (MVNO), Light
                    Mobile Virtual Network Operator (MVNO), Mobile Virtual
                    Network Aggregator (MVNA), Internet of Things (IOT) service,
                    Machine 2 Machine (M2M) services, you’ll need a BSS to
                    operate alongside your Operations Support System (OSS).
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <WrappedImageCard
                  onlyBgImage
                  bgImage={WrappedBgImage}
                  logo={LogoImage}
                  boxes={[
                    {
                      text: "Customer <br />Management",
                      top: "20%",
                      left: 0,
                    },
                    {
                      text: "Order <br />Management",
                      bottom: 0,
                      left: 0,
                    },
                    {
                      text: "Product <br />Management",
                      right: 0,
                      top: 0,
                    },
                    {
                      text: "Revenue <br />Management",
                      right: 0,
                      bottom: "20%",
                    },
                  ]}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default BssFunctional;
