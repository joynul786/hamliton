import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import BgImage from "assets/img/static/bg/public-sector-header.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Title from "component/title";
import BackButton from "component/buttons/backButton";

const PublicSectorHeader = () => {
  const bannerList = [
    {
      title: "Hamilton for Public Sector",
      itemsList: [
        {
          label:
            "In the United States, nearly 25% of state and local government employees use personal devices for work, putting them at higher risk for cyber intrusions.",
        },
        {
          label:
            "The global market size for public safety Internet of Things (IoT) solutions is expected to reach $29.7 billion by 2027.",
        },
        {
          label:
            "Over 98% of text messages are read, making it one of the most effective ways for governments to communicate with employees and citizens alike.",
        },
      ],
    },
    {
      title: "Hamilton for Public Sector",
      itemsList: [
        {
          label:
            "In the United States, nearly 25% of state and local government employees use personal devices for work, putting them at higher risk for cyber intrusions.",
        },
        {
          label:
            "The global market size for public safety Internet of Things (IoT) solutions is expected to reach $29.7 billion by 2027.",
        },
        {
          label:
            "Over 98% of text messages are read, making it one of the most effective ways for governments to communicate with employees and citizens alike.",
        },
      ],
    },
  ];
  return (
    <section>
      <Box
        color="white.main"
        pt={5}
        sx={{
          background: ({ palette }) =>
            `linear-gradient(0deg,  ${palette?.primary?.[800]}, ${palette?.primary?.[800]} ), url(${BgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container maxWidth="xl">
          <Box>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              modules={[Navigation]}
              navigation
              className="left-navigation"
            >
              {bannerList?.map(({ title, itemsList }, i) => (
                <SwiperSlide key={i}>
                  <Box px={{ md: 10 }}>
                    <Box pb={5}>
                      <BackButton color="inherit" />
                    </Box>
                    <Box pb={5}>
                      <Title title={title} fontSize={42} />
                    </Box>
                    <Box pb={10}>
                      <Grid container spacing={{ md: 5 }}>
                        {itemsList?.map(({ label }, idx) => (
                          <Grid key={idx} item xs={12} md={3}>
                            <Typography variant="body2" mb={5}>
                              {label}
                            </Typography>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
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

export default PublicSectorHeader;
