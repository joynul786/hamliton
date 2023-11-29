import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import React from "react";
import TransformImage from "assets/img/static/bg/experience-the-cloud-transform.png";
import Title from "component/title";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import StandardButton from "component/buttons/standardButton";
import { ReactComponent as WrappedIcon } from "assets/img/static/icon/contact-wrapped-icon.svg";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "react-router-dom";
import BusinessImage from "assets/img/static/bg/experience-the-cloud-business.png";
import DownloadCloud from "assets/img/static/icon/download-cloud.png";

const ExperienceTheCloudInfo = () => {
  const list = [
    {
      label:
        "<strong>Comprehensive Solutions:</strong> Hamilton Telecom's Experience Cloud service provides businesses with a comprehensive set of solutions for managing customer data, real-time insights, and omni-channel engagement. This enables businesses to streamline their customer engagement efforts and optimize customer experiences.",
    },
    {
      label:
        "<strong>Scalability:</strong> Experience Cloud is designed to be scalable, meaning that businesses can easily expand their customer engagement capabilities as their needs grow. This ensures that businesses can maintain a high level of customer engagement and satisfaction, regardless of their size or industry.",
    },
    {
      label:
        "<strong>Expert Support:</strong> Hamilton Telecom's experienced support team is available 24/7 to provide technical assistance and guidance to businesses using the Experience Cloud service. This ensures that businesses can quickly resolve any issues that may arise, and continue to provide optimal customer experiences.",
    },
  ];

  return (
    <section>
      <Box py={10} color="white.main">
        <Container maxWidth="xl">
          <Box bgcolor="primary.main" px={{ xs: 3, lg: 8 }}>
            <Grid container columnSpacing={8}>
              <Grid item xs={12} md={4}>
                <Box
                  bgcolor="secondary.main"
                  height="100%"
                  sx={{ transform: { lg: "scale(1.15)" } }}
                >
                  <img
                    src={TransformImage}
                    alt="Transform your CX with Hamilton Telecom"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                      objectPosition: "bottom",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Box pt={5} pb={3}>
                  <Title
                    title="Transform your CX with Hamilton Telecom"
                    fontSize={30}
                    fontWeight={600}
                  />
                  <Typography variant="body2" mt={3}>
                    Hamilton Telecom's Experience Cloud service provides
                    businesses with a centralized platform for managing customer
                    data, real-time insights, and omni-channel engagement
                    capabilities. Choosing Hamilton for Experience Cloud can
                    improve customer engagement, loyalty, and retention,
                    ultimately driving business growth and success.
                  </Typography>
                  <List sx={{ mt: 1, py: 0, pl: { md: 5 } }}>
                    {list?.map(({ label }, i) => (
                      <ListItem
                        key={i}
                        sx={{
                          alignItems: "flex-start",
                          pl: 0,
                        }}
                      >
                        <ListItemIcon
                          sx={{ pt: 1, minWidth: { xs: "36px", md: "56px" } }}
                        >
                          <CheckCircleOutlineIcon sx={{ color: "#fff" }} />
                        </ListItemIcon>
                        <Box
                          fontSize={14}
                          fontWeight={300}
                          dangerouslySetInnerHTML={{ __html: label }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box color="black.main" py={5}>
        <Container maxWidth="xl">
          <Title
            title="How Experience Cloud Fits Your Business"
            fontSize={36}
          />
          <Grid container>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" mt={3} mb={2}>
                Hamilton's Experience Cloud is a software platform that helps
                businesses to create and deliver personalized customer
                experiences across multiple channels, including web, mobile,
                social media, and email. The platform uses data analytics and
                artificial intelligence to gather insights about customer
                behavior, preferences, and needs, and uses this information to
                deliver targeted and relevant messages to customers.
              </Typography>
              <StandardButton
                buttonText="Book A Call"
                link="#"
                color="inherit"
                className="bg-dark-secondary fc-white"
              />

              <Box pl={{ xs: 5, md: 10 }} py={5}>
                <Box
                  bgcolor="grey.light"
                  p={{ xs: 2, md: 5 }}
                  position="relative"
                >
                  <Typography variant="body1" fontWeight={400} lineHeight={2}>
                    Using Hamilton's Experience Cloud, businesses can improve
                    customer engagement, increase customer loyalty, and drive
                    revenue growth. The platform also provides tools for
                    measuring the effectiveness of marketing campaigns and
                    optimizing them for better performance.
                  </Typography>
                  <Typography
                    variant="body1"
                    fontWeight={400}
                    lineHeight={2}
                    mt={3}
                    mb={5}
                  >
                    Overall, Hamilton's Experience Cloud can be a valuable asset
                    for businesses that want to enhance their customer
                    experience and improve their marketing efforts.
                  </Typography>

                  <Box position="absolute" bottom={-40} left={-40}>
                    <Box pt={10} color="dark.main">
                      <Box
                        width={110}
                        height={110}
                        borderRadius="50%"
                        position="relative"
                      >
                        <Link to={""}>
                          <WrappedIcon width={110} />
                          <Box
                            component="span"
                            position="absolute"
                            top={0}
                            left={0}
                            width="100%"
                            height="100%"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <ArrowOutwardIcon fontSize="small" />
                          </Box>
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{ pr: 3 }}>
              <Box
                height="100%"
                bgcolor="secondary.main"
                display="flex"
                alignItems="flex-end"
                position="relative"
                minHeight={400}
                sx={{
                  background: ({ palette }) =>
                    `url(${DownloadCloud}), ${palette?.secondary?.main}`,
                  backgroundRepeat: "repeat",
                  backgroundSize: "85%",
                  backgroundPosition: "center",
                }}
              >
                <Box
                  position="absolute"
                  bottom={0}
                  width="100%"
                  height="100%"
                  left="-12%"
                >
                  <img
                    src={BusinessImage}
                    alt="How Experience Cloud Fits Your Business"
                    style={{
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "bottom",
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

export default ExperienceTheCloudInfo;
