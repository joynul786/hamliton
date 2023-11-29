import { Box, Container, Grid } from "@mui/material";
import SectionHeading from "component/sectionHeading";
import React from "react";
import HeaderImage from "assets/img/static/bg/mnve-header.png";

const MnveHeader = () => {
  return (
    <section>
      <Box py={5} color="black.main">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Box pt={3} fontWeight={400}>
                <SectionHeading
                  title="Mobile Virtual Network Enabler (MVNE)"
                  titleFontSize={54}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={9}>
              <Box
                bgcolor="secondary.main"
                height="100%"
                minHeight="450px"
                position="relative"
                overflow="hidden"
              >
                <Box
                  position="absolute"
                  bottom={0}
                  right={0}
                  width="100%"
                  height="100%"
                >
                  <img
                    src={HeaderImage}
                    alt="MVNO"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "bottom right",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default MnveHeader;
