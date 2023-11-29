import { Box, Container, Grid, Typography } from "@mui/material";
import SectionHeading from "component/sectionHeading";
import React from "react";

const LightMvnoSolutions = () => {
  const list = [
    {
      label: "Radio<br />Access",
    },
    {
      label: "Core<br />Network",
    },
    {
      label: "Application <br />& Services",
    },
    {
      label: "Rating &<br />Billing",
    },
    {
      label: "Customer<br />Care",
    },
    {
      label: "Sales &<br />Marketing",
    },
  ];

  return (
    <section>
      <Box py={5} color="black.main">
        <Container>
          <Box maxWidth={700} margin="auto" textAlign="center">
            <SectionHeading title="Simple, Fast MVNO Solutions" />
            <Typography variant="body1" py={5}>
              Hamilton offers a fast and simple process for launching a cloud
              MVNO, providing guidance throughout the set-up process and
              assisting with service optimization. With a unique level of
              flexibility, their environment allows for the inclusion of core
              network elements in a light MVNO deployment.
            </Typography>
          </Box>
          <Box
            pt={5}
            pb={3}
            color="black.main"
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
          >
            {list?.map(({ label }, i) => (
              <Box
                key={i}
                mb={2}
                mr={2}
                px={2}
                py={1}
                textAlign="center"
                sx={{
                  border: ({ palette }) => `1px solid ${palette?.black?.[100]}`,
                  borderRadius: "10px",
                }}
              >
                <Typography
                  variant="body1"
                  dangerouslySetInnerHTML={{ __html: label }}
                />
              </Box>
            ))}
          </Box>

          <Box fontSize={18} fontWeight={700} textAlign="center">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Box bgcolor="primary.100" color="primary.main" p={2}>
                  MVNE
                </Box>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Box bgcolor="secondary.100" color="secondary.main" p={2}>
                  Enhanced Service Provider / light MVNO
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default LightMvnoSolutions;
