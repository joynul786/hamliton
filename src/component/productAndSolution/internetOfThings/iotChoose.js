import { Box, Container, Typography } from "@mui/material";
import StandardButton from "component/buttons/standardButton";
import Title from "component/title";
import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Image1 from "assets/img/dynamic/items/iot-1.png";
import Image2 from "assets/img/dynamic/items/iot-2.png";
import Image3 from "assets/img/dynamic/items/iot-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import BgCurve from "assets/img/static/shape/bg-curve.png";
import { RouteConstant } from "navigation/constant";

const IotChoose = () => {
  const list = [
    { image: Image1 },
    { image: Image2 },
    { image: Image3 },
    { image: Image1 },
    { image: Image2 },
    { image: Image3 },
  ];
  return (
    <section style={{ position: "relative" }}>
      <Box
        sx={{
          background: `url(${BgCurve})`,
          width: "100%",
          height: "100%",
          position: "absolute",
          left: 0,
          bottom: "50%",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      />
      <Box py={5} color="black.main">
        <Container>
          <Box>
            <Title title="Why choose Hamilton for IoT" />
            <Typography mt={2} mb={3}>
              Hamilton Telecom is a reliable choice for businesses seeking to
              implement IoT (Internet of Things) solutions. Their IoT services
              include connectivity, device management, and application
              enablement, all of which are provided through their robust and
              secure network infrastructure. Hamilton Telecom's IoT solutions
              are scalable, allowing businesses to easily expand their IoT
              capabilities as needed. Additionally, their expert support team is
              available 24/7 to provide technical assistance and ensure smooth
              operation of IoT devices and applications. Overall, choosing
              Hamilton Telecom for IoT can provide businesses with a streamlined
              and efficient IoT solution, allowing them to focus on their core
              operations and business objectives.
            </Typography>
            <StandardButton
              link={RouteConstant?.CONTACT}
              buttonText="Contact us "
              endIcon={<ArrowOutwardIcon />}
              color="primary"
            />
          </Box>
          <Box pt={5}>
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
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
                  slidesPerView: 4,
                  pagination: false,
                },
              }}
            >
              {list?.map(({ image }, i) => (
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
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default IotChoose;
