import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "assets/img/static/bg/bg-8.png";
import Title from "component/title";
import BackButton from "component/buttons/backButton";
import BgOverlayCard from "component/cards/bgOverlayCard";
import CardImage1 from "assets/img/static/bg/bg-1.jpg";
import CardImage2 from "assets/img/static/bg/bg-2.jpg";
import CardImage3 from "assets/img/static/bg/bg-3.jpg";

const FinancialServicesHeader = () => {
  const { palette } = useTheme();

  const bannerList = [
    {
      title: "Hamilton for the Financial Services Industry",
      desc: "In the past few decades, digitization has transformed the financial services sector with the emergence of online banking, neobanks, mobile wallets, commission-free trading apps, and BNPL apps. These technologies have made financial services accessible to more people worldwide. Moreover, blockchain technologies and digital ledgers have enabled new developments in cryptocurrencies, digital coins, and NFTs.",
      image: Image1,
    },
    {
      title: "Hamilton for the Financial Services Industry",
      desc: "In the past few decades, digitization has transformed the financial services sector with the emergence of online banking, neobanks, mobile wallets, commission-free trading apps, and BNPL apps. These technologies have made financial services accessible to more people worldwide. Moreover, blockchain technologies and digital ledgers have enabled new developments in cryptocurrencies, digital coins, and NFTs.",
      image: Image1,
    },
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
            style={{ paddingBottom: 0 }}
            className="left-navigation"
          >
            {bannerList?.map(({ title, desc, image }, i) => (
              <SwiperSlide key={i}>
                <Box
                  py={5}
                  sx={{
                    background: ({ palette }) =>
                      `linear-gradient(0deg,  ${palette?.primary?.[800]}, ${palette?.primary?.[800]} ), url(${image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  px={{ xs: 2, md: 10 }}
                >
                  <BackButton color="inherit" />
                  <Box maxWidth={800} pt={10} pb={15}>
                    <Title title={title} />
                    <Typography variant="body1" mt={2}>
                      {desc}
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Box>

      {/* Cards */}
      <Box>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12} sm={6} md={4}>
              <BgOverlayCard
                overlayColor={palette?.secondary?.[800]}
                cardImage={CardImage1}
                minHeight={240}
                desc="2.5 billion people worldwide are expected to use online banking services by 2024 (Statista)"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <BgOverlayCard
                overlayColor={palette?.black?.[800]}
                cardImage={CardImage2}
                minHeight={240}
                desc="Companies deploying smart solutions in the insurance industry can reduce the application processing time by more than 99.9% (The Insurance Marketer)"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <BgOverlayCard
                overlayColor={palette?.secondary?.[800]}
                cardImage={CardImage3}
                minHeight={240}
                desc="75% percent of consumers have a rewards program attached to their preferred credit card (Business Insider)"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default FinancialServicesHeader;
