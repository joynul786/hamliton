import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import BgImage from "assets/img/static/bg/experience-the-cloud-header.png";
import BackButton from "component/buttons/backButton";
import Title from "component/title";

const ExperienceTheCloudHeader = () => {
  return (
    <section>
      <Box
        sx={{
          background: `url(${BgImage})`,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
        py={8}
      >
        <Container>
          <Box py={5} color="white.main" maxWidth={900}>
            <BackButton color="inherit" />
            <Box pt={4} pb={2}>
              <Title title="Experience Cloud" />
            </Box>
            <Typography variant="body1" fontWeight={400}>
              Are you ready to take your business to the next level? Experience
              Cloud by Hamilton Telecom can help. Our comprehensive suite of
              services, including IoT, AI, and mobile communication solutions,
              can optimize your business processes and improve customer
              experiences. With our expert support and secure network
              infrastructure, you can trust that your business is in good hands.
              Contact us today to learn more about Experience Cloud and how we
              can help your business succeed.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl">
        <Box py={5} color="black.main">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={4}>
              <Title
                title="Centralized Customer Data"
                fontSize={22}
                fontWeight={500}
              />
              <Typography variant="body2" mt={2}>
                Experience Cloud enables businesses to centralize customer data
                across multiple channels, such as web, mobile, and social media.
                This allows businesses to gain a more holistic view of their
                customers, and deliver personalized experiences based on
                customer behavior and preferences.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Title
                title="Real-Time Customer Insights"
                fontSize={22}
                fontWeight={500}
              />
              <Typography variant="body2" mt={2}>
                Experience Cloud provides real-time insights into customer
                behavior and preferences. By analyzing customer interactions
                across various channels, businesses can gain a deeper
                understanding of customer needs and preferences, and make
                data-driven decisions to improve customer experience.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Title
                title="Omni-Channel Engagement"
                fontSize={22}
                fontWeight={500}
              />
              <Typography variant="body2" mt={2}>
                Experience Cloud enables businesses to engage with customers
                across multiple channels, including web, mobile, social media,
                email, and SMS. This provides customers with a consistent and
                seamless experience, regardless of the channel they use to
                interact with the business.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default ExperienceTheCloudHeader;
