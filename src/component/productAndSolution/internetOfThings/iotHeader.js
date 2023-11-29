import { Box, Container, Grid, Typography } from "@mui/material";
import BackButton from "component/buttons/backButton";
import Title from "component/title";
import React from "react";
import Image1 from "assets/img/static/bg/iot-header-1.png";
import Image2 from "assets/img/static/bg/iot-header-2.png";
import Image3 from "assets/img/static/bg/iot-header-3.png";
import Image4 from "assets/img/static/bg/iot-header-4.png";

const IotHeader = () => {
  return (
    <section>
      <Container>
        <Box color="black.main">
          <Grid container spacing={{ md: 10 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box py={5}>
                <BackButton />
                <Box pt={4} pb={2}>
                  <Title title="Internet of Things | IoT" />
                </Box>
                <Typography variant="body1">
                  The Internet of Things (IoT) is one of the most important
                  technology trends to emerge since the turn of the century. We
                  are surrounded by connected Things — electronic devices, home
                  appliances, automobiles, utilitarian devices, factory
                  equipment, the list goes on. With billions of connected things
                  currently in the market, and billions more expected to be
                  introduced in the years to come, IoT touches every industry,
                  every vertical, and every aspect of our lives.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="iot-header-images">
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Box>
                      <Box bgcolor="secondary.main" className="image-1">
                        <img src={Image1} alt="IOT" />
                      </Box>
                    </Box>
                    <Box mt={2}>
                      <Box bgcolor="primary.main" className="image-3">
                        <img src={Image3} alt="IOT" />
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={6}>
                    <Box mt={2} pt={2}>
                      <Box bgcolor="primary.main" className="image-2">
                        <img src={Image2} alt="IOT" />
                      </Box>
                    </Box>
                    <Box mt={2}>
                      <Box bgcolor="secondary.main" className="image-4">
                        <img src={Image4} alt="IOT" />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default IotHeader;
