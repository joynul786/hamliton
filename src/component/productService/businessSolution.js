import { Typography, Container, Box, Grid } from "@mui/material";
import People9Pic from "assets/img/static/bg/people9.png";
import { Swiper, SwiperSlide } from "swiper/react";
import RectCard from "component/cards/rectCard";
const BusinessSolution = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container spacing={3} py={4}>
          <Grid item xs={12} md={3}>
            <Box className="resImg" sx={{display:"flex", alignItems:"flex-end",height:1,mr:3}}>
              <img src={People9Pic} alt="network" />
            </Box>
          </Grid>
          <Grid item xs={12} md={9} >
            <Typography variant="h3" fontWeight={700} color="#000" mb={4}>
              Business Solutions
            </Typography>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={10}
              className="product-swiper"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <RectCard color={"secondary"} text="Email and Cloud solution" />
              </SwiperSlide>
              <SwiperSlide>
                <RectCard color={"primary"} text="Web and Domain hosting" />
              </SwiperSlide>
              <SwiperSlide>
                <RectCard
                  color={"secondary"}
                  text="Managed services – Surveillance , tracking etc"
                />
              </SwiperSlide>
              <SwiperSlide>
                <RectCard color={"primary"} text="Web and Domain hosting" />
              </SwiperSlide>
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BusinessSolution;
