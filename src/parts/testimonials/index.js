import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as QuotesIcon } from "assets/img/static/icon/quotes.svg";
import { Pagination } from "swiper";
import Image1 from "assets/img/dynamic/items/Humans Standing.png";
import Image2 from "assets/img/dynamic/items/Humans Standing 2.png";
import Image3 from "assets/img/dynamic/items/Humans Standing 3.png";

const list = [
  {
    desc: "Lorem ipsum dolor sit amet consectetur. Adipiscing euismod in vel id. Luctus adipiscing quis mi morbi donec. ",
    author: "NCC Pvt Ltd",
    image: Image1,
  },
  {
    desc: "Lorem ipsum dolor sit amet consectetur. Adipiscing euismod in vel id. Luctus adipiscing quis mi morbi donec. ",
    author: "NCC Pvt Ltd",
    image: Image2,
  },
  {
    desc: "Lorem ipsum dolor sit amet consectetur. Adipiscing euismod in vel id. Luctus adipiscing quis mi morbi donec. ",
    author: "NCC Pvt Ltd",
    image: Image3,
  },
  {
    desc: "Lorem ipsum dolor sit amet consectetur. Adipiscing euismod in vel id. Luctus adipiscing quis mi morbi donec. ",
    author: "NCC Pvt Ltd",
    image: Image3,
  },
];

const Testimonials = ({ data = list, vertical, centeredSlides }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      direction={vertical ? "vertical" : "horizontal"}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      breakpoints={{
        0: {
          direction: "horizontal",
          slidesPerView: 1,
        },

        900: {
          direction: vertical ? "vertical" : "horizontal",
          slidesPerView: 3,
        },
      }}
      centeredSlides={centeredSlides}
      centeredSlidesBounds
      className={`testimonial-swiper ${
        centeredSlides ? "centered-slides" : ""
      }`}
    >
      {data?.map(({ desc, author, image }, i) => (
        <SwiperSlide key={i}>
          <Box p={3}>
            <Box
              p={3}
              bgcolor="white.main"
              sx={{
                boxShadow: !centeredSlides
                  ? "-7px 12px 13px rgba(0, 0, 0, 0.1)"
                  : "none",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                  <Box>
                    <QuotesIcon width={32} className="fill-primary" />
                    <Typography variant="body2" color="dark.secondary" mt={3}>
                      {desc}
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      color="dark.secondary"
                      mt={2}
                    >
                      - {author}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box
                    pt={5}
                    bgcolor="grey.200"
                    display="flex"
                    alignItems="flex-end"
                    height={160}
                    className="testimonial-image"
                  >
                    <img
                      src={image}
                      alt={author}
                      style={{
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonials;
