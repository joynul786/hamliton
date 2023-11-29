import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import Image1 from "assets/img/static/bg/it-ict-6.png";
import Image2 from "assets/img/static/bg/it-ict-7.png";
import Image3 from "assets/img/static/bg/it-ict-8.png";
import Image4 from "assets/img/static/bg/it-ict-9.png";
import Title from "component/title";

const OssDetails = () => {
  const list = [
    { title: "Service Delivery", image: Image1 },
    { title: "Date Plan", image: Image2 },
    { title: "Value Added Services & Content Delivery", image: Image3 },
    { title: "Service Fulfillment", image: Image4 },
  ];

  return (
    <section>
      <Box color="black.main" py={5}>
        <Container>
          <Title
            title="Details — Operations Support System (OSS)"
            fontSize={36}
          />

          <Box py={3}>
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

export default OssDetails;
