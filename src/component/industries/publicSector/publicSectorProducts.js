import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Title from "component/title";
import React from "react";
import Image1 from "assets/img/static/bg/it-ict-6.png";
import Image2 from "assets/img/static/bg/it-ict-7.png";
import Image3 from "assets/img/static/bg/it-ict-8.png";
import Image4 from "assets/img/static/bg/it-ict-9.png";
import { ArrowForward } from "@mui/icons-material";
import BgImage from "assets/img/static/bg/npo-bg.png";
import WrappedImageCard from "component/cards/wrappedImageCard";

const PublicSectorProducts = () => {
  const { palette } = useTheme();
  const list = [
    { title: "Global Cellular Connectivity", image: Image1 },
    { title: "Global Wi-Fi Access", image: Image2 },
    { title: "IoT Connectivity Management", image: Image3 },
    { title: "Application-to-Person (A2P) Messaging", image: Image4 },
  ];
  return (
    <section>
      <Box color="black.main">
        <Container maxWidth="xl">
          <Box>
            <Grid container>
              <Grid item sm={12} lg={7}>
                <Title
                  title="Introducing Hamilton for the Public Sector"
                  fontSize={36}
                />
                <Typography variant="body1" mt={2}>
                  Hamilton provides a comprehensive range of connectivity
                  solutions and products that cater to the requirements of
                  governments, government employees, and programs. Our solutions
                  are aimed at delivering cost savings and increasing
                  productivity at the organizational level. Additionally, we
                  help cities, counties, states, municipalities, and countries
                  enhance the quality of life for their citizens through our
                  connectivity offerings.
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box py={3}>
            <Grid container spacing={3} justifyContent="center">
              {list?.map(({ title, image }, i) => (
                <Grid item xs={6} md={3} lg={2} key={i}>
                  <Box
                    bgcolor={i % 2 !== 0 ? "dark.dark3" : "secondary.main"}
                    color={i % 2 !== 0 ? "text.primaryLight" : "black.main"}
                    pt={2}
                    position="relative"
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    overflow="hidden"
                  >
                    <Typography variant="body2" fontWeight={500} px={2}>
                      {title}
                    </Typography>
                    <Box pt={5} pl={2} position="left" height="100%">
                      <Button
                        variant="outlined"
                        color="inherit"
                        sx={{
                          minWidth: "unset",
                          width: 36,
                          height: 36,
                          borderRadius: "50%",
                          padding: 0,
                          position: "absolute",
                        }}
                      >
                        <ArrowForward fontSize="small" />
                      </Button>
                      <img
                        src={image}
                        alt={title}
                        style={{
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "left",
                          marginLeft: "10%",
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box
        my={5}
        sx={{
          background: ({ palette }) =>
            `linear-gradient(0deg,  ${palette?.primary?.[800]}, ${palette?.primary?.[800]} ), url(${BgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container maxWidth="xl">
          <Box py={10}>
            <Box maxWidth="50%">
              <Title
                title="Offer Valuable <br />Incentives to Donors"
                fontSize={36}
                fontWeight={600}
                color="white.main"
              />
            </Box>
            <Box pt={5} width={{ md: "50%" }} maxWidth={600} margin="auto">
              <WrappedImageCard
                bgColor={palette?.secondary?.[600]}
                boxes={[
                  {
                    text: "Launch an Enterprise Mobile <br />Service",
                    top: "5%",
                    left: 0,
                  },
                  {
                    text: "Tap Into a World-Class Global <br />Wi-Fi Network",
                    bottom: "5%",
                    left: 0,
                  },
                  {
                    text: "Leverage the Hamilton <br />Contact Center and IVR",
                    top: "40%",
                    right: 0,
                  },
                ]}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default PublicSectorProducts;
