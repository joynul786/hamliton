import { Box, Grid, Typography } from "@mui/material";
import { RouteConstant } from "navigation/constant";
import React from "react";
import { Link } from "react-router-dom";
import SubmenuImage from "assets/img/static/bg/industries-menu.png";
import SubmenuShape from "assets/img/static/shape/industries-submenu.png";
import SubMenuItem from "../subMenuItem";

const IndustriesNavMenu = ({ handleCloseTargetMobileSubmenu }) => {
  const list = [
    {
      Icon: "",
      label: "Automobile",
      desc: "Lorem ipsum dolor sit amet consectetur. Dolor nec aenean proin sit pulvinar.",
      link: RouteConstant?.AUTOMOBILE,
    },
    {
      Icon: "",
      label: "ECommerce",
      desc: "Lorem ipsum dolor sit amet consectetur. Dolor nec aenean proin sit pulvinar.",
      link: RouteConstant?.E_COMMERCE,
    },
    {
      Icon: "",
      label: "Financial Services",
      desc: "Lorem ipsum dolor sit amet consectetur. Dolor nec aenean proin sit pulvinar.",
      link: RouteConstant?.FINANCIAL_SERVICES,
    },
    {
      Icon: "",
      label: "Health Care",
      desc: "Lorem ipsum dolor sit amet consectetur. Dolor nec aenean proin sit pulvinar.",
      link: RouteConstant?.HEALTH_CARE,
    },
    {
      Icon: "",
      label: "Hospitality",
      desc: "Lorem ipsum dolor sit amet consectetur. Dolor nec aenean proin sit pulvinar.",
      link: RouteConstant?.HOSPITALITY,
    },
    {
      Icon: "",
      label: "IT and ICT",
      desc: "Lorem ipsum dolor sit amet consectetur. Dolor nec aenean proin sit pulvinar.",
      link: RouteConstant?.IT_ICT,
    },
    {
      Icon: "",
      label: "Manufacture",
      desc: "Lorem ipsum dolor sit amet consectetur. Dolor nec aenean proin sit pulvinar.",
      link: RouteConstant?.MANUFACTURE,
    },
    {
      Icon: "",
      label: "Non Profit Organizations(NPO)",
      desc: "Lorem ipsum dolor sit amet consectetur. Dolor nec aenean proin sit pulvinar.",
      link: RouteConstant?.NPO,
    },
    {
      Icon: "",
      label: "Public Sector",
      desc: "Lorem ipsum dolor sit amet consectetur. Dolor nec aenean proin sit pulvinar.",
      link: RouteConstant?.PUBLIC_SECTOR,
    },
    {
      Icon: "",
      label: "Schools, Universities and Education(EdTech)",
      desc: "Lorem ipsum dolor sit amet consectetur. Dolor nec aenean proin sit pulvinar.",
      link: RouteConstant?.ED_TECH,
    },
    {
      Icon: "",
      label: "Telecommunications and Communications",
      desc: "Lorem ipsum dolor sit amet consectetur. Dolor nec aenean proin sit pulvinar.",
      link: RouteConstant?.TELECOMMUNICATIONS,
    },
    {
      Icon: "",
      label: "Transport and Logistic",
      desc: "Lorem ipsum dolor sit amet consectetur. Dolor nec aenean proin sit pulvinar.",
      link: RouteConstant?.TRANSPORT_LOGISTIC,
    },
  ];
  return (
    <>
      <Box pl={{ xs: 3, md: 5 }} pr={{ xs: 3, md: 10 }}>
        <Grid container spacing={5}>
          {/* Links */}
          <Grid item xs={12} md={8}>
            <Box py={5}>
              <Grid container spacing={8}>
                {list?.map(({ label, desc, link }, i) => (
                  <Grid item key={i} xs={12} sm={6} md={4}>
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
          <Grid item xs={12} md={4}>
            <Box
              color="white.main"
              py={5}
              px={{ xs: 1, md: 3 }}
              position="relative"
              zIndex={1}
              sx={{
                background: ({ palette }) =>
                  `url(${SubmenuShape}), ${palette?.primary?.main}`,
                backgroundRepeat: "repeat",
                backgroundSize: "45%",
              }}
            >
              <Box maxWidth={180}>
                <Typography
                  variant="h4"
                  color="white.main"
                  fontSize={18}
                  lineHeight={1.3}
                >
                  Enjoy The Faster Connection With Fastest Growing Telecom
                </Typography>
              </Box>
              <Box pt={18}>
                <Link to={""}>
                  <Box component="span" fontWeight={500} fontSize={12}>
                    Join Us
                    <br />
                  </Box>
                  <Box component="span" fontWeight={700} fontSize={18}>
                    Today
                  </Box>
                </Link>
              </Box>
              <Box
                position="absolute"
                right={{ xs: 0, md: "-30px" }}
                bottom={0}
                width={"90%"}
              >
                <img src={SubmenuImage} alt="Hamilton Telecom" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default IndustriesNavMenu;
