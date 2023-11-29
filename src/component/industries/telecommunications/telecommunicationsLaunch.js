import { Box, Container, Grid, useTheme } from "@mui/material";
import BgOverlayCard from "component/cards/bgOverlayCard";
import CardImage1 from "assets/img/static/bg/bg-1.jpg";
import CardImage2 from "assets/img/static/bg/bg-2.jpg";
import CardImage3 from "assets/img/static/bg/bg-3.jpg";
import Title from "component/title";
import React from "react";
import TelecommunicationShape from "assets/img/static/shape/telecommunications.png";

const TelecommunicationsLaunch = () => {
  const { palette } = useTheme();
  return (
    <section>
      <Box position="relative" color="black.main" zIndex={1}>
        <Box
          position="absolute"
          top={0}
          width="100%"
          height="50%"
          maxHeight={350}
          zIndex={-1}
          sx={{
            background: ({ palette }) =>
              `linear-gradient(0deg,  ${palette?.black?.[800]}, ${palette?.black?.[800]} ), url(${TelecommunicationShape})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "repeat",
          }}
        />

        <Container>
          <Box py={8} textAlign="center" color="white.main">
            <Title
              title="Launch New Mobile Brands"
              fontSize={36}
              fontWeight={800}
            />
          </Box>

          {/* Cards */}

          <Box color="white.main" pb={8}>
            <Grid container spacing={{ xs: 3, md: 10 }}>
              <Grid item xs={12} sm={6} md={4}>
                <BgOverlayCard
                  overlayColor={palette?.secondary?.[800]}
                  minHeight={320}
                  cardImage={CardImage1}
                  title="Branded Resellers"
                  desc="Branded Resellers leverage predefined settings, tariffs, and bundles from host networks and sell them under their own brand name. This enables them to focus on sales and marketing."
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <BgOverlayCard
                  overlayColor={palette?.primary?.[800]}
                  minHeight={320}
                  cardImage={CardImage2}
                  title="Light MVNO"
                  desc="Light MVNOs have substantially more flexibility in defining their services. They acquire Core Network and Radio Access from host networks but keep everything else in-house."
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <BgOverlayCard
                  overlayColor={palette?.secondary?.[800]}
                  minHeight={320}
                  cardImage={CardImage3}
                  title="Light MVNO"
                  desc="The global EdTech market was valued at 89.49 billion U.S. dollars in 2020 and is expected to generate a CAGR of 19.9% from 2021 to 2028."
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default TelecommunicationsLaunch;
