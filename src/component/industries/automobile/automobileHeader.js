import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "assets/img/static/bg/automobile-header-1.jpg";
import Title from "component/title";
import BackButton from "component/buttons/backButton";
import BgOverlayCard from "component/cards/bgOverlayCard";
import CardImage1 from "assets/img/static/bg/bg-1.jpg";
import CardImage2 from "assets/img/static/bg/bg-2.jpg";
import CardImage3 from "assets/img/static/bg/bg-3.jpg";
import StandardButton from "component/buttons/standardButton";
import { ArrowOutward } from "@mui/icons-material";
import SliderImage1 from "assets/img/dynamic/items/automobile-1.png";
import SliderImage2 from "assets/img/dynamic/items/automobile-2.png";
import SliderImage3 from "assets/img/dynamic/items/automobile-3.png";

const AutomobileHeader = () => {
  const { palette } = useTheme();

  const bannerList = [
    {
      title: "Automobile Industry",
      desc: "The automobile industry is a crucial sector in the global economy. It involves the design, production, marketing, and sale of motor vehicles, with major players including Toyota, Volkswagen, General Motors, and Ford. The industry faces significant challenges such as environmental concerns and technological disruptions.",
      image: Image1,
    },
    {
      title: "Automobile Industry",
      desc: "The automobile industry is a crucial sector in the global economy. It involves the design, production, marketing, and sale of motor vehicles, with major players including Toyota, Volkswagen, General Motors, and Ford. The industry faces significant challenges such as environmental concerns and technological disruptions.",
      image: Image1,
    },
  ];

  const imagesList = [
    { image: SliderImage1 },
    { image: SliderImage2 },
    { image: SliderImage3 },
  ];

  return (
    <section>
      {/* Banner */}
      <Box color="white.main">
        <Container maxWidth="xl">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            modules={[Navigation]}
            navigation
            style={{ paddingBottom: 0 }}
          >
            {bannerList?.map(({ title, desc, image }, i) => (
              <SwiperSlide key={i}>
                <Box
                  py={5}
                  px={{ xs: 3, md: 10 }}
                  sx={{
                    background: ({ palette }) =>
                      `linear-gradient(0deg,  ${palette?.primary?.[800]}, ${palette?.primary?.[800]} ), url(${image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <BackButton color="inherit" />
                  <Box
                    maxWidth={800}
                    margin="auto"
                    pt={10}
                    pb={15}
                    textAlign="center"
                  >
                    <Title title={title} />
                    <Typography variant="body1" mt={2}>
                      {desc}
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Box>

      {/* Cards */}
      <Box pt={5}>
        <Container>
          <Grid container spacing={{ xs: 2, md: 10 }}>
            <Grid item xs={12} sm={6} md={4}>
              <BgOverlayCard
                overlayColor={palette?.secondary?.[800]}
                minHeight={320}
                cardImage={CardImage1}
                desc="28.5 Cillion connected cars with embedded telematics were sold in 2019 (StatiCta)"
                classes="shadow-2"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <BgOverlayCard
                overlayColor={palette?.primary?.[800]}
                minHeight={320}
                cardImage={CardImage2}
                desc="$166 billion is the anticipated value of the connected vehicle market by 2025 (Markets and Markets)"
                classes="shadow-2"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <BgOverlayCard
                overlayColor={palette?.secondary?.[800]}
                minHeight={320}
                cardImage={CardImage3}
                desc="86% of fleets now use telematics, up from 48% just two years ago (Teletrac Navman)"
                classes="shadow-2"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Content */}
      <Box color="black.main" pt={10}>
        <Container>
          <Title
            title="The Internet of Vehicles (IoV)<br />Keeps Your Fleet on the Cutting Edge"
            fontSize={36}
          />
          <Box fontWeight={400} pt={5}>
            <Typography variant="body1">
              The Internet of Vehicles and connected vehicle solutions have
              enormous potential for enhancing the driving experience, safety,
              fuel efficiency, and overall value of vehicles. Manufacturers can
              leverage these technologies to achieve these improvements and
              provide drivers with a more seamless and enjoyable experience on
              the road.
            </Typography>
            <ul>
              <li>
                Improve telemetric, preventative maintenance, accident
                prevention, and infotainment systems.
              </li>
              <li>
                Bolster emergency on-call services and enable other in-vehicle
                concierge services.
              </li>
              <li>
                Facilitate remote or Over-The-Air (OTA) software updates across
                their entire fleet of connected vehicles.
              </li>
              <li>
                Capture and share actionable diagnostics and track driver
                behavior.
              </li>
              <li>
                Create new revenue opportunities with location services,
                value-added services, and direct, affiliate, and affinity
                marketing.
              </li>
            </ul>
            <Box pt={3}>
              <StandardButton
                buttonText="Learn More"
                endIcon={<ArrowOutward />}
                color="primary"
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Image Slider */}
      <Box pt={5}>
        <Container maxWidth="xl">
          <Swiper
            spaceBetween={20}
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
          >
            {imagesList?.map(({ image }, i) => (
              <SwiperSlide key={i}>
                <Box height={180}>
                  <img
                    src={image}
                    alt="IOT"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Box>
    </section>
  );
};

export default AutomobileHeader;
