import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Testimonials from "parts/testimonials";

const HomeTestimonial = () => {
  return (
    <section>
      <Box py={5}>
        <Container maxWidth="xl">
          <Grid container spacing={5}>
            <Grid item xs={12} md={5}>
              <Box pt={5}>
                <Typography variant="h4" fontWeight={600} color="black.main">
                  Our customers <br /> love what we do{" "}
                </Typography>
                <Typography variant="body1" mt={3}>
                  Lorem ipsum dolor sit amet consectetur. Adipiscing euismod in
                  vel id. Luctus adipiscing quis mi morbi donec. Pulvinar neque
                  consequat nibh id ligula volutpat nullam. Feugiat vitae lectus
                  aliquet adipiscing quam natoque sapien aliquam. Tortor
                  fermentum sed et senectus semper. At pulvinar sagittis egestas
                  diam vel aliquet
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box
                position="relative"
                pl={{ md: 5 }}
                className="vertical-swiper-with-pagination"
              >
                <Testimonials vertical />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default HomeTestimonial;
