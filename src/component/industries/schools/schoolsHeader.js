import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "assets/img/static/bg/schools-header-1.png";
import Title from "component/title";
import BackButton from "component/buttons/backButton";
import BgOverlayCard from "component/cards/bgOverlayCard";
import CardImage1 from "assets/img/static/bg/bg-1.jpg";
import CardImage2 from "assets/img/static/bg/bg-2.jpg";
import CardImage3 from "assets/img/static/bg/bg-3.jpg";
import StandardButton from "component/buttons/standardButton";
import { ArrowOutward } from "@mui/icons-material";
import SliderImage1 from "assets/img/dynamic/items/schools-1.png";
import SliderImage2 from "assets/img/dynamic/items/schools-2.png";
import SliderImage3 from "assets/img/dynamic/items/schools-3.png";

const SchoolsHeader = () => {
  const { palette } = useTheme();

  const bannerList = [
    {
      title:
        "Hamilton for Schools, Universities, and Education Technology (EdTech)",
      image: Image1,
    },
    {
      title:
        "Hamilton for Schools, Universities, and Education Technology (EdTech)",
      image: Image1,
    },
  ];

  const imagesList = [
    { image: SliderImage1 },
    { image: SliderImage2 },
    { image: SliderImage3 },
  ];

  return (
    <section>
      {/* Banner */}
      <Box color="white.main">
        <Container maxWidth="xl">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            modules={[Navigation]}
            navigation
          >
            {bannerList?.map(({ title, desc, image }, i) => (
              <SwiperSlide key={i}>
                <Box
                  py={5}
                  px={{ xs: 1, md: 10 }}
                  sx={{
                    background: ({ palette }) =>
                      `linear-gradient(0deg,  ${palette?.primary?.[800]}, ${palette?.primary?.[800]} ), url(${image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <BackButton color="inherit" />
                  <Box
                    maxWidth={800}
                    margin="auto"
                    pt={10}
                    pb={15}
                    textAlign="center"
                  >
                    <Title title={title} />
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Box>

      {/* Cards */}
      <Box pt={5}>
        <Container>
          <Grid container spacing={{ xs: 3, md: 10 }}>
            <Grid item xs={12} sm={6} md={4}>
              <BgOverlayCard
                overlayColor={palette?.secondary?.[800]}
                minHeight={320}
                cardImage={CardImage1}
                desc="Global venture capital funding for EdTech increased from 500 million U.S. dollars to 7 billion U.S. dollars between 2010 and 2019."
                classes="shadow-2"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <BgOverlayCard
                overlayColor={palette?.primary?.[800]}
                minHeight={320}
                cardImage={CardImage2}
                desc="83% of higher education institutions are on their way to full-fledged digital transformations."
                classes="shadow-2"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <BgOverlayCard
                overlayColor={palette?.secondary?.[800]}
                minHeight={320}
                cardImage={CardImage3}
                desc="The global EdTech market was valued at 89.49 billion U.S. dollars in 2020 and is expected to generate a CAGR of 19.9% from 2021 to 2028."
                classes="shadow-2"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Content */}
      <Box color="black.main" pt={10}>
        <Container>
          <Title
            title="The Rise of Education Technology and <br />the Digital Classroom"
            fontSize={36}
          />
          <Box fontWeight={400} pt={5}>
            <Typography variant="body1">
              The EdTech industry is rapidly advancing, and both online and
              in-person academic institutions are increasingly adopting digital
              tools to enhance student experiences, generate revenue, and foster
              stronger communities and alumni networks. In particular, EdTech
              developers and academic institutions are concentrating on:
            </Typography>
            <ul>
              <li>Making education more accessible.</li>
              <li>
                Creating durable relationships with students, faculty members,
                alumni, etc.
              </li>
              <li>
                Improving outreach via digital channels for communication and
                fundraising purposes.
              </li>
              <li>Optimizing security for digital learning solutions.</li>
            </ul>
            <Box pt={3}>
              <StandardButton
                buttonText="Learn More"
                endIcon={<ArrowOutward />}
                color="primary"
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Image Slider */}
      <Box pt={5}>
        <Container maxWidth="xl">
          <Swiper
            spaceBetween={20}
            slidesPerView={2.5}
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
                slidesPerView: 2.5,
                pagination: false,
              },
            }}
          >
            {imagesList?.map(({ image }, i) => (
              <SwiperSlide key={i}>
                <Box height={280}>
                  <img
                    src={image}
                    alt="IOT"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
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

export default SchoolsHeader;
