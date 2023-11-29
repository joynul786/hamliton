import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "assets/img/static/bg/e-commerce-header.png";
import BannerBg from "assets/img/static/bg/bg-6.png";
import BackButton from "component/buttons/backButton";
import Title from "component/title";
import BgOverlayCard from "component/cards/bgOverlayCard";

const ECommerceHeader = () => {
  const { palette } = useTheme();
  const bannerList = [
    {
      title: "Hamilton for E-Commerce, Physical Retail, and Smart Retail",
      desc: "In today's digital landscape, retailers must adopt innovative solutions to thrive, whether through online channels or physical stores like supermarkets, department stores, or chain stores. To succeed, retailers must focus on improving operational efficiencies and creating engaging shopping experiences that foster customer loyalty and set their brand apart from competitors. Smart Retail technology offers an ideal solution for achieving these goals.",
      image: Image1,
    },
    {
      title: "Automobile Industry",
      desc: "The automobile industry is a crucial sector in the global economy. It involves the design, production, marketing, and sale of motor vehicles, with major players including Toyota, Volkswagen, General Motors, and Ford. The industry faces significant challenges such as environmental concerns and technological disruptions.",
      image: Image1,
    },
  ];

  return (
    <>
      <section>
        {/* Banner */}
        <Box color="white.main">
          <Container maxWidth="xl">
            <Box>
              <Container>
                <Box position="relative">
                  <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    modules={[Navigation]}
                    navigation
                  >
                    {bannerList?.map(({ title, desc, image }, i) => (
                      <SwiperSlide key={i}>
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box pt={5} pr={{ md: "15%" }} color="black.main">
                              <BackButton color="inherit" />
                              <Box pt={5}>
                                <Title title={title} fontSize={36} />
                              </Box>
                              <Typography variant="body1" mt={2}>
                                {desc}
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box height="100%" pt={5} minHeight={450}>
                              <Box
                                position="relative"
                                sx={{
                                  background: ({ palette }) =>
                                    `linear-gradient(0deg,  ${palette?.primary?.[800]}, ${palette?.primary?.[800]} ), url(${BannerBg})`,
                                  backgroundPosition: "center",
                                  backgroundSize: "cover",
                                  backgroundRepeat: "no-repeat",
                                }}
                                height="100%"
                              >
                                <Box
                                  position="absolute"
                                  bottom={0}
                                  left={{ md: "-20%" }}
                                  width="100%"
                                  height="100%"
                                >
                                  <img
                                    src={image}
                                    alt="E-commerce"
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "contain",
                                      objectPosition: "bottom",
                                    }}
                                  />
                                </Box>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <Box
                    bgcolor="grey.light"
                    width="100%"
                    height="50%"
                    position="absolute"
                    top="15%"
                    left="5%"
                  />
                </Box>
              </Container>
            </Box>
          </Container>
        </Box>

        {/* Cards */}
        <Box pt={5}>
          <Container>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6} md={4}>
                <BgOverlayCard
                  overlayColor={palette?.primary?.[800]}
                  desc="Total retail sales in the United States rose from $1.38 trillion in 2019 to $1.47 trillion in 2020, a 6.9% increase (The Balance Small Business)"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <BgOverlayCard
                  overlayColor={palette?.black?.[800]}
                  desc="In 2020, European e-commerce retail revenues were valued at $393.8 billion (Statista)"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <BgOverlayCard
                  overlayColor={palette?.secondary?.[800]}
                  desc="It’s estimated that 95% of all purchases will be facilitated via e-commerce by 2040 (Fundera)"
                  color="black.main"
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </section>
    </>
  );
};

export default ECommerceHeader;
