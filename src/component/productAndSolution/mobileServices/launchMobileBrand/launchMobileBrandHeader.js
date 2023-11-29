import { Box, Container, Grid, Typography } from "@mui/material";
import StandardButton from "component/buttons/standardButton";
import SectionHeading from "component/sectionHeading";
import React from "react";
import HeaderImage from "assets/img/static/bg/launch-your-own-mobile-brand-header.png";
import HeaderImage2 from "assets/img/static/bg/launch-your-own-mobile-brand-header-2.png";
import HeaderImage3 from "assets/img/static/bg/launch-your-own-mobile-brand-header-3.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { ReactComponent as WrappedIcon } from "assets/img/static/icon/contact-wrapped-icon.svg";
import { Link } from "react-router-dom";

const LaunchMobileBrandHeader = () => {
  return (
    <section>
      <Box pt={5} pb={5} color="black.main">
        <Container>
          <Grid container>
            <Grid item xs={12} md={6}>
              <SectionHeading
                title="Build your own Mobile Brand"
                titleFontSize={68}
              />
              <Box maxWidth={400}>
                <Typography variant="body1" my={3}>
                  Launching your own Mobile/Cellular Brand as a mobile branded
                  reseller (skinny MVNO) is a quick, easy, and cost-effective
                  way to expand your product offerings. By leveraging
                  pre-defined settings, tariffs, and bundles from MVNEs, MVNAs,
                  Full MVNOs, or Light MVNOs, you can sell mobile services under
                  your own brand name.
                </Typography>
              </Box>
              <StandardButton buttonText="Get Started" />
            </Grid>
            <Grid item xs={12} md={6} mt={{ xs: 5, md: 0 }}>
              <Box
                bgcolor="secondary.main"
                width="100%"
                height="100%"
                borderRadius="30px"
                sx={{
                  boxShadow:
                    "-21.2376px 19.8218px 52.3861px rgba(0, 0, 0, 0.25)",
                }}
                display="flex"
                alignItems="flex-end"
                position="relative"
                zIndex={1}
              >
                <Box
                  width="100%"
                  sx={{
                    transform: {
                      xs: "translateX(0) matrix(-1, 0, 0, 1, 0, 0)",
                      md: "translateX(-10%) matrix(-1, 0, 0, 1, 0, 0)",
                    },
                  }}
                >
                  <img src={HeaderImage} alt="Build your own Mobile Brand" />
                </Box>
                <Box
                  position="absolute"
                  bottom={0}
                  left="5%"
                  width="60%"
                  zIndex={-1}
                >
                  <img src={HeaderImage2} alt="Build your own Mobile Brand" />
                </Box>
                <Box
                  position="absolute"
                  top={0}
                  right="5%"
                  width="60%"
                  zIndex={-1}
                >
                  <img src={HeaderImage3} alt="Build your own Mobile Brand" />
                </Box>
                <Box pt={10} color="dark.main">
                  <Box
                    width={110}
                    height={110}
                    borderRadius="50%"
                    position="absolute"
                    bottom="10%"
                    left={0}
                    sx={{
                      transform: {
                        xs: "translateY(50%)",
                        md: "translateX(-50%)",
                      },
                    }}
                  >
                    <Link to={""}>
                      <WrappedIcon width={110} />
                      <Box
                        component="span"
                        position="absolute"
                        top={0}
                        left={0}
                        width="100%"
                        height="100%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <ArrowOutwardIcon fontSize="small" />
                      </Box>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default LaunchMobileBrandHeader;
