import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import OfferImage from "assets/img/static/bg/iot-offer.png";
import Title from "component/title";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const IotOffer = () => {
  const list = [
    { label: "Improved efficiency and productivity" },
    { label: "Increased automation and cost savings" },
    { label: "Enhanced customer experiences and satisfaction" },
    { label: "Better decision-making with real-time data" },
    { label: "Increased safety and security measures." },
  ];
  return (
    <section>
      <Box py={5}>
        <Container maxWidth="xl">
          <Grid container spacing={5} justifyContent="center">
            <Grid item xs={12} sm={6} md={4} order={{ xs: 2, md: 1 }}>
              <Box>
                <img src={OfferImage} alt="IOT offer" />
              </Box>
            </Grid>
            <Grid item xs={12} md={8} order={{ xs: 1, md: 2 }}>
              <Box pt={5} color="black.main">
                <Title title="Our Offer" />
                <Typography variant="body1" mt={2}>
                  Hamilton Telecom offers Internet of Things (IoT) services,
                  allowing businesses to connect and manage devices across a
                  range of industries.
                </Typography>
                <List sx={{ mt: 5, pl: { md: 5 } }}>
                  {list?.map(({ label }, i) => (
                    <ListItem key={i}>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText>{label}</ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default IotOffer;
