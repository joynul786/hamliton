import { Box, Container, Grid, Typography } from "@mui/material";
import Title from "component/title";
import React from "react";
import FaqImage from "assets/img/static/bg/faq-bg-2.png";
import FaqShape1 from "assets/img/static/shape/faq-curve-3.png";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import Faq from "parts/faq";

const MobileServicesFaq = () => {
  return (
    <section>
      <Box color="black.main" py={10}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Title title="FAQ" fontWeight={800} />
              <Typography variant="body1" my={2}>
                Thank you for reading our FAQ section. If you still have any
                questions or concerns, please don't hesitate to contact us. Our
                support team is always ready to assist you and provide you with
                the information you need. You can reach us through our website's
                contact form, email, or phone. We look forward to hearing from
                you and helping you with any questions you may have.
              </Typography>

              <Faq />
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                bgcolor="secondary.main"
                color="white.main"
                position="relative"
                zIndex={1}
                overflow="hidden"
                height="100%"
                display="flex"
                alignItems="flex-end"
              >
                <Box p={3} position="absolute" top="20%">
                  <Box position="relative">
                    <Typography variant="h4" fontWeight={700}>
                      Experience <br />
                      the fastest <br />
                      cloud
                      <Box
                        component="span"
                        color="primary.main"
                        position="relative"
                        bottom={-25}
                        left={-10}
                        zIndex={-1}
                      >
                        <AutoAwesomeIcon fontSize="large" />
                      </Box>
                    </Typography>
                    <Box
                      color="primary.main"
                      position="absolute"
                      top={-15}
                      left={-20}
                      zIndex={-1}
                    >
                      <AutoAwesomeIcon fontSize="large" />
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <img src={FaqImage} alt="FAQ" />
                </Box>

                <Box
                  position="absolute"
                  width="100%"
                  height="100%"
                  bottom="-10px"
                  right={0}
                  zIndex={-1}
                  display="flex"
                  alignItems="flex-end"
                  justifyContent="flex-end"
                >
                  <img
                    src={FaqShape1}
                    alt="FAQ"
                    style={{
                      height: "90%",
                      width: "70%",
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

export default MobileServicesFaq;
