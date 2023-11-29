import { Box, Container } from "@mui/material";
import Title from "component/title";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Brand1 from "assets/img/static/icon/brand-1.png";
import Brand2 from "assets/img/static/icon/brand-2.png";
import Brand3 from "assets/img/static/icon/brand-3.png";
import Brand4 from "assets/img/static/icon/brand-4.png";

const BrandsSlider = () => {
  const data = [
    { image: Brand1, brandName: "" },
    { image: Brand2, brandName: "" },
    { image: Brand3, brandName: "" },
    { image: Brand4, brandName: "" },
    { image: Brand1, brandName: "" },
    { image: Brand2, brandName: "" },
    { image: Brand3, brandName: "" },
    { image: Brand4, brandName: "" },
  ];
  return (
    <section>
      <Box color="black.main">
        <Container maxWidth="xl">
          <Box pb={2}>
            <Title title="Our Brands" fontWeight={500} />
          </Box>
          <Swiper
            spaceBetween={30}
            slidesPerView={6}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              600: {
                slidesPerView: 4,
              },
              900: {
                slidesPerView: 6,
              },
            }}
            style={{ paddingTop: "30px" }}
          >
            {data?.map(({ image, brandName }, i) => (
              <SwiperSlide key={i}>
                <Box>
                  <img
                    src={image}
                    alt={brandName || "Brand"}
                    style={{
                      width: "80%",
                      height: 48,
                      objectFit: "contain",
                      objectPosition: "center",
                      margin: "auto",
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

export default BrandsSlider;
