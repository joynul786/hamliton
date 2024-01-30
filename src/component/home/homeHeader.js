import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import homeBannerPic from "assets/img/static/bg/home_banner.png";
import Images from "assets/img/images";
const HomeHeader = () => {
  const sliderList = [
    {
      title:
        "Mobile Virtual Network <br />Enabler fueling the <br /> future of <br />communication",
      image: Images.homeBannerPic,
    },
    {
      title:
        "Mobile Virtual Network <br />Enabler fueling the <br /> future of <br />communication",
      image: Images.homeBannerPic,
    },
  ];
  return (
    <section>
      <Box color="black.main">
        <div className="home-banner-container">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            modules={[Navigation]}
            navigation
            style={{ paddingBottom: 0 }}
            className="home-swiper"
          >
            {sliderList?.map((item, i) => (
              <SwiperSlide key={i}>
                <Box className="home-banner">
                  <Box className="banner-pic">
                    <img src={item.image} alt="home-banner" />
                  </Box>
                  <Box className="banner-heading">
                    <Container maxWidth="xl">
                      <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
                    </Container>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}

            {/* <SwiperSlide>
                <div className="home-banner">
                  <div className="banner-pic">
                    <img src={Images.homeBannerPic} alt="home-banner" />
                  </div>
                  <div className="overlay"></div>
                  <div className="banner-heading">
                    <h5>welcome to hamilton</h5>
                    <h2>
                      {" "}
                      Mobile Virtual Network Enabler fueling the future of
                      communication
                    </h2>
                    <div className="banner-action-btn">
                      <Button
                        sx={{
                          borderRadius: 10,
                        }}
                        color="secondary"
                        variant="contained"
                      >
                        Schedule A Call
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}
            {/* <SwiperSlide>
                <div className="home-banner">
                  <div className="banner-pic">
                    <img src={Images.homeBannerPic} alt="home-banner" />
                  </div>
                  <div className="overlay"></div>
                  <div className="banner-heading">
                    <h5>welcome to hamilton</h5>
                    <h2>
                      {" "}
                      Mobile Virtual Network Enabler fueling the future of
                      communication
                    </h2>
                    <div className="banner-action-btn">
                      <Button
                        sx={{
                          borderRadius: 10,
                        }}
                        color="secondary"
                        variant="contained"
                      >
                        Schedule A Call
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}
          </Swiper>
        </div>
      </Box>
    </section>
  );
};

export default HomeHeader;
