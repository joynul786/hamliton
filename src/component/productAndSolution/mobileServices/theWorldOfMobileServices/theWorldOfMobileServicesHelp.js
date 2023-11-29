import { Box, Container, Grid, Typography } from "@mui/material";
import Title from "component/title";
import React from "react";
import HelpImage from "assets/img/static/bg/the-world-of-mobile-services-help.png";

const TheWorldOfMobileServicesHelp = () => {
  return (
    <section>
      <Box pt={8} pb={2}>
        <Container>
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item xs={12} md={4}>
              <Box maxWidth={300}>
                <Title
                  title="How Hamilton Telecom Help you Get started without any stress"
                  fontSize={24}
                  fontWeight={700}
                  color="primary"
                />
              </Box>
              <Typography variant="body1" mt={3}>
                Hamilton Telecom's platform makes it easy for anyone to enter
                the mobile telecommunications industry, whether you are a Mobile
                Network Operator, MVNO, MVNE, or MVNA. With a global
                connectivity platform and specialized Business Support System,
                Hamilton helps you manage your operations and expand your
                services into new markets.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                bgcolor="secondary.main"
                height="100%"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                color="white.main"
                position="relative"
                zIndex={1}
                overflow="hidden"
              >
                <Box p={5} pb={8}>
                  <Title
                    title="Get Started <br />With just A <br />Few Click"
                    fontWeight={700}
                  />
                </Box>
                <Box>
                  <img src={HelpImage} alt="Hamilton Telecom" />
                </Box>

                <Box
                  bgcolor="orange.main"
                  width="70%"
                  height="100%"
                  position="absolute"
                  bottom="-15%"
                  borderRadius="50%"
                  left="50%"
                  zIndex={-1}
                  sx={{ transform: "translateX(-50%)" }}
                />
                <Box
                  bgcolor="primary.main"
                  width="60%"
                  height="100%"
                  position="absolute"
                  bottom="-30%"
                  borderRadius="50%"
                  left="50%"
                  zIndex={-1}
                  sx={{ transform: "translateX(-50%)" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default TheWorldOfMobileServicesHelp;
