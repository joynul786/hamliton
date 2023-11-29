import React from "react";
import BgImage from "assets/img/static/bg/call-center-services-header.png";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HeaderImage from "assets/img/static/bg/call-center-services-header-2.png";
import EllipseImage from "assets/img/static/shape/call-center-services-ellipse.png";

const CallCenterServicesHeader = () => {
  return (
    <section>
      <Container maxWidth="xl">
        <Box
          sx={{
            background: `url(${BgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          color="white.main"
          pt={15}
          overflow="hidden"
        >
          <Container>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12} md={3}>
                <Box>
                  <Typography
                    variant="h1"
                    fontSize={{ xs: 30, md: 48 }}
                    fontWeight={500}
                    lineHeight={1.5}
                  >
                    Better
                    <br />
                    Call Center
                    <br />
                    Solution
                    <Link to="#">
                      <Button
                        variant="outlined"
                        color="inherit"
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          minWidth: "unset",
                          ml: 3,
                        }}
                      >
                        <ArrowForwardIcon fontSize="small" />
                      </Button>
                    </Link>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
                <Box
                  height={{ md: 500 }}
                  width="100%"
                  position="relative"
                  zIndex={1}
                >
                  <img
                    src={HeaderImage}
                    alt="Mobile services"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "bottom",
                    }}
                  />
                  <Box
                    py={1}
                    px={2}
                    bgcolor="white.main"
                    color="black.main"
                    maxWidth="fit-content"
                    borderRadius={{ xs: "10px", md: "0px 10px 10px 10px" }}
                    position="absolute"
                    bottom="20%"
                    right={{ xs: 0, md: "-15%" }}
                    boxShadow="-17.4339px 16.2717px 43.0037px rgba(0, 0, 0, 0.25)"
                  >
                    <Typography variant="body1">
                      Hello, <br />
                      Welcome to Hamilton Call <br />
                      Center Service
                    </Typography>
                  </Box>
                  <Box
                    width="100%"
                    height="90%"
                    position="absolute"
                    bottom={0}
                    left="15%"
                    zIndex={-1}
                    sx={{
                      background: `url(${EllipseImage})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
    </section>
  );
};

export default CallCenterServicesHeader;
