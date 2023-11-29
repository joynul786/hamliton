import { Box, Button, Container } from "@mui/material";
import { RouteConstant } from "navigation/constant";
import React, { useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

const navList = [
  {
    label: "The World of Mobile Services",
    path: RouteConstant?.MOBILE_SERVICES_THE_WORLD_OF_MOBILE_SERVICES,
  },
  {
    label: "Launch your own mobile brand",
    path: RouteConstant?.MOBILE_SERVICES_LAUNCH_YOUR_OWN_MOBILE_BRAND,
  },
  {
    label: "Light MVNO",
    path: RouteConstant?.MOBILE_SERVICES_LIGHT_MVNO,
  },
  {
    label: "Full MVNO",
    path: RouteConstant?.MOBILE_SERVICES_FULL_MVNO,
  },
  {
    label: "MNVE  (Enabler/Aggregator)",
    path: RouteConstant?.MOBILE_SERVICES_MNVE,
  },
  {
    label: "Operation Support System (OSS)",
    path: RouteConstant?.MOBILE_SERVICES_OPERATION_SUPPORT_SYSTEM,
  },
  {
    label: "Business Support System (bss)",
    path: RouteConstant?.MOBILE_SERVICES_BUSINESS_SUPPORT_SYSTEM,
  },
];

const MobileServicesNav = () => {
  return (
    <section>
      <Box color="black.main">
        <Container maxWidth="xl">
          <Box className="mobile-services-nav">
            <Swiper
              spaceBetween={20}
              slidesPerView="auto"
              style={{ paddingBottom: 0 }}
            >
              {navList.map(({ label, path }, i) => (
                <SwiperSlide
                  key={i}
                  style={{ paddingBottom: 30, paddingTop: 30 }}
                >
                  <NavLink
                    to={path}
                    key={i}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? `active` : ""}`
                    }
                  >
                    <Button
                      variant="outlined"
                      color="inherit"
                      sx={{ borderRadius: 30 }}
                    >
                      {label}
                    </Button>
                  </NavLink>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default MobileServicesNav;
