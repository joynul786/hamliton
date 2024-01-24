import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Navigation,  } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import homeBannerPic from "assets/img/static/bg/home_banner.png";
const HomeHeader = () => {
  return (
    <section>
      <Container maxWidth="xl">
        <Box py={3} color="black.main">
          <div className="home-banner-container">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              modules={[Navigation]}
              navigation
              style={{ paddingBottom: 0 }}
              className="home-swiper"
            >
              <SwiperSlide>
                <div className="home-banner">
                  <div className="banner-pic">
                    <img src={homeBannerPic} alt="home-banner" />
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="home-banner">
                  <div className="banner-pic">
                    <img src={homeBannerPic} alt="home-banner" />
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="home-banner">
                  <div className="banner-pic">
                    <img src={homeBannerPic} alt="home-banner" />
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
              </SwiperSlide>
            </Swiper>
          </div>
        </Box>
      </Container>
    </section>
  );
};

export default HomeHeader;
