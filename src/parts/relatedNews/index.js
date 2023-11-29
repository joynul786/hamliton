import { Box, Button, Container, Typography } from "@mui/material";
import SectionHeading from "component/sectionHeading";
import React from "react";
import News1 from "assets/img/dynamic/items/news-1.png";
import News2 from "assets/img/dynamic/items/news-2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import StandardButton from "component/buttons/standardButton";

const items = [
  {
    title: "How 5G Helps Mobile Networks Operator ",
    desc: "",
    image: News1,
    tag: "",
  },
  {
    title: "How 5G Helps Mobile Networks Operator ",
    desc: "Lorem ipsum dolor sit amet consectetur. Sed pretium aliquam arcu id neque hendrerit dui pharetra. At donec mattis adipiscing purus euismod enim. Habitasse mauris duis viverra pharetra vitae vitae. Nisl nisl velit aliquet turpis quam augue.",
    image: News2,
    tag: "",
  },
];
const RelatedNews = ({ data = items }) => {
  return (
    <section>
      <Container maxWidth="xl">
        <SectionHeading title="Related New’s" />
        <Box py={5}>
          <Swiper
            spaceBetween={30}
            slidesPerView={1.7}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                pagination: {
                  clickable: true,
                },
              },
              900: {
                slidesPerView: 1.7,
                pagination: false,
              },
            }}
          >
            {data?.map(({ title, desc, tag, image }, i) => (
              <SwiperSlide key={i}>
                <Box
                  height={350}
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  p={5}
                  sx={{
                    background: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <Box>
                    <StandardButton
                      buttonText="Latest"
                      color="inherit"
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.16)",
                        color: "#fff",
                        borderRadius: 0,
                        fontWeight: 400,
                        mb: 1,
                        minWidth: "unset",
                        padding: "4px 10px",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.26)",
                        },
                      }}
                    />

                    <Typography
                      variant="body1"
                      color="white.main"
                      fontWeight={500}
                    >
                      {title}
                    </Typography>
                    {desc ? (
                      <Typography
                        variant="body2"
                        color="white.main"
                        fontWeight={300}
                        mt={1}
                      >
                        {desc}
                      </Typography>
                    ) : (
                      <></>
                    )}
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </section>
  );
};

export default RelatedNews;
