import { Box, Container, Grid, Typography } from "@mui/material";
import Title from "component/title";
import React from "react";
import InfoImage from "assets/img/static/bg/manufacturing-1.png";
import BgImage from "assets/img/static/bg/manufacturing-bg.png";

const ManufactureInfo = () => {
  const itemsList = [
    {
      title: "Global Connectivity",
      desc: "Global cellular and Wi-Fi connectivity enables healthcare providers to keep staff connected no matter what.",
    },
    {
      title: "Bootstrap IoT Connectivity",
      desc: "OEMs often don’t know where their products will be used once they leave their factories. To facilitate region-specific IoT connectivity, they’ll need bootstrap connectivity profiles.",
    },
    {
      title: "IoT Management",
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
              title="Manufacturing in the Age of Connectivity"
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
                  The manufacturing industry is rapidly evolving, prompting
                  entrepreneurs, OEMs, and manufacturers across various sectors
                  to seek out ways to improve their products, optimize
                  efficiency, and enhance communication with customers and
                  partners. This drive for innovation and differentiation has
                  become a key factor in staying competitive in the industry.
                </Typography>
                <Typography variant="body1" mt={2}>
                  They’ve focused especially on:
                </Typography>
                <ul>
                  <li>
                    Creating products that integrate seamlessly into their
                    customers’ lives.
                  </li>
                  <li>Differentiating their products from competitors.</li>
                  <li>Developing smart, IoT-enabled products.</li>
                  <li>
                    Leveraging data to identify competitive threats and business
                    opportunities.
                  </li>
                  <li>
                    Improving outreach via digital channels for promotional and
                    communication purposes.
                  </li>
                </ul>
              </Box>
            </Grid>
          </Grid>

          {/* grid cards */}
          <Box pt={10} pb={5}>
            <Box pb={3}>
              <Title
                fontSize={36}
                title="Introducing Hamilton for Manufacturing"
              />
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

export default ManufactureInfo;
