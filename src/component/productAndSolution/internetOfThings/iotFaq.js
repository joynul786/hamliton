import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Title from "component/title";
import React from "react";
import { ReactComponent as StartingQuote } from "assets/img/static/icon/starting-single-quote.svg";
import { ReactComponent as EndingQuote } from "assets/img/static/icon/ending-single-quote.svg";
import FaqImage from "assets/img/static/bg/faq-bg-1.png";
import FaqShape1 from "assets/img/static/shape/faq-curve-1.png";
import FaqShape2 from "assets/img/static/shape/faq-curve-2.png";
import Faq from "parts/faq";

const IotFaq = () => {
  return (
    <section>
      <Box color="black.main" py={5}>
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
                bgcolor="primary.main"
                color="white.main"
                position="relative"
                zIndex={1}
                overflow="hidden"
              >
                <Box display="flex" alignItems="flex-start" p={3}>
                  <Box>
                    <Typography variant="body1">
                      Explore & Learn More About&nbsp;
                      <Box component="span">
                        <StartingQuote width={10} className="fill-secondary" />
                        <StartingQuote width={10} className="fill-secondary" />
                      </Box>
                    </Typography>
                    <Typography variant="h4" fontWeight={700}>
                      Internet of Things
                    </Typography>
                    <Typography variant="body1" textAlign="end">
                      <Box component="span">
                        <EndingQuote width={10} className="fill-secondary" />
                        <EndingQuote width={10} className="fill-secondary" />
                      </Box>
                      &nbsp;How it helps your business
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{ opacity: 0.5 }}
                      fontSize={100}
                      fontWeight={500}
                      lineHeight={1}
                      marginTop={-2}
                      marginLeft={1}
                    >
                      &
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <img src={FaqImage} alt="FAQ" />
                </Box>

                <Box position="absolute" top={0} zIndex={-1}>
                  <img src={FaqShape1} alt="FAQ" />
                </Box>
                <Box position="absolute" bottom={0} zIndex={-1}>
                  <img src={FaqShape2} alt="FAQ" />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default IotFaq;
