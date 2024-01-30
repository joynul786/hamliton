import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import reactAngle from "../../assets/img/dynamicImg/Rectangle.png";

const MVNO = () => {
  const [learnMore, setLearnMore] = useState(false);

  return (
    <Box
      style={{
        backgroundImage: `url(${reactAngle})`,
        backgroundPosition: `right bottom, left top`,
        backgroundRepeat: `no-repeat, repeat`,
        backgroundSize: "cover",
      }}
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} md={6} className="callCenter">
            <Typography variant="h2" pt={2} fontWeight={800} color="#00877A">
              MVNO & MVNE
            </Typography>
            <Typography variant="h5" fontWeight={500} color="#FFB200" py={2}>
              Mobile Virtual Network Operator -MVNO
            </Typography>
            <Typography color="#000" marginBottom={6}>
              Hamilton Call Centre offers a state-of-the art facility where our
              clients can reach and interact with their customers on an
              omnichannel system. We offer outbound and inbound outsourced call
              centre solutions enabling channels like voice, SMS, and web-chat.
              Our technology will provide you a secure and efficient system that
              will help maximize your efficiency and meet your goals.
            </Typography>
            <Box style={{ display: "flex", flexWrap: "wrap" }}>
              <Button
                variant="outlined"
                sx={{ borderRadius: 7, margin: "6px" }}
                color="black"
              >
                LIGHT MVNO
              </Button>
              <Button
                variant="outlined"
                sx={{ borderRadius: 7, margin: "6px" }}
                color="black"
              >
                FULL MVNO
              </Button>
              <Button
                variant="outlined"
                sx={{ borderRadius: 7, margin: "6px" }}
                color="black"
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MVNO;
