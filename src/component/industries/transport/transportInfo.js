import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Title from "component/title";
import React from "react";
import WrappedBgImage from "assets/img/static/bg/bg-13.png";
import Image1 from "assets/img/static/bg/it-ict-6.png";
import Image2 from "assets/img/static/bg/it-ict-7.png";
import Image3 from "assets/img/static/bg/it-ict-8.png";
import Image4 from "assets/img/static/bg/it-ict-9.png";
import { ArrowForward } from "@mui/icons-material";
import WrappedImageCard from "component/cards/wrappedImageCard";

const TransportInfo = () => {
  const { palette } = useTheme();
  const list = [
    { title: "Global Cellular Connectivity", image: Image1 },
    { title: "Global Wi-Fi Access", image: Image2 },
    { title: "IoT Connectivity Management", image: Image3 },
    { title: "Application-to-Person (A2P) Messaging", image: Image4 },
  ];
  return (
    <section>
      <Box color="black.main" pt={10}>
        <Container>
          {/* Wrapped content */}
          <Box pb={10}>
            <Box pb={3}>
              <Title title="Functional —Transport & Logistic" fontSize={36} />
              <Typography variant="body1">
                Hamilton's OSS can be divided into 4 functional categories:
              </Typography>
            </Box>
            <Grid container alignItems="center" spacing={5}>
              <Grid item xs={12} md={6}>
                <WrappedImageCard
                  bgColor={palette?.primary?.[600]}
                  bgImage={WrappedBgImage}
                  boxes={[
                    {
                      text: "Service Delivery",
                      top: "20%",
                      left: 0,
                    },
                    {
                      text: "Service Fulfilment",
                      bottom: 0,
                      left: 0,
                    },
                    {
                      text: "Value Added Services <br />& Content  Delivery",
                      right: 0,
                      top: 0,
                    },
                    {
                      text: "Service Assurance",
                      right: 0,
                      bottom: "20%",
                    },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <Box pt={5}>
                  <Typography variant="body1">
                    If you are planning to launch a Mobile Virtual Network
                    Enabler (MVNE), full Mobile Virtual Network Operator (MVNO),
                    light Mobile Virtual Network Operator (MVNO), Mobile Virtual
                    Network Operator Aggregator (MVNA), Internet of Things (IoT)
                    Service, Machine to Machine (M2M) services, or any other
                    network service, you will require an Operations Support
                    System (OSS) to complement your Business Support System
                    (BSS). The OSS provided within the Hamilton Mobile Service
                    Suite is designed to function as an interface for any
                    network, including mobile, fixed, OTT, broadband, and TV. It
                    is also scalable both horizontally and vertically and
                    leverages global standards, protocols, and techniques,
                    making it easy to integrate into existing environments.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box pb={10}>
            <Box pb={3}>
              <Title
                title="Details — Transport & Logistic (OSS)"
                fontSize={36}
              />
            </Box>
            <Grid container spacing={3} justifyContent="center">
              {list?.map(({ title, image }, i) => (
                <Grid item xs={6} md={3} lg={2.5} key={i}>
                  <Box
                    bgcolor={i % 2 !== 0 ? "dark.dark3" : "secondary.main"}
                    color={i % 2 !== 0 ? "text.primaryLight" : "black.main"}
                    pt={2}
                    position="relative"
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    overflow="hidden"
                  >
                    <Typography variant="body2" fontWeight={500} px={2}>
                      {title}
                    </Typography>
                    <Box pt={5} pl={2} position="left" height="100%">
                      <Button
                        variant="outlined"
                        color="inherit"
                        sx={{
                          minWidth: "unset",
                          width: 36,
                          height: 36,
                          borderRadius: "50%",
                          padding: 0,
                          position: "absolute",
                        }}
                      >
                        <ArrowForward fontSize="small" />
                      </Button>
                      <img
                        src={image}
                        alt={title}
                        style={{
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "left",
                          marginLeft: "10%",
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default TransportInfo;
