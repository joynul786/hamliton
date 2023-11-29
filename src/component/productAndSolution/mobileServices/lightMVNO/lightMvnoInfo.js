import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const LightMvnoInfo = () => {
  return (
    <section>
      <Box py={5} color="black.main">
        <Container>
          <Grid container alignItems="center" spacing={5}>
            <Grid item xs={12} md={4}>
              <Box position="relative" pb={1.5}>
                <Typography variant="h4" fontSize={36}>
                  <Box component="span" color="secondary.main">
                    Anyone&nbsp;
                  </Box>
                  <Box component="span">
                    Can Launch Mobile Services On Their Own —&nbsp;
                  </Box>
                  <Box component="span" fontWeight={500}>
                    Even You!
                  </Box>
                </Typography>
                <Box
                  position="absolute"
                  bottom={0}
                  right="30%"
                  width={120}
                  height={6}
                  bgcolor="secondary.main"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body1">
                Hamilton's Light/Thin MVNO offering provides an opportunity for
                brands and businesses in various industries to enter the mobile
                telecommunications market and expand their product portfolio. By
                leveraging Hamilton's global connectivity platform and
                specialized BSS, businesses can launch their own branded mobile
                services with ease. This allows businesses to differentiate
                their offerings, attract and retain customers, and generate
                additional recurring revenue. Additionally, Hamilton's platform
                provides flexible integration options and access to MNOs,
                satellites, and global Wi-Fi networks, making it suitable for
                both early-stage and mature markets. With coverage in 200+
                countries and territories, businesses can expand their services
                into new markets and territories and provide a unique offering
                that stands out from competitors.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box color="black.main" py={5}>
        <Container>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems={{ lg: "flex-end" }}
            flexDirection={{
              xs: "column",
              lg: "row",
            }}
          >
            <Typography
              variant="body1"
              fontSize={{ xs: "20vw", md: 150 }}
              lineHeight={1}
            >
              Retailer
            </Typography>
            <Box pl={{ xs: 3, md: 10 }} flex="1 1 auto">
              <Typography
                variant="body1"
                fontSize={{ xs: 30, sm: 42 }}
                lineHeight={1.2}
                textAlign="start"
              >
                Cable Company
              </Typography>
              <Typography
                variant="body1"
                fontSize={{ xs: 42, sm: 60 }}
                lineHeight={1.2}
                textAlign="end"
              >
                Similar
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="body1"
            fontSize={48}
            lineHeight={1.2}
            textAlign="center"
            mt={2}
          >
            Internet Service Provider
          </Typography>
        </Container>
      </Box>
    </section>
  );
};

export default LightMvnoInfo;
