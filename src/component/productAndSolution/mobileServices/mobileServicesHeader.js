import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import HeaderImage from "assets/img/static/bg/mobile-services-header.png";
import HeaderImage2 from "assets/img/static/bg/mobile-services-header-2.png";
import HeaderShape from "assets/img/static/shape/mobile-services-header.png";
import HeaderShape2 from "assets/img/static/shape/mobile-services-header-2.png";
import BackButton from "component/buttons/backButton";
import Title from "component/title";

const MobileServicesHeader = () => {
  return (
    <section>
      <Box
        position="relative"
        height={{ xs: 800, sm: 600 }}
        sx={{
          background: `url(${HeaderImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        zIndex={1}
      >
        <Container sx={{ height: "100%", position: "relative" }}>
          <Grid container columnSpacing={5} sx={{ height: "100%" }}>
            <Grid item xs={12} md={5}>
              <Box py={5} color="white.main">
                <BackButton color="inherit" />
                <Box pt={5}>
                  <Title title="Start Your Own Mobile/Cellular Business!" />
                  <Typography variant="body1" mt={3}>
                    The mobile/cellular industry is open to anyone who wants to
                    enter, including you! Hamilton's platform is an excellent
                    choice for businesses looking to become Mobile Network
                    Operators (MNO), Mobile Virtual Network Operators (MVNO),
                    and Mobile Virtual Network Enablers (MVNE).
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} position={{ md: "relative" }}>
              <Box
                width="40%"
                maxWidth={300}
                minHeight={{ md: 500 }}
                height="100%"
                position="absolute"
                top={0}
                right={{ xs: 0, md: "unset" }}
                marginTop={-1}
                zIndex={-1}
              >
                <img
                  src={HeaderShape}
                  alt="Mobile Services"
                  style={{ width: "100%", height: "100%" }}
                />
                <Box
                  width="100%"
                  position="absolute"
                  bottom={0}
                  sx={{ transform: "translateY(50%)" }}
                >
                  <img src={HeaderShape2} alt="Mobile Services" />
                </Box>
              </Box>

              <Box
                width={{ xs: 280, md: 450 }}
                height={{ xs: 280, md: 450 }}
                borderRadius="50%"
                overflow="hidden"
                zIndex={1}
                position="absolute"
                left={{ md: "20%" }}
                right={{ xs: 0, md: "unset" }}
                top={{ md: "50%" }}
                bottom={{ xs: 0, md: "unset" }}
                sx={{
                  transform: { md: "translateY(-50%)" },
                  filter: "drop-shadow(-20px 4px 29px rgba(0, 0, 0, 0.33))",
                }}
              >
                <img
                  src={HeaderImage2}
                  alt="Mobile Services"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "20%",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box color="black.main" py={5}>
        <Container>
          <Typography variant="body1" mb={3}>
            Hamilton offers a flexible global connectivity platform suitable for
            Mobile Network Operators (MNO), Mobile Virtual Network Operators
            (MVNO), Mobile Virtual Network Enablers (MVNE), Mobile Virtual
            Network Aggregators (MVNA), as well as enterprises and organizations
            of all sizes. With the largest aggregated network coverage in over
            200 countries and territories, Hamilton provides a specialized
            Business Support System (BSS) that enables service providers to
            manage their mobility services, network connectivity, and day-to-day
            operations efficiently.
          </Typography>
          <Typography variant="body1" mb={3}>
            The telecommunications industry is highly competitive, and
            Hamilton's platform equips service providers with the necessary
            tools to stay ahead of the competition as regulatory environments
            evolve worldwide. The platform is suitable for businesses operating
            in early-stage markets as well as sophisticated, mature markets,
            offering deep or light integration and access to Mobile Network
            Operators, Satellites, and global Wi-Fi networks.
          </Typography>
          <Typography variant="body1" mb={3}>
            Hamilton's global team understands the mobility market, and the
            platform's flexibility allows service providers to expand their
            services into new markets and territories while differentiating
            their current offerings in existing markets. Although regulatory
            situations still define market conditions, Hamilton's platform
            provides the right tools to help service providers adapt and thrive
            in changing market environments.
          </Typography>
        </Container>
      </Box>
    </section>
  );
};

export default MobileServicesHeader;
