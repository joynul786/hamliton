import { Box, Container, Grid, Typography } from "@mui/material";
import BackButton from "component/buttons/backButton";
import Title from "component/title";
import React from "react";
import Image1 from "assets/img/static/bg/manufacturing-header.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const ManufactureHeader = () => {
  const bannerList = [
    {
      image: Image1,
      title: "Manufacturing",
      desc: `Manufacturing is a fundamental sector, with a yearly worldwide production value surpassing $41.9 trillion for 2021 and beyond. In this highly competitive industry, manufacturers continuously seek ways to improve operational efficiency, distinguish their products, and enhance customer and partner engagement.`,
    },
    {
      image: Image1,
      title: "Manufacturing",
      desc: `Manufacturing is a fundamental sector, with a yearly worldwide production value surpassing $41.9 trillion for 2021 and beyond. In this highly competitive industry, manufacturers continuously seek ways to improve operational efficiency, distinguish their products, and enhance customer and partner engagement.`,
    },
  ];

  return (
    <section>
      <Box color="black.main">
        <Container>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            modules={[Navigation]}
            navigation
            style={{ paddingBottom: "80px" }}
            className="center-navigation navigation-black"
          >
            {bannerList?.map(({ title, desc, image }, i) => (
              <SwiperSlide key={i}>
                <Grid container spacing={5}>
                  <Grid item xs={12} md={5}>
                    <Box pt={5}>
                      <BackButton />
                      <Box py={5}>
                        <Title title={title} fontSize={36} />
                      </Box>
                      <Typography variant="body1" fontWeight={400}>
                        {desc}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <Box>
                      <img
                        src={image}
                        alt="Manufacturing"
                        style={{ height: 400, objectFit: "cover" }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>

          <Box pt={1}>
            <Grid
              container
              spacing={{ xs: 3, md: 5 }}
              justifyContent="flex-end"
            >
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="body2">
                  The IoT market in manufacturing was valued at $175.3 billion
                  in 2020 and is expected to hit $399.08 billion by 2026.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="body2">
                  In 2020, the manufacturing industry contributed approximately
                  $2269.2 to U.S. GDP, amounting to 10.8% of total GDP.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="body2">
                  58% of manufacturers say that IoT is required to digitally
                  transform industrial operations globally.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default ManufactureHeader;
