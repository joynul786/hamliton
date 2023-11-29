import { Box, Container, Grid, useTheme } from "@mui/material";
import Title from "component/title";
import React from "react";
import BgImage from "assets/img/static/bg/automobile-introducing-iot-bg.jpg";
import BgShape from "assets/img/static/shape/automobile.png";
import StandardButton from "component/buttons/standardButton";
import { ArrowOutward } from "@mui/icons-material";
import BgOverlayCard from "component/cards/bgOverlayCard";

const AutomobileIntroducingIOT = () => {
  const { palette } = useTheme();
  const list = [
    {
      title: "Global Cellular <br />Connectivity",
      desc: "Keep vehicles connected via a multi-country, multi-network cellular connectivity solution that supports local or roaming access on 2G, 3G, 4G, 5G, and LPWAN (NB-IoT, LTE-M) networks.",
    },
    {
      title: "Access to Global <br />Wi-Fi",
      desc: "Keep vehicles and other smart devices and apps securely connected to the largest aggregated Wi-Fi network in the world. Offer Wi-Fi as a perk, embed it in your app, and use it for remote OTA updates.",
    },
    {
      title: "Bootstrap IoT <br />Connectivity",
      desc: "You don’t know where your vehicles will be used once they leave your factories. To facilitate region-specific IoT connectivity in your fleet, you’ll need to include bootstrap connectivity profiles.",
    },
    {
      title: "IoT Management",
      desc: "Access vehicle and device insights and manage fleets with a multi-vendor, multilayer service that gives you complete control over all your IoT, M2M, and Smart City solutions and deployments.",
      grid: 6,
    },
    {
      title: "Application-to-Person (A2P) Messaging",
      desc: "Improve communications with drivers by creating text and voice messaging campaigns. Configure channels and set cascading fallback options via an easy-to-use customer portal.",
      grid: 6,
    },
  ];
  return (
    <section>
      <Box py={5} color="black.main">
        <Container maxWidth="xl">
          <Box textAlign="center" py={5}>
            <Title
              title="Introducing the Hamilton IoT Platform"
              fontSize={36}
            />
          </Box>
          <Grid container spacing={3}>
            {list?.map(({ title, desc, grid }, i) => (
              <Grid item key={i} xs={12} sm={6} md={grid === 6 ? 6 : 4}>
                <BgOverlayCard
                  key={i}
                  overlayColor={
                    i % 2 !== 0
                      ? palette?.primary?.[800]
                      : palette?.black?.[800]
                  }
                  title={title}
                  desc={desc}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box my={5}>
        <Box
          sx={{
            background: ({ palette }) =>
              `linear-gradient(0deg,  ${palette?.black?.[600]}, ${palette?.black?.[600]} ), url(${BgImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          py={10}
          position="relative"
          overflow="hidden"
          zIndex={1}
        >
          <Box
            sx={{
              background: `url(${BgShape})`,
              backgroundSize: "contain",
              backgroundPosition: "top right",
              backgroundRepeat: "no-repeat",
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "-20%",
              right: 0,
              zIndex: -1,
            }}
          />
          <Container>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems={{ md: "center" }}
              color="white.main"
              flexDirection={{ xs: "column", md: "row" }}
            >
              <Title
                title="Get customized IoT <br />for your automobiles"
                fontWeight={700}
                fontSize={30}
              />
              <Box pt={{ xs: 5, md: 0 }}>
                <StandardButton
                  buttonText="Contact Us Today !"
                  link="#"
                  endIcon={<ArrowOutward />}
                  sx={{ color: "#fff" }}
                />
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </section>
  );
};

export default AutomobileIntroducingIOT;
