import { Box, Container, List, ListItem, Typography } from "@mui/material";
import SectionHeading from "component/sectionHeading";
import React from "react";

const CallCenterServicesSteps = () => {
  const list = [
    {
      label: "Setup Your Campaign",
      desc: "Name your company and choose your country",
    },
    {
      label: "Get Tracking Number",
      desc: "Get a unique tracking number where you can send call",
    },
    {
      label: "Add A Target Line",
      desc: "Forward your call to buyers or anywhere you’d like them to go",
    },
    {
      label: "Launch your campaign",
      desc: "Name your company and choose your country",
    },
  ];
  return (
    <section>
      <Box py={5}>
        <Container maxWidth="xl">
          <SectionHeading
            subtitle="FOUR EASY STEP"
            subtitleFontWeight={400}
            title="How To Get Started"
            titleFontClass="ff-primary"
            titleFontSize={30}
          />
          <Box pt={5}>
            <List
              sx={{ py: 0, display: "flex" }}
              className="call-center-service-steps"
            >
              {list?.map(({ label, desc }, i) => (
                <ListItem key={i} sx={{ alignItems: "flex-start", p: 0 }}>
                  <Box>
                    <Box
                      fontSize={14}
                      className="service-step-number"
                      sx={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: ({ palette }) =>
                          i % 2 === 0
                            ? palette?.secondary?.main
                            : palette?.primary?.main,
                        color: ({ palette }) =>
                          i % 2 === 0
                            ? palette?.black?.main
                            : palette?.white?.main,
                      }}
                    >
                      {i + 1 < 10 ? `0${i + 1}` : i + 1}
                    </Box>
                    <Box className="service-step-content">
                      <Typography
                        variant="subtitle1"
                        color="dark.main"
                        mt={3}
                        mb={1}
                      >
                        {label}
                      </Typography>
                      <Typography variant="body2">{desc}</Typography>
                    </Box>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default CallCenterServicesSteps;
