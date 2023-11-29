import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import HospitalityConnectivity from "assets/img/static/bg/hospitality.png";
import Bg1 from "assets/img/static/bg/bg-11.jpg";
import Bg2 from "assets/img/static/bg/bg-12.jpg";

import WrappedImageCard from "component/cards/wrappedImageCard";
import Title from "component/title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import BgOverlayCard from "component/cards/bgOverlayCard";

const HospitalityInfo = () => {
  const { palette } = useTheme();

  const introducingItems = [
    { label: "Global Cellular Connectivity", image: Bg1 },
    { label: "Access to Global Wi-Fi", image: Bg2 },
    { label: "Global Cellular Connectivity", image: Bg1 },
    { label: "Access to Global Wi-Fi", image: Bg2 },
  ];
  return (
    <section>
      <Box color="black.main" position="relative" overflow="hidden">
        <Container maxWidth="xl">
          {/* Hospitality connectivity */}
          <Box py={10}>
            <Grid
              container
              spacing={3}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12} md={4}>
                <img
                  src={HospitalityConnectivity}
                  alt="Hospitality"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    maxHeight: "600px",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box fontWeight={400}>
                  <Title
                    title="The Hospitality Industry Needs Connectivity!"
                    fontSize={36}
                  />
                  <Typography variant="body1" mt={3}>
                    In today's digital age, internet connectivity has become a
                    basic necessity, and customers expect seamless connectivity
                    as a given. Text messaging has also become an indispensable
                    tool for customer engagement, retention, and service. As a
                    result, hospitality businesses such as hotels, restaurant
                    chains, travel agencies, and entertainment venues are
                    adopting connectivity technologies like Wi-Fi, cellular,
                    IoT, SMS, and more to enhance their customer experiences and
                    stay competitive.
                  </Typography>
                  <ul>
                    <li>
                      Leveraging SMS, mobile services, and other digital
                      channels to enhance customer engagement.
                    </li>
                    <li>
                      Offering secure global Wi-Fi and other value-added
                      products and services to bolster customer loyalty.
                    </li>
                    <li>
                      Using traveler insights to make informed marketing and
                      brand partnership decisions.
                    </li>
                  </ul>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Hospitality introducing slider */}
          <Grid container spacing={3} alignItems="flex-end">
            <Grid item xs={12} md={3}>
              <Title
                title="Introducing Hamilton for the Hospitality Industry."
                fontSize={36}
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <Swiper
                spaceBetween={20}
                slidesPerView={3.5}
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
                    slidesPerView: 3.5,
                    pagination: false,
                  },
                }}
                style={{ paddingBottom: 0 }}
              >
                {introducingItems?.map(({ label, image }, i) => (
                  <SwiperSlide key={i}>
                    <BgOverlayCard
                      title={label}
                      cardImage={image}
                      overlayColor={
                        i % 2 === 0
                          ? palette?.primary?.[600]
                          : palette?.secondary?.[600]
                      }
                      justifyContent="flex-end"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>
          </Grid>

          {/* Wrapped Content */}
          <Box py={10}>
            <Grid container alignItems="center" spacing={3}>
              <Grid item xs={12} md={7}>
                <WrappedImageCard
                  bgColor={palette?.primary?.[600]}
                  boxes={[
                    {
                      text: "Global Cellular <br />Connectivity",
                      top: 0,
                      left: "20%",
                    },
                    {
                      text: "Application-to-Person (A2P), <br />SMS, and Voice Messaging",
                      top: "40%",
                      left: "0%",
                    },
                    {
                      text: "Value-Added <br />Services (VAS)",
                      bottom: 0,
                      left: "20%",
                    },
                    {
                      text: "IoT Connectivity <br />Management",
                      right: 0,
                      top: "20%",
                    },
                    {
                      text: "Access to <br />Global Wi-Fi",
                      right: 0,
                      bottom: "20%",
                    },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={5} order={{ xs: -1, md: 2 }}>
                <Box pt={5}>
                  <Title
                    fontSize={36}
                    title="Hamilton’s Products and Solutions"
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={3} mt={5}>
              <Grid item xs={12} md={5}>
                <Box>
                  <Title fontSize={36} title="Stand Out in a Crowded Market" />
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <WrappedImageCard
                    bgColor={palette?.secondary?.[600]}
                    boxes={[
                      {
                        text: "Add New Products and Services to Diversify Business",
                        bottom: 0,
                        left: "10%",
                      },
                      {
                        text: "Create More Attractive Loyalty and Reward Programs",
                        top: "20%",
                        right: 0,
                      },
                    ]}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>

        {/* rotation lines */}
        <Box
          width="100%"
          height="50%"
          position="absolute"
          top={0}
          zIndex={-1}
          sx={{ transform: "rotate(28deg)" }}
          display="flex"
        >
          <Box
            width={200}
            height="100%"
            mt="40%"
            mx={0.5}
            bgcolor="primary.100"
          />
          <Box
            width={200}
            height="100%"
            mt="30%"
            mx={0.5}
            bgcolor="secondary.100"
          />
          <Box
            width={200}
            height="100%"
            mt="20%"
            mx={0.5}
            bgcolor="primary.100"
          />
          <Box
            width={200}
            height="100%"
            mt="10%"
            mx={0.5}
            bgcolor="secondary.100"
          />
        </Box>
      </Box>
    </section>
  );
};

export default HospitalityInfo;
