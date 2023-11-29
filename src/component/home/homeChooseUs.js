import { Box, Button, Container, Grid, Typography } from "@mui/material";
import SectionHeading from "component/sectionHeading";
import React from "react";
import ReliabilityImage from "assets/img/static/bg/reliability.png";
import TeamImage from "assets/img/static/bg/team.png";
import TestedProcessImage from "assets/img/static/bg/tested-process.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HelpForm from "parts/helpForm";

const HomeChooseUs = () => {
  return (
    <section>
      <Container maxWidth="xl">
        <Box mt={{ xs: 5, md: 0, lg: -10 }}>
          <SectionHeading
            subtitle="What makes you"
            title="Choose Us"
            subtitleEndIcon
          />
        </Box>
        <Box py={5}>
          <Grid container spacing={3}>
            {/* Very High Reliability */}
            <Grid item xs={12} sm={6} lg={4.5}>
              <Box
                p={2}
                sx={{
                  backgroundColor: ({ palette }) => palette?.primary?.main,
                  borderRadius: "20px",
                }}
                className="shadow"
                color="white.main"
              >
                <Box sx={{ borderRadius: "10px", overflow: "hidden" }}>
                  <img src={ReliabilityImage} alt="Very High Reliability" />
                </Box>
                <Box pt={3} pb={2} px={3}>
                  <Typography variant="h5">Very High Reliability</Typography>
                  <Typography variant="body2" fontWeight={400} mt={1.5}>
                    High reliability of carrier-grade equipment provides full
                    redundancy, guaranteeing 99.999% uptime.
                  </Typography>
                  <Box display="flex" justifyContent="flex-end">
                    <Button
                      variant="outlined"
                      color="inherit"
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        minWidth: "unset",
                      }}
                    >
                      <ArrowForwardIcon fontSize="medium" />
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Experienced Team ----- Battle-tested Process */}
            <Grid item xs={12} sm={6} lg={3.5}>
              <Box mt={{ xs: 3, sm: 0 }}>
                <Grid container spacing={3}>
                  {/* Experienced Team */}
                  <Grid item xs={12} sm={12}>
                    <Box
                      p={2}
                      sx={{
                        backgroundColor: ({ palette }) =>
                          palette?.secondary?.main,
                        borderRadius: "20px",
                      }}
                      className="shadow"
                      color="black.main"
                    >
                      <Grid container spacing={1}>
                        <Grid item xs={6} md={7}>
                          <Box mt={-6}>
                            <img src={TeamImage} alt="Experienced Team" />
                          </Box>
                        </Grid>
                        <Grid item xs={6} md={5}>
                          <Typography variant="h6" mb={1}>
                            Experienced Team
                          </Typography>
                          <Button
                            variant="outlined"
                            color="inherit"
                            sx={{
                              width: 40,
                              height: 40,
                              borderRadius: "50%",
                              minWidth: "unset",
                            }}
                          >
                            <ArrowForwardIcon fontSize="medium" />
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>

                  {/* Battle-tested Process */}
                  <Grid item xs={12} sm={12}>
                    <Box
                      p={2}
                      sx={{
                        backgroundColor: ({ palette }) => palette?.black.main,
                        borderRadius: "20px",
                      }}
                      className="shadow"
                      color="white.main"
                    >
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <Typography variant="h6" mb={1}>
                            Battle-tested Process
                          </Typography>
                          <Button
                            variant="outlined"
                            color="inherit"
                            sx={{
                              width: 40,
                              height: 40,
                              borderRadius: "50%",
                              minWidth: "unset",
                            }}
                          >
                            <ArrowForwardIcon fontSize="medium" />
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Box mb={-6}>
                            <img
                              src={TestedProcessImage}
                              alt="Battle-tested Process"
                            />
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* Find out how we can help you */}
            <Grid item xs={12} sm={12} lg={4}>
              <Box
                sx={{
                  background: `linear-gradient(110deg, #EDEDED 2.32%, #F8FFFE 80%)`,
                  borderRadius: "20px",
                }}
                p={2}
                mt={{ xs: 3, lg: 0 }}
                className="shadow"
              >
                <Typography
                  variant="h4"
                  fontSize={{ xs: 30, md: 48 }}
                  fontWeight={700}
                  lineHeight={1}
                  maxWidth={"80%"}
                  color="primary.main"
                >
                  Find out how we can help you
                </Typography>
                <Box pt={3}>
                  <HelpForm />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default HomeChooseUs;
