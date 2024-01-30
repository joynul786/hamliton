import { Box, Container, Typography, useTheme } from "@mui/material";
import BgOverlayCard from "component/cards/bgOverlayCard";
import { Swiper, SwiperSlide } from "swiper/react";
import business from "../../assets/img/dynamicImg/Busness.png";

const BusinessSolution = () => {
  const { palette } = useTheme();
  return (
    <Box style={{ position: "relative" }}>
      <Box
        style={{
          backgroundImage: `url(${business})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
          // height: '550px',
          position: "relative",
        }}
      >
        <Container maxWidth="xl">
          {/* <Container maxWidth="lg"> */}
          <Box pt={15}>
            <Typography variant="h2" className="BusinessSolution">
              Business Solution
            </Typography>
          </Box>
          <Box pt={15}>
            <Swiper
              spaceBetween={20}
              breakpoints={{
                992: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 2,
                },
                480: {
                  slidesPerView: 1,
                },
              }}
              className="home-product-swiper"
            >
              <SwiperSlide>
                <BgOverlayCard
                  title="Email and Cloud <br /> solution"
                  overlayColor={palette.secondary[800]}
                  minHeight={60}
                  style={{ padding: "120px 20px 20px" }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <BgOverlayCard
                  title="Web and Domain <br /> hosting "
                  overlayColor={palette.primary[800]}
                  minHeight={60}
                  style={{ padding: "120px 20px 20px" }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <BgOverlayCard
                  title="Managed services – Surveillance, <br /> tracking etc"
                  overlayColor={palette.secondary[800]}
                  minHeight={60}
                  style={{ padding: "120px 20px 20px" }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <BgOverlayCard
                  title="Email and Cloud <br /> solution"
                  overlayColor={palette.secondary[800]}
                  minHeight={60}
                  style={{ padding: "120px 20px 20px" }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <BgOverlayCard
                  title="Web and Domain <br /> hosting "
                  overlayColor={palette.primary[800]}
                  minHeight={60}
                  style={{ padding: "120px 20px 20px" }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <BgOverlayCard
                  title="Managed services – Surveillance, <br /> tracking etc"
                  overlayColor={palette.secondary[800]}
                  minHeight={60}
                  style={{ padding: "120px 20px 20px" }}
                />
              </SwiperSlide>
            </Swiper>
            {/* <CardMedia
                className="frameImg"
                component="img"
                src={Images.Frame1}
              />
              <CardMedia
                className="frameImg"
                component="img"
                src={Images.Frame2}
              />
              <CardMedia
                className="frameImg"
                component="img"
                src={Images.Frame3}
              />
              <CardMedia
                className="frameImg"
                component="img"
                src={Images.Frame4}
              /> */}
            {/* <CardMedia className="frameImg" component='img' src={Images.Frame5} /> */}
          </Box>
          {/* </Container> */}
        </Container>
      </Box>
    </Box>
  );
};

export default BusinessSolution;
