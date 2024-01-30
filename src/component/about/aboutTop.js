import { Box, Container, Grid, Typography } from "@mui/material";
import Images from "assets/img/images";
const AboutTop = () => {
  return (
    <Box>
      <Box className="aboutPage">
        <Box position="relative">
          <Box
            className="about_top_container_text"
            sx={{
              backgroundImage: `url(${Images.ProductAndService})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
              backgroundSize: "cover",
              minHeight: "50vh",
            }}
          >
            <Box py={15}>
              <Container maxWidth="lg">
                <Grid container>
                  <Grid item xs={8} md={6}>
                    <Typography>
                      Hamilton Telecom is a dynamic and innovative provider of
                      mobile telecommunications solutions founded in 2016 with a
                      National Public Service Provider License (NPSP) by Uganda
                      Communications Commission, committed to revolutionizing
                      the industry.
                    </Typography>

                    <a href="#">Learn More</a>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutTop;
