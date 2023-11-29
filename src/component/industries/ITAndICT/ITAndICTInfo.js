import { Box, Container, Grid, Typography } from "@mui/material";
import Title from "component/title";
import React from "react";
import Image1 from "assets/img/static/bg/it-ict-1.png";
import Image2 from "assets/img/static/bg/it-ict-2.png";
import Image3 from "assets/img/static/bg/it-ict-3.png";
import Image4 from "assets/img/static/bg/it-ict-4.png";
import Image5 from "assets/img/static/bg/it-ict-5.png";

const ITAndICTInfo = () => {
  const list = [
    { image: Image2 },
    { image: Image3 },
    { image: Image4 },
    { image: Image5 },
  ];
  return (
    <section>
      <Box pt={10} pb={5} color="black.main">
        <Container maxWidth="xl">
          <Box>
            <Grid container>
              <Grid item sm={12} lg={8}>
                <Title
                  title="When It Comes to ICT, the Stakes Are High"
                  fontSize={36}
                />
                <Typography variant="body1" mt={2}>
                  Every organization seeks to optimize productivity, but a
                  single emphhhloyee connecting to a rogue hotspot or clicking a
                  malicious link can expose the entire company to significant
                  risks. A poorly implemented mobility strategy can lead to
                  severe financial and reputational damage, including
                  devastating cyber-attacks, uncontrolled mobility expenses,
                  hidden costs, and more. The operational consequences can
                  impede the company's ability to provide services, but the
                  reputational costs could be far more catastrophic, resulting
                  in lost business, anxious investors, lawsuits, regulatory
                  scrutiny, and other consequences.
                </Typography>
                <Box py={3}>
                  <img
                    src={Image1}
                    alt="IT & ICT"
                    style={{ height: 400, objectFit: "cover" }}
                  />
                </Box>
              </Grid>
            </Grid>

            <Box>
              <Grid container spacing={3}>
                {list?.map(({ image }, i) => (
                  <Grid item xs={6} md={3} key={i}>
                    <img
                      src={image}
                      alt="IT & ICT"
                      style={{ height: 150, objectFit: "cover" }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default ITAndICTInfo;
