import { Box, Container, Grid, Typography } from "@mui/material";
import Title from "component/title";
import React from "react";
import InfoImage from "assets/img/static/bg/telecommunications-1.png";
import BgImage from "assets/img/static/bg/manufacturing-bg.png";

const TelecommunicationsInfo = () => {
  const itemsList = [
    {
      title: "Global Cellular Connectivity",
      desc: "Global cellular and Wi-Fi connectivity enables healthcare providers to keep staff connected no matter what.",
    },
    {
      title: "Secure Global Wi-Fi",
      desc: "OEMs often don’t know where their products will be used once they leave their factories. To facilitate region-specific IoT connectivity, they’ll need bootstrap connectivity profiles.",
    },
    {
      title: "IoT Connectivity Management",
      desc: "OEMs can offer insight into the devices and equipment they build. End users can then manage hospital resources with a multi-vendor, multilayer service that offers complete control over devices.",
    },
    {
      title: "Application-to-Person (A2P) Messaging",
      desc: "Improve communications with patients and staff with text and voice messaging campaigns. Configure channels and set cascading fallback options via an easy-to-use customer portal.",
    },
  ];
  return (
    <section>
      <Box color="black.main" pt={5} pb={10}>
        <Container maxWidth="xl">
          <Box maxWidth={800} margin="auto" py={5}>
            <Title
              fontSize={36}
              title="For Telecommunications Companies, Competition Is Tougher Than Ever"
            />
          </Box>
          {/* Content with image */}
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box>
                <img src={InfoImage} alt="Manufacturing" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box fontWeight={400}>
                <Typography variant="body1">
                  The mobile industry has become more accessible, and as a
                  result, businesses and entrepreneurs from various industries
                  are launching their own branded mobile services. This trend is
                  not limited to globally recognized retail and e-commerce
                  brands; universities, sports teams, celebrities, and social
                  media influencers are also getting in on the action. While
                  this benefits subscribers, it has increased the competition
                  for telecommunications businesses and service providers
                  significantly. Consequently, there is now a greater demand for
                  flexible and cutting-edge technologies and solutions that can
                  help businesses compete and succeed in the ever-changing
                  mobile landscape.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* grid cards */}
          <Box pt={10} pb={5}>
            <Box pb={3}>
              <Title fontSize={36} title="Hamilton Products and Solutions" />
            </Box>
            <Grid container spacing={5}>
              {itemsList?.map(({ title, desc }, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <Typography
                    variant="body1"
                    fontWeight={600}
                    minHeight={{ sm: 60 }}
                  >
                    {title}
                  </Typography>

                  <Typography variant="body1" fontWeight={400}>
                    {desc}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box>
            <img src={BgImage} alt="Hamilton Telecom" />
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default TelecommunicationsInfo;
