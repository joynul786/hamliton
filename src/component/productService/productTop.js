import React from 'react';
import { Container, Grid, Typography, Box } from "@mui/material";
import roundImg from '../../assets/img/dynamicImg/roundImg.png';
import Images from "../../assets/img/images";
import arrow from "../../assets/img/dynamicImg/arrow.png";

const ProductTop = () => {
  return (
    <Box py={6}>
      <Container maxWidth="xl">
        <Grid container spacing={3} justifyContent="space-evenly" alignItems="center">
          <Grid item xs={12} md={4}>
            <Box paddingRight={2}>
              <Typography variant="body2" fontWeight={600}>
                Product & Services
              </Typography>
              <Typography variant="h4" color="secondary" mt={4}>
                Learn about our <br />
                valuable services
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box position="relative">
              <img
                src={Images.Mask}
                alt="people"
                width={400}
                style={{ position: 'relative' }}
              />
              <div
                className='roundImageText'
                style={{
                  backgroundImage: `url(${roundImg})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  width: '140px',
                  height: '140px',
                  position: 'absolute',
                  bottom: '-39px',
                  right: '-43px',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  zIndex: 1,

                }}
              ></div>
              <div
                className='arrowImg'
                style={{
                  backgroundImage: `url(${arrow})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  height: '100px',
                  width: '100px',
                  position: 'absolute',
                  bottom: '-19px',
                  right: '-23px',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  zIndex: 2,

                }}
              ></div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductTop;
