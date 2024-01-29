import React from 'react';
import { Typography, Container, Box, Grid, CardMedia } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import RectCard from "component/cards/rectCard";
import callCenter from '../../assets/img/dynamicImg/callcenter.png';
import Images from 'assets/img/images';

const BusinessSolution = () => {
  return (
    <Box style={{ position: 'relative' }}>
      <Container maxWidth='xl'
      >
        <Grid container style={{
          backgroundImage: `url(${callCenter})`,
          backgroundRepeat: `no-repeat, repeat`,
          height: '550px',
          objectFit: 'contain',
          backgroundColor: '#00877A',
          // backgroundSize: { xs: "100%", sm: "60%" },
        }}>


          <Box className="callServices">
            <Typography variant="h3" color={'#faaf01'}>
              Call Centre Services
            </Typography>
            <Typography variant="body2" className='callCenterText'>
              Hamilton Call Centre offers a state-of-the art facility where our clinents can reach and interact
              with their customers on an omnichannel system. We offer outbound and inbound outsourced and
              call centre solutions enabling channels like voice, SMS, and web-chat. Our technology will provide
              you a secure and efficient system that will help maximize you efficiency and meet your goals.
            </Typography>

            <CardMedia className='callPositionImgOne' component={'img'} src={Images.positionOne} />
            <CardMedia className='callPositionImgTWo' component={'img'} src={Images.positiontwo} />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default BusinessSolution;
