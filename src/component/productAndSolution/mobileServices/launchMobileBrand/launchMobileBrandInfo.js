import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Image1 from "assets/img/static/bg/launch-your-own-mobile-brand-1.png";
import Image2 from "assets/img/static/bg/launch-your-own-mobile-brand-2.png";
import StandardButton from "component/buttons/standardButton";
import { ArrowOutward, AutoAwesome } from "@mui/icons-material";
import Title from "component/title";

const LaunchMobileBrandInfo = () => {
  return (
    <section>
      <Container>
        <Box>
          <Grid container alignItems="center" columnSpacing={2}>
            <Grid item xs={12} md={7}>
              <Box position="relative">
                <img
                  src={Image1}
                  alt="Launch your business with Hamilton telecom"
                />

                <Box
                  position="absolute"
                  bottom={{ sm: 30 }}
                  top={{ xs: 30, sm: "unset" }}
                  left={30}
                  color="black.800"
                >
                  <StandardButton
                    buttonText="Let’s Start My Mobile Brand"
                    endIcon={<ArrowOutward />}
                    sx={{
                      backgroundColor: ({ palette }) => palette?.dark?.main,
                      "&:hover": {
                        backgroundColor: ({ palette }) => palette?.dark?.main,
                      },
                      color: ({ palette }) => palette?.white?.main,
                    }}
                  />
                </Box>

                <Box
                  position="absolute"
                  bottom={-40}
                  right={30}
                  bgcolor="secondary.main"
                  color="white.main"
                  maxWidth={200}
                  p={3}
                  zIndex={1}
                >
                  <Box position="relative">
                    <Box
                      position="absolute"
                      top={-15}
                      left={-20}
                      zIndex={-1}
                      sx={{ color: "#78FD3A" }}
                    >
                      <AutoAwesome fontSize="large" />
                    </Box>
                    <Typography variant="body1" fontSize={20} fontWeight={600}>
                      Launch your business with Hamilton telecom
                      <Box
                        component="span"
                        position="absolute"
                        bottom={-25}
                        zIndex={-1}
                        sx={{ color: "#78FD3A" }}
                      >
                        <AutoAwesome fontSize="large" />
                      </Box>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              order={{ xs: -1, md: 2 }}
              pb={{ xs: 5, md: 0 }}
            >
              <Typography variant="body1">
                Launching your own mobile branded reseller allows you to expand
                your product suite in an easy, fast, and affordable manner.
                Branded resellers repurpose existing telecom services and offer
                them under their own brand, which significantly reduces the
                time-to-market. By using pre-defined settings, tariffs, and
                bundles from an MVNE, MVNA, full or light MVNO, you can focus on
                sales and marketing. Additionally, you can use this service to
                facilitate mobile subscriptions and connectivity for IoT/M2M
                deployments. This can save you time and money, especially if you
                cover the costs of your employees' mobile subscriptions, as
                launching your own mobile brand can streamline payment
                validation and approval processes.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        {/* Second Row */}
        <Box pt={10} pb={15}>
          <Grid container alignItems="center" columnSpacing={2}>
            <Grid item xs={12} md={5} pb={{ xs: 5, md: 0 }}>
              <Typography variant="body1">
                If you find yourself in a market where your product offering is
                identical to that of your competitors, creating your own
                mobile/cellular brand could be a solution to differentiate
                yourself. This allows you to expand your product suite and offer
                unique value-added services to your customers. By doing so, you
                can diversify your offerings and provide an additional reason
                for customers to stay with your brand rather than jumping ship
                to competitors.
              </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box
                position="relative"
                height="100%"
                width="100%"
                minHeight={300}
              >
                <Box position="absolute" width="100%" height="100%">
                  <img
                    src={Image2}
                    alt="Have a service to Offer connect with us today"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                <Box
                  position="absolute"
                  bottom={{ sm: 30 }}
                  top={{ xs: 30, sm: "unset" }}
                  right={30}
                  color="black.800"
                >
                  <StandardButton
                    buttonText="I Want to offer service"
                    endIcon={<ArrowOutward />}
                    sx={{
                      backgroundColor: ({ palette }) => palette?.dark?.main,
                      "&:hover": {
                        backgroundColor: ({ palette }) => palette?.dark?.main,
                      },
                      color: ({ palette }) => palette?.white?.main,
                    }}
                  />
                </Box>

                <Box
                  position="absolute"
                  bottom={-40}
                  left={30}
                  bgcolor="primary.main"
                  color="white.main"
                  maxWidth={200}
                  p={3}
                  zIndex={1}
                >
                  <Box position="relative">
                    <Box
                      position="absolute"
                      top={-15}
                      left={-20}
                      zIndex={-1}
                      sx={{ color: "#78FD3A" }}
                    >
                      <AutoAwesome fontSize="large" />
                    </Box>
                    <Typography variant="body1" fontSize={20} fontWeight={600}>
                      Have a service to Offer connect with us today
                      <Box
                        component="span"
                        position="absolute"
                        bottom={-25}
                        zIndex={-1}
                        sx={{ color: "#78FD3A" }}
                      >
                        <AutoAwesome fontSize="large" />
                      </Box>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default LaunchMobileBrandInfo;
