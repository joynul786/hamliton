import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import Title from "component/title";
import React from "react";
import WrappedBgImage from "assets/img/static/bg/bg-13.png";
import WrappedImageCard from "component/cards/wrappedImageCard";

const OssFunctional = () => {
  const { palette } = useTheme();

  return (
    <section>
      <Box color="black.main" pt={10}>
        <Container>
          {/* Wrapped content */}
          <Box pb={10}>
            <Box pb={3}>
              <Title
                title="Functional — Operations Support System (OSS)"
                fontSize={36}
              />
              <Typography variant="body1">
                Hamilton's OSS can be divided into 4 functional categories:{" "}
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
                      text: "Service Fulfillment",
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
                  <Typography variant="body1" lineHeight={1.7}>
                    Whether you want to launch an
                    <a
                      href="https://www.pareteum.com/mobile-virtual-network-enabler-mvne/"
                      target="_blank"
                      className="text-underline"
                    >
                      {" "}
                      Mobile Virtual Network Enabler (MVNE)
                    </a>
                    ,{" "}
                    <a
                      href="https://www.pareteum.com/full-mobile-virtual-network-operator-mvno/"
                      target="_blank"
                      className="text-underline"
                    >
                      full Mobile Virtual Network Operator Mobile Virtual
                      Network Operator(MVNO)
                    </a>
                    ,{" "}
                    <a
                      href="https://www.pareteum.com/light-mobile-virtual-network-operator-mvno/"
                      target="_blank"
                      className="text-underline"
                    >
                      light Mobile Virtual Network Operator (MVNO)
                    </a>
                    ,{" "}
                    <a
                      href="https://www.pareteum.com/mobile-virtual-network-enabler-mvne/"
                      target="_blank"
                      className="text-underline"
                    >
                      Mobile Virtual Network Operator Aggregator (MVNA)
                    </a>
                    ,{" "}
                    <a
                      href="https://www.pareteum.com/iot-connectivity-management/"
                      target="_blank"
                      className="text-underline"
                    >
                      Internet of Things (IoT)
                    </a>{" "}
                    Service,{" "}
                    <a
                      href="https://www.pareteum.com/internet-of-things/"
                      target="_blank"
                      className="text-underline"
                    >
                      Machine 2 Machine (M2M)
                    </a>{" "}
                    services, you’ll need an OSS to work alongside your{" "}
                    <a
                      href="https://www.pareteum.com/business-support-system-bss/"
                      target="_blank"
                      className="text-underline"
                    >
                      Business Support System (BSS)
                    </a>
                    .
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default OssFunctional;
