import { Box, Container, Grid, Typography } from "@mui/material";
import StandardButton from "component/buttons/standardButton";
import React from "react";
import HeaderImage from "assets/img/static/bg/home-header.png";
import { RouteConstant } from "navigation/constant";

const HomeHeader = () => {
  return (
    <section>
      <Container maxWidth="xl">
        <Box py={5} color="black.main">
          <Grid
            container
            justifyContent={{ xs: "center", md: "flex-end" }}
            alignItems="center"
          >
            <Grid item xs={12} md={5}>
              <Box>
                <Typography variant="h4">
                  Innovate mobile services for businesses, MNOs, MVNOs, and IoT.
                </Typography>
                <Typography variant="body1" my={2}>
                  Our MVNO, MVNE, MVNA, IoT, and Value Added Services Solutions
                  empowers people, businesses, and devices to deliver unique
                  Mobile and Connectivity experiences.
                </Typography>
                <StandardButton
                  link={RouteConstant?.CONTACT}
                  color="primary"
                  buttonText="Talk With Us"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <img src={HeaderImage} alt="Innovative Mobile Services" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default HomeHeader;
