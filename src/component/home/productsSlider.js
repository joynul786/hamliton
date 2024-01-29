import React from 'react';
import { Box, Card, CardMedia, Container, Typography, Grid, CardActionArea } from "@mui/material";
import Images from "assets/img/images";
import ProductSimpleCard from "component/cards/productSimpleCard";

const ProductSlider = () => {
  return (
    <section>
      <Container maxWidth="xl">
        <Typography variant="h5" style={{ color: '#00877A', fontWeight: 600, margin: 6, marginLeft: 40 }}>OUR SERVICES</Typography>
        <Box py={2}>
          {/* <Swiper
            spaceBetween={25}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
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
              <ProductSimpleCard
                img={Images.serviceA}
                link="#"
              />
            </SwiperSlide>

            <SwiperSlide>
              <ProductSimpleCard
                img={Images.serviceB}
                link="#"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductSimpleCard
                img={Images.serviceC}
                link="#"
              />
            </SwiperSlide>
          </Swiper> */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} >
              <CardActionArea>
                <Card padding={4}>
                  <CardMedia
                    component="img"
                    alt="Service A"
                    height="310px"
                    width={'465px'}
                    image={Images.serviceA}
                  />
                </Card>
              </CardActionArea>
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
              <CardActionArea>
                <Card padding={4}>
                  <CardMedia
                    component="img"
                    alt="Service B"
                    height="310px"
                    width={'465px'}
                    image={Images.serviceB}
                  />
                </Card>
              </CardActionArea>
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
              <CardActionArea>
                <Card padding={4}>
                  <CardMedia
                    component="img"
                    alt="Service C"
                    height="310px"
                    width={'465px'}

                    image={Images.serviceC}
                  />
                </Card>
              </CardActionArea>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default ProductSlider;
