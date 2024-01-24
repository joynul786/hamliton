import { Box, Button, Container, Grid, Typography } from "@mui/material";
import People8Pic from "assets/img/static/bg/people8.png";
import { useState } from "react";
const CallCenter = () => {
  const [learnMore, setLearnMore] = useState(false);
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container spacing={3} bgcolor={"#1F3432"} py={3}>
          <Grid item xs={12} md={6} className="center">
            <Box className="resImg">
              <img src={People8Pic} alt="people" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" fontWeight={800} color="#fff">
              Call Center
              <br />
              Services
            </Typography>
            <Typography color="#fff" mb={learnMore?0:3}>
              Hamilton Call Centre offers a state-of-the art facility where our
              clients can reach and interact with their customers on an
              omnichannel system. We offer outbound and inbound outsourced call
              centre solutions enabling channels like voice, SMS, and web-chat.
              Our technology will provide you a secure and efficient system that
              will help maximize your efficiency and meet your goals.
            </Typography>
            {learnMore && (
              <Box mb={4} color="#fff">
                <Typography>
                  Multi-Channel Support: supports voice, email, chat, and SMS
                  channels, ensuring that your customers can reach you through
                  their preferred communication method.{" "}
                </Typography>
                <Typography>
                  Scalability: Accommodates your evolving business needs,
                  providing flexibility during peak times or for future growth.
                </Typography>
                <Typography>
                  Customized Call Routing: Ensures calls are directed to the
                  most appropriate agents based on customer needs, issue
                  severity, and agent skills.
                </Typography>
                <Typography>
                  IVR System: streamline call flows, reduce wait times, and
                  provide self-service options for customers.
                </Typography>
                <Typography>
                  Performance Analytics: Advanced analytics, real-time
                  monitoring, and reporting tools to optimize operations and
                  improve service quality
                </Typography>
              </Box>
            )}
            <Button
              variant="outlined"
              sx={{ borderRadius: 7 }}
              color="white"
              onClick={() => setLearnMore((k) => !k)}
            >
              Learn {learnMore ? "Less" : "More"}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CallCenter;
