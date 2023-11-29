import { OpenInNew } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import SectionHeading from "component/sectionHeading";
import { RouteConstant } from "navigation/constant";
import React from "react";
import { Link } from "react-router-dom";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const MobileServicesChoose = () => {
  const data = [
    {
      title: "The world of mobile service",
      desc: "if you’re new to the world of mobile telecommunications operators it can be intimidating. But don’t worry! Here’s the basics.",
      link: RouteConstant?.MOBILE_SERVICES_THE_WORLD_OF_MOBILE_SERVICES,
    },
    {
      title: "Launch your own mobile brands",
      desc: "Becoming a branded reseller is one of the easiest, fastest, and most affordable ways to expand your current product suite.",
      link: RouteConstant?.MOBILE_SERVICES_LAUNCH_YOUR_OWN_MOBILE_BRAND,
    },
    {
      title: "Light MVNO",
      desc: "A highly scalable, multi-tenant light MVNO solution that simplifies launching new services, so you can focus on marketing, outreach, sales, etc.",
      link: RouteConstant?.MOBILE_SERVICES_LIGHT_MVNO,
    },
  ];
  return (
    <section>
      <Box color="black.main" pt={3} pb={5}>
        <Container maxWidth="xl">
          <Grid container alignItems="center" spacing={3}>
            <Grid item xs={12} md={3}>
              <SectionHeading title="Choose your mobile service" />
              <Typography variant="body2" mt={2}>
                Choose Hamilton telecom for their global connectivity platform,
                specialized Business Support System, and experienced team. They
                provide flexible solutions for businesses of all sizes to manage
                their mobility services, expand into new markets, and stay ahead
                of their competition.
              </Typography>
            </Grid>
            <Grid item xs={12} md={9}>
              <Swiper
                spaceBetween={30}
                slidesPerView={2.5}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    pagination: {
                      clickable: true,
                    },
                  },
                  900: {
                    slidesPerView: 2.5,
                    pagination: false,
                  },
                }}
                style={{ paddingTop: "30px" }}
              >
                {data?.map(({ title, desc, link }, i) => (
                  <SwiperSlide key={i}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-end"
                      position="relative"
                      color="white.main"
                      p={5}
                      sx={{
                        background: ({ palette }) =>
                          i % 2 === 0
                            ? palette?.black?.main
                            : palette?.primary?.main,
                        borderRadius: "30px",
                      }}
                    >
                      <Typography variant="body1" fontWeight={500}>
                        {title}
                      </Typography>
                      <Typography variant="body2" fontWeight={300} mt={1}>
                        {desc}
                      </Typography>
                      <Box mt={2}>
                        <OpenInNew />
                      </Box>
                      <Link to={link} className="stretched-link" />
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default MobileServicesChoose;
