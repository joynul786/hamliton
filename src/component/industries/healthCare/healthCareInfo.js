import { Box, Container, Grid, Typography } from "@mui/material";
import Title from "component/title";
import React from "react";
import InfoImage from "assets/img/static/bg/bg-9.png";
import BgImage from "assets/img/static/bg/bg-10.png";

const HealthCareInfo = () => {
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
              title="The Internet of Medical Things (IoMT) Improves Quality of Care, Cuts Costs, <br />and Increases Access"
            />
          </Box>
          {/* Content with image */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box>
                <img src={InfoImage} alt="Health care" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box fontWeight={400}>
                <Typography variant="body1">
                  The healthcare industry's "Iron Triangle" describes the
                  trade-off between quality, costs, and access, where gains in
                  one area often come at the expense of others. However,
                  advancements in the Internet of Medical Things (IoMT) have the
                  potential to disrupt this traditional notion. By leveraging
                  IoMT, healthcare organizations can improve all three elements
                  simultaneously, providing high-quality care that's accessible
                  and cost-effective to:
                </Typography>
                <ul>
                  <li>
                    Bolster patient care with robot assisted procedures, remote
                    check-ups, and real-time remote monitoring.
                  </li>
                  <li>
                    Leverage wearables for preventative care and to make
                    informed health recommendations.
                  </li>
                  <li>
                    Improve hospital management and efficiency with connected
                    medical devices and equipment.
                  </li>
                  <li>
                    Facilitate better communications between hospitals, doctors,
                    and patients.
                  </li>
                </ul>
              </Box>
            </Grid>
          </Grid>

          {/* grid cards */}
          <Box pt={10} pb={5}>
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

export default HealthCareInfo;
