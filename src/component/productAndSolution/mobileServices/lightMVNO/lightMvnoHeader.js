import { Remove } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import SectionHeading from "component/sectionHeading";
import React from "react";
import HeaderImage from "assets/img/static/bg/light-mvno-header.png";
import { ReactComponent as ServiceIcon } from "assets/img/static/icon/service-management.svg";
import { ReactComponent as SalesIcon } from "assets/img/static/icon/sales.svg";
import { ReactComponent as CustomerIcon } from "assets/img/static/icon/customer.svg";
import { ReactComponent as CollectionIcon } from "assets/img/static/icon/collection.svg";

const LightMvnoHeader = () => {
  const list = [
    {
      Icon: ServiceIcon,
      title: "Delivery, Service Management & SIM order fulfillment",
      bottom: "40%",
      transform: { md: "translateX(-50%)" },
    },
    {
      Icon: SalesIcon,
      title: "Sales & Marketing",
      desc: "Including your brand and go-to-market strategy",
      bottom: "2%",
      transform: { md: "translateX(-30%)" },
    },
    {
      Icon: CustomerIcon,
      title: "Customer Experience",
      top: "25%",
      right: 0,
    },
    {
      Icon: CollectionIcon,
      title: "Brand and Collections",
      bottom: "25%",
      right: 0,
    },
  ];
  return (
    <section>
      <Box py={5} color="black.main">
        <Container>
          <SectionHeading
            title="Mobile Virtual Network Operator <br />- Light/Thin MVNO"
            titleFontSize={54}
          />
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box pt={3} fontWeight={400}>
                <Typography variant="body1">
                  Hamilton's light/thin MVNO solution is a highly scalable
                  multi-tenant service delivery platform that gives MVNOs the
                  ability launch new offerings either in the cloud or
                  on-premise. Hamilton's combines next-generation cloud
                  technology with traditional telecom environments to enable you
                  to create exciting new opportunities.
                </Typography>
                <Typography variant="body1" mt={3}>
                  The main advantage of a light/thin MVNO is that, unlike a
                  Full/Thick MVNO, you do NOT need to invest in expensive core
                  network components. The money you save can then be used for
                  things like marketing, outreach, sales, etc.
                </Typography>
                <Typography variant="body1" mt={3}>
                  Hamilton's enables you to manage your own mobile brand:
                </Typography>
                <ul style={{ marginTop: 0 }}>
                  <li>Customer experience</li>
                  <li>
                    Sales and marketing (including your brand and go-to-market
                    strategy)
                  </li>
                  <li>
                    Delivery, service management, and SIM order fulfillment
                  </li>
                  <li>Billing and collections</li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Box display="flex" pt={5}>
                      <Remove fontSize="medium" />
                      <Typography variant="body1">
                        Hamilton's enables you to manage your own mobile brand
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Box paddingRight="20%" position="relative">
                      <Box
                        bgcolor="secondary.main"
                        height="100%"
                        minHeight="450px"
                        position="relative"
                      >
                        <Box
                          position="absolute"
                          bottom={0}
                          width="100%"
                          height="115%"
                        >
                          <img
                            src={HeaderImage}
                            alt="MVNO"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                              objectPosition: "bottom",
                            }}
                          />
                        </Box>
                      </Box>

                      {list?.map(
                        (
                          {
                            title,
                            desc,
                            Icon,
                            top,
                            left,
                            right,
                            bottom,
                            transform,
                          },
                          i
                        ) => (
                          <Box
                            key={i}
                            bgcolor="white.main"
                            color="black.main"
                            display="flex"
                            alignItems="center"
                            className="shadow"
                            p={2}
                            position="absolute"
                            top={top ?? "unset"}
                            bottom={bottom ?? "unset"}
                            left={left ?? "unset"}
                            right={right ?? "unset"}
                            sx={{
                              transform: transform ?? "none",
                            }}
                            maxWidth={350}
                          >
                            <Box width={24}>
                              <Icon color="inherit" />
                            </Box>
                            <Box pl={1}>
                              <Typography variant="body1">{title}</Typography>
                              {desc ? (
                                <Typography variant="body2" color="grey.600">
                                  {desc}
                                </Typography>
                              ) : (
                                <></>
                              )}
                            </Box>
                          </Box>
                        )
                      )}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default LightMvnoHeader;
