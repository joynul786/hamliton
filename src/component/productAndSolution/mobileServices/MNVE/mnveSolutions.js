import { Box, Container, Grid, Typography } from "@mui/material";
import StandardButton from "component/buttons/standardButton";
import Title from "component/title";
import React, { useState } from "react";

const MnveSolutions = () => {
  const [activeTab, setActiveTab] = useState(1);
  const list = [
    {
      label: "Reseller Administration",
    },
    {
      label: "Value Added Services",
    },
    {
      label: "Wholesale Service Catalogue",
    },
    {
      label: "Wholesale Rating & Charging",
    },
    {
      label: "Wholesale Billing",
    },
    {
      label: "Wholesale Invoicing",
    },
  ];

  const tabs = [
    {
      id: 1,
      title: "Telecom Operator",
    },
    {
      id: 2,
      title: "New company",
    },
  ];

  return (
    <section>
      <Box py={8} color="black.main">
        <Container>
          <Box textAlign="center">
            <Title title="Our MVNE Solution is Proven Technology for MVNOs and IoT" />
            <Box
              pt={3}
              pb={5}
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
                    border: ({ palette }) =>
                      `1px solid ${palette?.black?.main}`,
                    borderRadius: "30px",
                  }}
                >
                  <Typography
                    variant="body1"
                    dangerouslySetInnerHTML={{ __html: label }}
                  />
                </Box>
              ))}
            </Box>
          </Box>

          {/* Tabs */}
          <Box>
            {tabs?.map(({ id, title }, i) => (
              <StandardButton
                key={i}
                variant={activeTab === id ? "contained" : "text"}
                buttonText={title}
                color={activeTab === id ? "secondary" : "inherit"}
                sx={{ borderRadius: 0, mr: 2 }}
                onClick={() => setActiveTab(id)}
              />
            ))}

            <Box pt={5}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Box bgcolor="grey.light" width="100%" height="100%"></Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography variant="body1">
                    Hamilton's full/thick MVNO solution is suitable for
                    companies operating in any market. By acting as the link
                    between organizations and telecom operators, Hamilton
                    enables businesses of all shapes and sizes to launch their
                    own mobile brands.
                  </Typography>
                  <Typography variant="body1" mt={1}>
                    Let’s say you want to start your own mobile brand, but you
                    also want full control over your service. You want to have
                    your own number ranges to build bespoke offerings, manage
                    subscribers the way you like offer self service, and handle
                    tariffs and bundling (data, voice and SMS) on your own
                    terms.
                  </Typography>
                  <Typography variant="body1" mt={1}>
                    By launching a full MVNO with Hamilton, you’ll be able to
                    reduce your dependency on Mobile Operators. Since all you’ll
                    be using are their radio networks, you’ll have the freedom
                    to build and manage your brand however you like. Ready to
                    Get Started?
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default MnveSolutions;
