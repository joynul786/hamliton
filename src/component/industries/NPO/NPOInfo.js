import { Box, Container, Grid, Typography } from "@mui/material";
import Title from "component/title";
import React from "react";
import Image1 from "assets/img/static/bg/npo-1.png";
import Image2 from "assets/img/static/bg/npo-2.png";
import Image3 from "assets/img/static/bg/npo-3.png";
import Image4 from "assets/img/static/bg/npo-4.png";
import Image5 from "assets/img/static/bg/npo-5.png";

const NPOInfo = () => {
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
            <Box pb={3}>
              <Title title="The Rise of Digital Giving" fontSize={36} />
            </Box>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box>
                  <img src={Image1} alt="The Rise of Digital Giving" />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box fontWeight={400}>
                  <Typography variant="body1">
                    In the last few decades, the non-profit sector has
                    experienced a significant shift due to the emergence of
                    digital giving trends such as crowdfunding, livestream
                    funding events, email, SMS, and social media outreach
                    campaigns. These trends have presented NPOs, NGOs, and other
                    charitable organizations with innovative channels for
                    fundraising, community building, and raising awareness.
                    Consequently, many organizations have started to rethink
                    their fundraising and outreach approaches, leveraging these
                    technologies to minimize overhead costs. Specifically, they
                    have emphasized:
                  </Typography>

                  <ul>
                    <li>
                      Creating durable donor relationships by fostering loyalty
                      and retention.
                    </li>
                    <li>Diversifying their fundraising channels.</li>
                    <li>
                      Leveraging data to identify co-branding opportunities.
                    </li>
                    <li>Improving outreach via digital channels.</li>
                  </ul>
                </Box>
              </Grid>
            </Grid>

            <Box pt={3}>
              <Grid container spacing={3}>
                {list?.map(({ image }, i) => (
                  <Grid item sm={6} md={3} key={i}>
                    <img
                      src={image}
                      alt="IT & ICT"
                      style={{ height: 220, objectFit: "cover" }}
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

export default NPOInfo;
