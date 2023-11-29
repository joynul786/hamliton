import { Box, Container, Grid, useTheme } from "@mui/material";
import BgOverlayCard from "component/cards/bgOverlayCard";
import Title from "component/title";
import Footer from "parts/footer";
import Navbar from "parts/navbar";
import React from "react";
import Image1 from "assets/img/static/bg/customer-stories-1.png";
import Image2 from "assets/img/static/bg/customer-stories-2.png";
import Image3 from "assets/img/static/bg/customer-stories-3.png";
import Image4 from "assets/img/static/bg/customer-stories-4.png";
import Image5 from "assets/img/static/bg/customer-stories-5.png";
import Image6 from "assets/img/static/bg/customer-stories-6.png";
import { Link } from "react-router-dom";
import { RouteConstant } from "navigation/constant";

const CustomerStories = () => {
  const { palette } = useTheme();
  const listItems = [
    {
      label: "Cayon CloudMVNE, MVNA & MVNO",
      link: "/cayon-cloud-MVNE-MVNA-MVNO",
      image: Image1,
    },
    {
      label: "EloWi-Fi Enterprise",
      link: "/elo-wi-fi-enterprise",
      image: Image2,
      overlayColor: "secondary",
    },
    {
      label: "M1MVNE & MVNO",
      link: "/m1mvne-mvno",
      image: Image3,
      overlayColor: "secondary",
    },
    {
      label: "SetrocMVNE, MVNA & MVNO",
      link: "/setrocmvne-mvna-mvno",
      image: Image4,
    },
    {
      label: "Smart City KyivInternet of Things",
      link: "/smart-city-kyiv-internet-of-things",
      image: Image5,
    },
    {
      label: "TelecallMVNE, MVNA & MVNO",
      link: "/telecallmvne-mvna-mvno",
      image: Image6,
      overlayColor: "secondary",
    },
  ];
  return (
    <>
      <Navbar />

      <main>
        <section>
          <Box py={10} color="black.main">
            <Container>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                  <Box pt={10} maxWidth={400} marginLeft={{ md: "auto" }}>
                    <Title
                      title="See How we Bring Results For Our Lovely Customers"
                      fontSize={36}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box>
                    <Grid container spacing={3}>
                      {listItems?.map(
                        ({ label, image, link, overlayColor }, i) => (
                          <Grid item key={i} xs={12} sm={6}>
                            <Box position="relative" height="100%">
                              <BgOverlayCard
                                cardImage={image}
                                title={label}
                                justifyContent="flex-end"
                                overlayColor={
                                  overlayColor === "secondary"
                                    ? palette?.secondary?.[600]
                                    : palette?.primary?.[600]
                                }
                              />
                              <Link
                                to={`${RouteConstant?.CUSTOMER_STORIES}${link}`}
                                className="stretched-link"
                              />
                            </Box>
                          </Grid>
                        )
                      )}
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CustomerStories;
