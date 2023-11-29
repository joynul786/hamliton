import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import BannerBg from "assets/img/static/bg/bg-7.jpg";
import AfricanWoman from "assets/img/static/bg/african-business-woman.png";
import WrappedImageCard from "component/cards/wrappedImageCard";
import Title from "component/title";

const FinancialServicesInfo = () => {
  const { palette } = useTheme();
  return (
    <section>
      <Box color="black.main">
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box
                position="relative"
                sx={{
                  background: ({ palette }) =>
                    `linear-gradient(0deg,  ${palette?.primary?.[800]}, ${palette?.primary?.[800]} ), url(${BannerBg})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                height="100%"
                minHeight={320}
                display="flex"
                alignItems="flex-end"
              >
                <Box maxWidth="50%" margin="0 auto" pt={3}>
                  <img src={AfricanWoman} alt="E-commerce" />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box p={{ md: 3 }}>
                <Typography variant="body1" mt={3}>
                  The financial services industry is undergoing rapid evolution,
                  prompting entrepreneurs and established players in banking,
                  insurance, fintech, and other financial sectors to explore new
                  avenues for diversification, develop innovative solutions, and
                  expand their reach to new markets.
                </Typography>
                <Box fontWeight={400}>
                  <Typography variant="body1" mt={3}>
                    They’ve focused especially on:
                  </Typography>
                  <ul style={{ marginTop: 0 }}>
                    <li>
                      Creating durable relationships with clients, cardholders,
                      policyholders, etc.
                    </li>
                    <li>Differentiating their brands from competitors.</li>
                    <li>
                      Leveraging data to identify competitive threats and
                      business opportunities.
                    </li>
                    <li>
                      Improving outreach via digital channels for promotional
                      and communication purposes.
                    </li>
                  </ul>
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* Wrapped Content */}
          <Box py={10}>
            <Grid container alignItems="center" spacing={3}>
              <Grid item xs={12} md={7}>
                <WrappedImageCard
                  bgColor={palette?.primary?.[600]}
                  boxes={[
                    {
                      text: "Global Cellular <br />Connectivity",
                      top: 0,
                      left: "20%",
                    },
                    {
                      text: "Application-to-Person (A2P), <br />SMS, and Voice Messaging",
                      top: "40%",
                      left: "0%",
                    },
                    {
                      text: "Value-Added <br />Services (VAS)",
                      bottom: 0,
                      left: "20%",
                    },
                    {
                      text: "IoT Connectivity <br />Management",
                      right: 0,
                      top: "20%",
                    },
                    {
                      text: "Access to <br />Global Wi-Fi",
                      right: 0,
                      bottom: "20%",
                    },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={5} order={{ xs: -1, md: 2 }}>
                <Box pt={5}>
                  <Title
                    fontSize={36}
                    title="Hamilton’s <br />Products and <br />Solutions"
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid container alignItems="center" mt={5} spacing={3}>
              <Grid item xs={12} md={5}>
                <Box>
                  <Title fontSize={36} title="Stand Out in a Crowded Market" />
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <WrappedImageCard
                    bgColor={palette?.secondary?.[600]}
                    boxes={[
                      {
                        text: "Add New Products and Services to Diversify Business",
                        bottom: 0,
                        left: "10%",
                      },
                      {
                        text: "Create More Attractive Loyalty and Reward Programs",
                        top: "20%",
                        right: 0,
                      },
                    ]}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default FinancialServicesInfo;
