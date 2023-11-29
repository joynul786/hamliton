import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const MnveInfo = () => {
  return (
    <section>
      <Box py={5} color="black.main">
        <Container>
          <Typography variant="body1">
            Hamilton's full/thick MVNO solution is suitable for companies
            operating in any market. By acting as the link between organizations
            and telecom operators, Hamilton enables businesses of all shapes and
            sizes to launch their own mobile brands.
          </Typography>
          <Typography variant="body1" mt={1}>
            Let’s say you want to start your own mobile brand, but you also want
            full control over your service. You want to have your own number
            ranges to build bespoke offerings, manage subscribers the way you
            like offer self service, and handle tariffs and bundling (data,
            voice and SMS) on your own terms.
          </Typography>
          <Typography variant="body1" mt={1}>
            By launching a full MVNO with Hamilton, you’ll be able to reduce
            your dependency on Mobile Operators. Since all you’ll be using are
            their radio networks, you’ll have the freedom to build and manage
            your brand however you like. Ready to Get Started?
          </Typography>
        </Container>
      </Box>

      <Box fontSize={18} fontWeight={700} textAlign="center">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2.4}>
              <Box bgcolor="primary.100" color="primary.main" p={2}>
                MNO
              </Box>
            </Grid>
            <Grid item xs={12} sm={2.4}>
              <Box bgcolor="primary.100" color="primary.main" p={2}>
                MNO
              </Box>
            </Grid>
            <Grid item xs={12} sm={2.4}>
              <Box bgcolor="primary.100" color="primary.main" p={2}>
                MNO
              </Box>
            </Grid>
            <Grid item xs={12} sm={2.4}>
              <Box bgcolor="primary.100" color="primary.main" p={2}>
                MNO
              </Box>
            </Grid>
            <Grid item xs={12} sm={2.4}>
              <Box bgcolor="primary.100" color="primary.main" p={2}>
                MNO
              </Box>
            </Grid>
            <Grid item xs={12} sm={2.4}>
              <Box bgcolor="primary.100" color="primary.main" p={2}>
                MNO
              </Box>
            </Grid>
            <Grid item xs={12} sm={9.6}>
              <Box bgcolor="secondary.100" color="secondary.main" p={2}>
                Full Infrastructure Mobile Virtual Network Operator | Full MNVO
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default MnveInfo;
