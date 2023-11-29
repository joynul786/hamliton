import { Box, Container, Grid, Typography } from "@mui/material";
import BackButton from "component/buttons/backButton";
import Title from "component/title";
import React from "react";
import Image1 from "assets/img/static/bg/telecommunications-header.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const TelecommunicationsHeader = () => {
  const bannerList = [
    {
      title:
        "Hamilton for Telecommunications and Communications Service Providers",
      image: Image1,
    },
    {
      title:
        "Hamilton for Telecommunications and Communications Service Providers",
      image: Image1,
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
            // style={{ paddingBottom: "80px" }}
            className="center-navigation navigation-black"
          >
            {bannerList?.map(({ title, image }, i) => (
              <SwiperSlide key={i}>
                <Grid container spacing={5}>
                  <Grid item xs={12} md={5}>
                    <Box pt={5}>
                      <BackButton />
                      <Box py={5}>
                        <Title title={title} fontSize={36} />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <Box
                      sx={{
                        background: ({ palette }) =>
                          `linear-gradient(0deg, ${palette?.secondary?.[800]}, ${palette?.secondary?.[800]}), url(${image})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height: "100%",
                        width: "100%",
                        minHeight: 350,
                      }}
                    />
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>

          <Box pt={1}>
            <Typography variant="body2">
              The telecommunications industry has undergone significant changes
              in recent years, particularly in countries where limited
              competition and government restrictions had previously hindered
              its growth. With Mobile Operators now opening their networks to
              other companies, innovative mobile services and offerings have
              been created, while new ISPs are offering complementary mobile
              solutions. This has led to the emergence of more robust
              telecommunications environments, providing consumers with more
              choices and better services than before.
            </Typography>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default TelecommunicationsHeader;
