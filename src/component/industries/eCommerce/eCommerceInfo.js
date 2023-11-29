import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import WrappedImageCard from "component/cards/wrappedImageCard";
import Title from "component/title";
import React from "react";
import BgImage from "assets/img/static/bg/bg-5.jpg";
import AfricanAmericanMan from "assets/img/static/bg/african-american-man.png";

const ECommerceInfo = () => {
  const { palette } = useTheme();
  return (
    <section>
      <Box py={5} mb={10} color="black.main">
        <Container>
          <Box py={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={5}>
                <Box position="relative">
                  <Box
                    width={{ xs: 280, sm: 380 }}
                    height={{ xs: 280, sm: 380 }}
                    borderRadius="50%"
                    margin="auto"
                    position="relative"
                    sx={{
                      background: ({ palette }) =>
                        `linear-gradient(0deg,  ${palette?.primary?.[800]}, ${palette?.primary?.[800]}), url(${BgImage})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <Box
                      width="100%"
                      height="100%"
                      borderRadius={{ xs: "150px 0", md: "220px 0px" }}
                      bgcolor="secondary.main"
                      position="absolute"
                      left={{ md: "10%" }}
                      top={0}
                      zIndex={-1}
                    />
                  </Box>
                  <Box
                    width={{ xs: 280, sm: 420 }}
                    height={{ xs: 280, sm: 420 }}
                    position="absolute"
                    bottom={0}
                    right={0}
                  >
                    <img
                      src={AfricanAmericanMan}
                      alt="The Rise of Digital Retail"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
                <Title title="The Rise of Digital Retail" fontSize={36} />
                <Typography variant="body1" mt={3}>
                  The rise of online shopping, on-demand entertainment, and
                  other digital trends have transformed the retail landscape in
                  recent years. As a result, brands have had to reconsider their
                  online strategies, in-store experiences, and overall branding
                  approach to remain competitive in the market.
                </Typography>
                <Box fontWeight={400}>
                  <Typography variant="body1" mt={3}>
                    They’ve focused especially on:
                  </Typography>
                  <ul style={{ marginTop: 0 }}>
                    <li>
                      Creating durable relationships with shoppers by fostering
                      customer loyalty and retention.
                    </li>
                    <li>
                      Differentiating their brands from online and physical
                      competitors.
                    </li>
                    <li>
                      Leveraging data to identify both competitive threats and
                      business opportunities.
                    </li>
                    <li>
                      Improving outreach via digital channels for promotional
                      and communication purposes.
                    </li>
                  </ul>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Wrapped Content */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <Box pt={5}>
                <Title fontSize={36} title="Hamilton Products and Solutions" />
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <WrappedImageCard
                bgColor={palette?.primary?.[600]}
                boxes={[
                  {
                    text: "Branded Mobile <br />Services",
                    top: "20%",
                    left: "15%",
                  },
                  {
                    text: "SMS and Voice <br />Messaging",
                    bottom: 0,
                    left: "20%",
                  },
                  {
                    text: "Secure Global Wi-Fi <br />Vouchers",
                    right: 0,
                    top: "20%",
                  },
                  {
                    text: "Shopper <br />Insights",
                    right: 0,
                    bottom: "20%",
                  },
                ]}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} mt={5}>
            <Grid item xs={12} md={7}>
              <Box mt={{ md: "-10%" }}>
                <WrappedImageCard
                  bgColor={palette?.secondary?.[600]}
                  boxes={[
                    {
                      text: "Create More Attractive Loyalty <br />and Reward Programs",

                      bottom: 0,
                      left: "10%",
                    },
                    {
                      text: "New Products and <br />Services to Diversify <br />Business",
                      top: "20%",
                      right: 0,
                    },
                  ]}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              order={{ xs: -1, md: 2 }}
              display="flex"
              alignItems="flex-end"
            >
              <Box pb={{ md: 5 }}>
                <Title fontSize={36} title="Stand Out in a Crowded Market" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default ECommerceInfo;
