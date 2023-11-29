import { Fragment, useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import SectionHeading from "component/sectionHeading";
import React from "react";
import ServiceImage1 from "assets/img/dynamic/items/mobile-virtual-network.png";
import ServiceImage2 from "assets/img/dynamic/items/experience-cloud.png";
import ServiceImage3 from "assets/img/dynamic/items/internet-of-things.png";
import Service1Image2 from "assets/img/dynamic/items/mobile-virtual-network-2.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "react-router-dom";

const HomeServices = () => {
  const [activeService, setActiveService] = useState("1");
  const list = [
    {
      id: "1",
      title: "Mobile Virtual Network | MNVO & MNVE",
      desc: "High reliability of carrier-grade equipment provides full redundancy, guaranteeing 99.999% uptime.",
      image: ServiceImage1,
      expandContent: {
        title: "Mobile Virtual Network | MNVO & MNVE",
        desc: "Hamilton Telecom is a Ugandian company that offers a range of telecommunication services, including mobile virtual network services (MVNE/MVNO) to other companies. As an MVNE, Hamilton Telecom provides the underlying technology and infrastructure required for MVNOs to offer their services to customers. This includes everything from SIM card provisioning and billing to customer service and technical support.",
        link: "",
        image: Service1Image2,
      },
    },
    {
      id: "2",
      title: "Experience cloud",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: ServiceImage2,
      expandContent: {
        title: "Experience cloud",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        link: "",
        image: Service1Image2,
      },
    },
    {
      id: "3",
      title: "Internet of Thing",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: ServiceImage3,
      expandContent: {
        title: "Internet of Thing",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        link: "",
        image: Service1Image2,
      },
    },
  ];
  return (
    <section>
      <Box py={5}>
        <Container maxWidth="xl">
          <Box
            display="flex"
            alignItems={{ sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <SectionHeading
              subtitle="How we Help you"
              title="Our Services"
              subtitleEndIcon
            />
          </Box>
        </Container>

        <Box className="home-services" pt={3}>
          {list?.map(({ id, title, desc, image }, i) => (
            <Box
              key={i}
              sx={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              color="white.main"
              className={`${activeService === id ? "active" : ""} item`}
              onMouseEnter={() => setActiveService(id)}
            >
              <Box className="item-content-wrapper">
                <Box maxWidth={{ md: activeService === id ? "70%" : "100%" }}>
                  <Typography variant="h6">{title}</Typography>
                  <Typography
                    variant="body2"
                    className="desc"
                    mt={2}
                    fontWeight={400}
                  >
                    {desc}
                  </Typography>
                </Box>
                <Box>
                  <Button
                    variant="outlined"
                    color="inherit"
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      minWidth: "unset",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 0,
                    }}
                    className="button"
                  >
                    <ArrowDownwardIcon fontSize="medium" />
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        <Container maxWidth="xl">
          <Box color="dark.secondary">
            <Grid container justifyContent="center">
              {list?.map(({ id, expandContent }, i) => (
                <Fragment key={i}>
                  {activeService === id ? (
                    <>
                      <Grid item xs={12} md={9}>
                        <Box pt={5}>
                          <Typography variant="h6">
                            {expandContent?.title}
                          </Typography>
                          <Typography variant="body1" my={3}>
                            {expandContent?.desc}
                          </Typography>
                          <Link to={expandContent?.link}>
                            <Button
                              variant="outlined"
                              endIcon={<ArrowOutwardIcon />}
                              sx={{
                                borderRadius: 30,
                                color: ({ palette }) =>
                                  palette?.dark?.secondary,
                              }}
                            >
                              Book A Demo Call{" "}
                            </Button>
                          </Link>
                        </Box>
                      </Grid>
                      <Grid item xs={6} md={3}>
                        <Box>
                          <img
                            src={expandContent?.image}
                            alt={expandContent?.title}
                          />
                        </Box>
                      </Grid>
                    </>
                  ) : (
                    <></>
                  )}
                </Fragment>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default HomeServices;
