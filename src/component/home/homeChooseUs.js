import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "react-router-dom";
import ChooseCard from "component/cards/chooseCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const HomeChooseUs = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <section>
      <Container maxWidth="xl">
        <Box py={4}>
          {/* <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(0,0,0, .2)",
              width: "80%",
              mx: "auto",
            }}
          >
            <Typography variant="overline">Why choose us</Typography>
            <Box component="span" fontSize="14px">
              <Link to={"#"}>Learn more about us</Link>
              &nbsp; &nbsp;
              <ArrowOutwardIcon fontSize="18px" />
            </Box>
          </Box> */}
          <Grid container style={{ display: 'flex', justifyContent: 'space-evenly', backgroundColor: '#00877A' }} py={3}>
            {/* {matches && <Grid item xs={12} md={2.5}></Grid>} */}
            <Grid item xs={12} sm={4} md={2.5}>
              <ChooseCard
                theme="primary"
                bgPic="1"
                title="Business readiness"
                desc="We have invested greatly to build a platform our customers can leverage on to launch their own mobile services and efficiently onboard subscribers with no capital investment."
              />
            </Grid>
            <Grid item xs={12} sm={4} md={2.5}>
              <ChooseCard
                theme="secondary"
                bgPic="2"
                title={
                  <>
                    Innovative and <br />
                    passionate
                  </>
                }
                desc="We always come up with customized solutions to enrich your revenue to greater heights."
              />
            </Grid>
            <Grid item xs={12} sm={4} md={2.5}>
              <ChooseCard
                theme="primary"
                bgPic="3"
                title={
                  <>
                    Experienced <br />
                    team
                  </>
                }
                desc="We have a supreme team who works rigorously to grow businesses beyond client’s expectations."
              />
            </Grid>
            {/* {matches && <Grid item xs={12} md={2.5}></Grid>} */}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default HomeChooseUs;
