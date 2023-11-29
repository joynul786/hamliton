import { Box, Button, Container, Grid, Typography } from "@mui/material";
import StandardButton from "component/buttons/standardButton";
import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import DigitalImage from "assets/img/static/bg/digital-africa.png";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const HomeCoverage = () => {
  return (
    <section>
      <Box py={3}>
        <Container maxWidth="xl">
          <Box color="black.main">
            <Typography
              variant="body2"
              textTransform="uppercase"
              letterSpacing={4}
            >
              Check Coverage
            </Typography>

            <Box py={5}></Box>

            <Box>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="body1" fontWeight={500}>
                    Couldn’t able to find coverage my location
                  </Typography>
                  <Typography variant="body2" color="text.secondary" my={2}>
                    We understand how frustrating it can be to not have coverage
                    in your location. Our team is constantly working to expand
                    our network and reach more areas. Hang in there, and
                    hopefully, we'll be able to provide coverage in your area
                    soon!
                  </Typography>
                  <StandardButton
                    buttonText="Contact Support"
                    link={"#"}
                    color="primary"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="body1" fontWeight={500}>
                    Request an update or service about your locality
                  </Typography>
                  <Typography variant="body2" color="text.secondary" my={2}>
                    Keep yourself informed and up-to-date with the latest news
                    and services in your area. Request updates easily and stay
                    connected!
                  </Typography>
                  <StandardButton
                    buttonText="Submit Request"
                    link={"#"}
                    color="primary"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    bgcolor="dark.main"
                    color="white.main"
                    p={3}
                    position="relative"
                    overflow="hidden"
                  >
                    <Box position="relative" zIndex={1} maxWidth="fit-content">
                      <Typography variant="body1" fontWeight={500}>
                        Join us today,
                        <br />
                        to transform Africa into
                      </Typography>
                      <Typography variant="h5" fontWeight={800} mt={1}>
                        Digital Africa
                      </Typography>
                      <Box
                        color="secondary.main"
                        position="absolute"
                        top={-15}
                        left={-20}
                        zIndex={-1}
                      >
                        <AutoAwesomeIcon fontSize="large" />
                      </Box>
                      <Box
                        color="secondary.main"
                        position="absolute"
                        bottom={10}
                        right={10}
                        zIndex={-1}
                      >
                        <AutoAwesomeIcon fontSize="large" />
                      </Box>
                    </Box>
                    <Box pt={10}>
                      <Link to="#">
                        <Button
                          variant="text"
                          color="inherit"
                          sx={{
                            textTransform: "uppercase",
                            letterSpacing: 4,
                            color: ({ palette }) => palette?.white?.main,
                            padding: 0,
                            "&:hover": {
                              backgroundColor: "transparent",
                            },
                            ".MuiTouchRipple-root": {
                              display: "none",
                            },
                          }}
                        >
                          Join Us{" "}
                          <Box
                            component="span"
                            ml={2}
                            sx={{
                              width: 24,
                              height: 24,
                              borderRadius: "50%",
                              border: "1px solid",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <ArrowForwardOutlinedIcon sx={{ fontSize: 16 }} />
                          </Box>
                        </Button>
                      </Link>
                    </Box>

                    <Box position="absolute" bottom={-10} right={0} width="50%">
                      <img src={DigitalImage} alt="Digital Africa" />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default HomeCoverage;
