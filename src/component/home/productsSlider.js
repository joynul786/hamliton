import { Box,Container } from "@mui/material";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductSimpleCard from "component/cards/productSimpleCard";
import PeoplePic from "assets/img/static/bg/people1.png";
import PeoplePic2 from "assets/img/static/bg/people2.png";
import PeoplePic3 from "assets/img/static/bg/people3.png";
const ProductSlider = () => {
  return (
    <section>
      <Container maxWidth="xl">

      <Box py={4}>
        <Swiper
          spaceBetween={25}
        //   slidesPerView={2}
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
              img={PeoplePic3}
              title="Call center services"
              description="We offer  outbound and inbound outsourced call centre solutions enabling channels like voice, SMS,and web-chat."
              link="#"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductSimpleCard
              img={PeoplePic}
              title="MVNO & MVNE"
              description="We enable Mobile Virtual Network Operators (MVNOs) to launch new offerings efficiently and capitalize on exciting opportunities in the mobile services market."
              link="#"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductSimpleCard
              img={PeoplePic2}
              title="Customized business solutions"
              description="Domain registrations and web hosting, emails and cloud services,wifi solutions,cyber security among others."
              link="#"
            />
          </SwiperSlide>
        </Swiper>
      </Box>
      </Container>
    </section>
  );
};

export default ProductSlider;
