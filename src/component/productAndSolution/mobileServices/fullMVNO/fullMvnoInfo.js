import { ArrowOutward } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import StandardButton from "component/buttons/standardButton";
import React from "react";

const FullMvnoInfo = () => {
  return (
    <section>
      <Box py={5} color="black.main">
        <Container>
          <Typography variant="h4" fontSize={32} lineHeight={1.5}>
            <Box component="span">Looking to Launch a</Box>
          </Typography>
          <Grid container>
            <Grid item xs={12} md={3}>
              <Box position="relative" pb={1.5}>
                <Typography
                  variant="h4"
                  fontSize={40}
                  fontWeight={600}
                  lineHeight={1.5}
                >
                  Full/Thick <br />
                  MVNO?
                </Typography>
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  width={120}
                  height={6}
                  bgcolor="secondary.main"
                />
              </Box>
              <Box pt={3}>
                <StandardButton
                  buttonText="Get Started"
                  endIcon={<ArrowOutward />}
                  sx={{
                    backgroundColor: ({ palette }) => palette?.dark?.main,
                    color: ({ palette }) => palette?.white?.main,
                    "&:hover": {
                      backgroundColor: ({ palette }) => palette?.dark?.main,
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={9}>
              <Typography variant="body1">
                Hamilton's full/thick MVNO solution is a versatile and scalable
                service platform that allows businesses to launch their own
                mobile brands while maintaining full control over their
                services. With Hamilton's guidance and support, companies can
                launch a bespoke mobile offering that fits their specific needs
                and requirements. By having their own number ranges, companies
                can create customized service packages, manage subscribers, and
                handle tariffs and bundling on their terms. The full MVNO
                solution also reduces the dependency on Mobile Operators,
                providing companies with greater freedom and flexibility to
                build and manage their brand. With Hamilton's full MVNO
                solution, companies can differentiate their services and stand
                out in a crowded market, ultimately leading to greater customer
                loyalty and business growth. Get started today and revolutionize
                the way you do business.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default FullMvnoInfo;
