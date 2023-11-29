import { Box, Container, Grid, Typography } from "@mui/material";
import Title from "component/title";
import React from "react";
import Image1 from "assets/img/static/bg/public-sector-1.png";
import Image2 from "assets/img/static/bg/public-sector-2.png";
import Image3 from "assets/img/static/bg/public-sector-3.png";

const PublicSectorInfo = () => {
  const list = [{ image: Image2 }, { image: Image3 }];
  return (
    <section>
      <Box pt={10} pb={5} color="black.main">
        <Container maxWidth="xl">
          <Box>
            <Box pb={3}>
              <Title
                title="The Public Sector Embraces Connectivity"
                fontSize={36}
              />
            </Box>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box>
                  <img src={Image1} alt="The Rise of Digital Giving" />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box fontWeight={400}>
                  <Typography variant="body1">
                    The public sector has made significant progress with the
                    help of advancements in connectivity solutions. With the
                    introduction of IoT, a more flexible mobile data
                    environment, and other connectivity options, governments at
                    all levels have been able to concentrate on enhancing
                    transportation, environmental monitoring, energy usage,
                    security, productivity, and other areas. They have placed a
                    strong emphasis on:
                  </Typography>

                  <ul>
                    <li>
                      Building sophisticated Smart City solutions with IoT
                      devices and real-time data collection.
                    </li>
                    <li>
                      Driving organizational productivity and cost savings with
                      bespoke mobility plans.
                    </li>
                    <li>
                      Improving quality of life for citizens with better
                      communications and high-value public programs and
                      services.
                    </li>
                  </ul>
                </Box>
              </Grid>
            </Grid>

            <Box pt={3}>
              <Grid container spacing={3}>
                {list?.map(({ image }, i) => (
                  <Grid item sm={6} key={i}>
                    <img
                      src={image}
                      alt="IT & ICT"
                      style={{ height: 320, objectFit: "cover" }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default PublicSectorInfo;
