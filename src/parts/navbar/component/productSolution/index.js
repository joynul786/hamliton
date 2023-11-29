import { Box, Grid, Typography } from "@mui/material";
import { RouteConstant } from "navigation/constant";
import React from "react";
import { Link } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { ReactComponent as WrappedIcon } from "assets/img/static/icon/contact-wrapped-icon.svg";
import SubmenuImage from "assets/img/static/bg/product-solution-menu.png";
import SubmenuShape from "assets/img/static/shape/product-solution-submenu.png";
import SubMenuItem from "../subMenuItem";

const ProductSolutionNavMenu = ({ handleCloseTargetMobileSubmenu }) => {
  const list = [
    {
      Icon: "",
      label: "Internet of Thing",
      desc: "Lorem ipsum dolor sit amet consectetur. Dolor nec aenean proin sit pulvinar.",
      link: RouteConstant?.INTERNET_OF_THINGS,
    },
    {
      Icon: "",
      label: "Experience Cloud",
      desc: "Lorem ipsum dolor sit amet consectetur. Dolor nec aenean proin sit pulvinar.",
      link: RouteConstant?.EXPERIENCE_THE_CLOUD,
    },
    {
      Icon: "",
      label: "Call Center Services",
      desc: "Lorem ipsum dolor sit amet consectetur. Dolor nec aenean proin sit pulvinar.",
      link: RouteConstant?.CALL_CENTER_SERVICES,
    },
    {
      Icon: "",
      label: "Mobile Services",
      desc: "Lorem ipsum dolor sit amet consectetur. Dolor nec aenean proin sit pulvinar.",
      link: RouteConstant?.MOBILE_SERVICES,
    },
  ];
  return (
    <>
      <Box pl={{ xs: 3, md: 5 }} pr={{ xs: 3, md: 10 }}>
        <Grid container spacing={5}>
          {/* Links */}
          <Grid item xs={12} md={7}>
            <Box py={5}>
              <Grid container spacing={8}>
                {list?.map(({ label, desc, link }, i) => (
                  <Grid item key={i} xs={12} md={6}>
                    <SubMenuItem
                      label={label}
                      desc={desc}
                      link={link}
                      handleCloseTargetMobileSubmenu={
                        handleCloseTargetMobileSubmenu
                      }
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
          {/* Banner */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                background: `linear-gradient(110deg, #F8F8F8 2.32%, #ECECEC 80%)`,
              }}
              py={5}
              px={{ xs: 1, md: 3 }}
              position="relative"
              zIndex={1}
            >
              <Box>
                <Typography
                  variant="h4"
                  className="ff-secondary"
                  color="primary.main"
                  lineHeight={1.3}
                >
                  <Box component="span">
                    Experience the <br />
                  </Box>
                  <Box
                    component="span"
                    className="ff-primary"
                    color="secondary.main"
                    fontWeight={800}
                  >
                    Finest&nbsp;
                  </Box>
                  <Box component="span">
                    network <br />
                  </Box>
                  <Box component="span">with&nbsp;</Box>
                  <Box
                    component="span"
                    className="ff-primary"
                    color="secondary.main"
                    fontWeight={800}
                  >
                    Hamilton <br />
                  </Box>
                  <Box
                    component="span"
                    className="ff-primary"
                    color="secondary.main"
                    fontWeight={700}
                    fontSize={22}
                    lineHeight={0.9}
                  >
                    Telecom
                  </Box>
                </Typography>
              </Box>
              <Box pt={10} color="dark.main">
                <Box
                  width={110}
                  height={110}
                  borderRadius="50%"
                  position="relative"
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
              <Box
                position="absolute"
                right={{ xs: 0, md: "-40px" }}
                bottom={0}
                width={"70%"}
                height="100%"
              >
                <img
                  src={SubmenuImage}
                  alt="Hamilton Telecom"
                  style={{
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "bottom",
                  }}
                />
              </Box>
              <Box
                position="absolute"
                right={{ xs: 0, md: "-60px" }}
                bottom={0}
                width={"80%"}
                zIndex={-1}
              >
                <img src={SubmenuShape} alt="Hamilton Telecom" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductSolutionNavMenu;
