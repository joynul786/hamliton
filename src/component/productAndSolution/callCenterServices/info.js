import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import BgImage from "assets/img/static/bg/call-center-services-info-bg.png";
import InfoImage from "assets/img/static/bg/call-center-services-info.png";
import LogoImage from "assets/img/static/icon/logo-white.png";
import StandardButton from "component/buttons/standardButton";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const CallCenterServicesInfo = () => {
  return (
    <section>
      <Box py={5}>
        <Container maxWidth="xl">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={8}
          >
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  background: `url(${BgImage})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                position="relative"
              >
                <Box
                  position="absolute"
                  bottom={0}
                  left={{ xs: -20, md: -50 }}
                  width="70%"
                  height="100%"
                >
                  <img
                    src={InfoImage}
                    alt="Hamilton Telecom"
                    style={{
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "bottom",
                    }}
                  />
                </Box>
                <Box py={5} pr={2} pl="50%">
                  <Box sx={{ color: "rgba(221, 221, 221, 1)" }}>
                    <Typography variant="body2">Join And Experience</Typography>
                    <Typography
                      variant="h5"
                      lineHeight={1.2}
                      mt={1}
                      fontWeight={500}
                    >
                      World <br />
                      Class
                    </Typography>
                    <Typography
                      variant="h5"
                      lineHeight={1.2}
                      mt={1}
                      color="secondary.main"
                      fontWeight={700}
                    >
                      Call Center
                    </Typography>
                    <Typography variant="body2" textAlign="end">
                      Services
                    </Typography>
                  </Box>
                  <Box pt={5}>
                    <img
                      src={LogoImage}
                      alt="Hamilton Telecom"
                      className="logo-image"
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box color="black.main">
                <Typography variant="body1" mb={3}>
                  Hamilton Telecom offers call center services to help
                  businesses provide excellent customer support to their
                  clients. Our call center solutions are designed to meet the
                  unique needs of each business, providing a personalized
                  approach to customer service. Our highly trained agents use
                  the latest technology and tools to handle calls, emails, and
                  other communication channels, ensuring that customers receive
                  prompt and efficient service. With Hamilton Telecom's call
                  center services, businesses can improve customer satisfaction
                  and loyalty, while reducing costs and improving overall
                  efficiency.
                </Typography>
                <StandardButton
                  buttonText="Connect With Us"
                  link="#"
                  endIcon={<ArrowOutwardIcon />}
                  className="bg-dark-main fc-white"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default CallCenterServicesInfo;
