import React from "react";
import CustomerStoriesDetailsHeader from "./customerStoriesDetailsHeader";
import HeaderImage from "assets/img/static/bg/customer-stories-1.png";
import Image1 from "assets/img/static/bg/customer-stories-cloud.png";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import Title from "component/title";
import BgOverlayCard from "component/cards/bgOverlayCard";

const CustomerStoriesCloud = () => {
  const { palette } = useTheme();
  const challengesList = [
    {
      label: "Launch Life-Changing Services",
      desc: "Cayon Cloud wanted to introduce more inclusive and transparent Telecommunications services to Tunisia and Africa by enabling agile, low-cost, and innovative MVNOs.",
      color: "primary",
    },
    {
      label: "Simplify MVNO Management",
      desc: "Launching and managing an MVNO typically requires a lot of assistance from host networks (MNO). Cayon Cloud wanted a solution that would give MVNOs more autonomy.",
    },
    {
      label: "Fast Time-to-Market",
      desc: "Finally, Cayon Cloud wanted an all-in-one solution capable of facilitating rapid service delivery and top-notch customer experiences.",
      color: "secondary",
    },
  ];
  return (
    <>
      <CustomerStoriesDetailsHeader
        title="Cayon CloudMVNE, <br />MVNA & MVNO"
        image={HeaderImage}
      />

      <Box py={5} color="black.main">
        <Container>
          <Typography variant="body1">
            Cayon Cloud Communications is a Mobile Virtual Network Enabler and
            Aggregator (MVNE / MVNA) headquartered in Tunis, Tunisia. Founded in
            2016, they are the country’s fifth mobile operator and are part of
            the Tunisia-based Asel Telecom Group. As an MVNE / MVNA, Cayon Cloud
            helps African and Middle Eastern Mobile Virtual Network Operators
            (MVNO) and mobile brands launch their own offerings. More precisely,
            in Tunisia they unify existing brands and organizations to
            facilitate telecommunications services for specific Tunisian
            communities. To realize this multi-brand partnership model, they
            rely on Hamilton’s scalable MVNE solution.
          </Typography>
        </Container>
      </Box>

      <Box color="black.main">
        <Container maxWidth="xl">
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box>
                <img src={Image1} alt="A Complete MVNE Solution" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Title
                title="A Complete MVNE Solution"
                fontSize={24}
                fontWeight={700}
              />

              <Typography mt={2}>
                To help businesses launch their own mobile brands, Cayon Cloud
                needed a flexible full MVNE solution, with scalable
                architecture, that could integrate seamlessly with Tunisie
                Telecom’s network, the incumbent national operator.
              </Typography>
              <Typography mt={2}>
                In addition, Cayon Cloud required an innovative platform with
                technology sophisticated enough to enable and manage the
                technical and operational activities associated with MVNOs.
                Hamilton Experience Cloud was the perfect fit. The only
                single-source cloud communications platform that provides
                limitless scale and control for the creation and management of
                new mobile brands, it equipped Cayon Cloud with business and
                operations support systems (OSS / BSS), self-care capabilities,
                rating and CRM solutions, and core network elements with the
                required integration services.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box color="black.main" py={5}>
        <Container>
          <Box pb={3}>
            <Title
              title="What were the Challenges?"
              fontSize={30}
              fontWeight={700}
            />
          </Box>
          <Grid container spacing={3}>
            {challengesList?.map(({ label, desc, color }, i) => (
              <Grid item key={i} xs={12} md={4}>
                <BgOverlayCard
                  title={label}
                  cardImage={HeaderImage}
                  desc={desc}
                  height="100%"
                  overlayColor={
                    color === "primary"
                      ? palette?.primary?.[800]
                      : color === "secondary"
                      ? palette?.secondary?.[800]
                      : palette?.black?.[800]
                  }
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default CustomerStoriesCloud;
