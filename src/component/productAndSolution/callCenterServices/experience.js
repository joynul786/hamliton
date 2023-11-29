import { Box, Container, Grid, Typography } from "@mui/material";
import SectionHeading from "component/sectionHeading";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "assets/img/dynamic/items/debt-collection.png";
import Image2 from "assets/img/dynamic/items/lead-generation.png";
import { Pagination } from "swiper";

const CallCenterServicesExperience = () => {
  const list = [
    { label: "Debt Collection", image: Image1 },
    { label: "Lead Generation", image: Image2 },
    { label: "Customer Service", image: Image1 },
    { label: "IT Development", image: Image2 },
  ];
  return (
    <section>
      <Box pb={5}>
        <Container maxWidth="xl">
          <Grid container alignItems="center" spacing={5}>
            <Grid item xs={12} md={2}>
              <SectionHeading
                subtitle="Experience"
                subtitleFontWeight={400}
                title="Some of the services we offer"
                titleFontClass="ff-primary"
                titleFontSize={30}
              />
            </Grid>
            <Grid item xs={12} md={10}>
              <Swiper
                slidesPerView={3.5}
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
                    slidesPerView: 3.5,
                    pagination: false,
                  },
                }}
              >
                {list?.map(({ label, image }, i) => (
                  <SwiperSlide key={i}>
                    <Box p={2}>
                      <Box
                        minHeight={120}
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-end"
                        alignItems="center"
                        px={3}
                        py={5}
                        className="shadow-2"
                        sx={{
                          background: `url(${image})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <Typography
                          variant="body1"
                          color="white.main"
                          fontWeight={700}
                        >
                          {label}
                        </Typography>
                      </Box>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default CallCenterServicesExperience;
