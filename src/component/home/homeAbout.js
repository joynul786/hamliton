import { Box, Container, Grid, Typography } from "@mui/material";
import SectionHeading from "component/sectionHeading";
import React from "react";
import AboutImage1 from "assets/img/static/bg/home-about-1.png";
import AboutImage2 from "assets/img/static/bg/home-about-2.png";

const HomeAbout = () => {
  return (
    <section>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box pt={{ md: 12 }}>
              <SectionHeading
                subtitle="Know More About"
                title="Hamilton Telecom"
              />
              <Typography variant="body2" mt={2}>
                Hamilton Telecom was born out of the desire to fill the gap in
                the Ugandan Telecommunication Industry. With our cutting-edge
                technology solutions, we aim to revolutionize your business
                through our digital transformation. On this backdrop, we provide
                the industry with the most agile and comprehensive solutions
                which include MVNO services, fiber: backhaul: last mile
                connectivity, Cloud Communication Platform and Business
                OutSourcing
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box>
                    <img src={AboutImage1} alt="Hamilton Telecom" />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box pt={{ xs: 4, md: 12 }}>
                    <img src={AboutImage2} alt="Hamilton Telecom" />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HomeAbout;
