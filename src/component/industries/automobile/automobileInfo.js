import { Box, Container, Grid, useTheme } from "@mui/material";
import Title from "component/title";
import React from "react";

import WrappedImageCard from "component/cards/wrappedImageCard";

const AutomobileInfo = () => {
  const { palette } = useTheme();
  return (
    <section>
      <Box py={5} mb={10} color="black.main">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <Box pt={5}>
                <Title
                  fontSize={36}
                  title="Keep Drivers and Vehicles Connected No Matter What"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <WrappedImageCard
                bgColor={palette?.primary?.[600]}
                boxes={[
                  {
                    text: "Automatically Connect <br />to Global Wi-Fi",
                    top: "20%",
                    left: "5%",
                  },
                  {
                    text: "Download Digital <br />Content",
                    bottom: 0,
                    left: "20%",
                  },
                  {
                    text: "Facilitate Over-The-Air <br />(OTA) Updates",
                    right: 0,
                    top: "40%",
                  },
                ]}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} mt={5}>
            <Grid item xs={12} md={7}>
              <Box mt={{ md: "-20%" }}>
                <WrappedImageCard
                  bgColor={palette?.secondary?.[600]}
                  boxes={[
                    {
                      text: "Create Driver <br />Profiles",
                      top: "20%",
                      left: "10%",
                    },
                    {
                      text: "Offer Concierge <br />Services",
                      bottom: 0,
                      left: "20%",
                    },
                    {
                      text: "Enable Easy Maintenance <br />Scheduling",
                      right: 0,
                      top: "40%",
                    },
                  ]}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              order={{ xs: -1, md: 2 }}
              display="flex"
              alignItems="flex-end"
            >
              <Box pb={{ md: 5 }}>
                <Title
                  fontSize={36}
                  title="Improve Driver Experiences and Boost Lifetime Value"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default AutomobileInfo;
