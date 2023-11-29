import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import DefaultImage from "assets/img/static/bg/cloud.png";
import Title from "component/title";
import Navbar from "parts/navbar";
import Footer from "parts/footer";

const TermsAndConditions = () => {
  const { palette } = useTheme();
  return (
    <>
      <Navbar />
      <main>
        <section>
          <Container maxWidth="xl">
            <Box
              sx={{
                background: ({ palette }) =>
                  `linear-gradient(0deg,  ${palette?.primary?.[800]}, ${palette?.primary?.[800]}), url(${DefaultImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              pt={20}
              px={5}
              pb={5}
              color="white.main"
            >
              <Title title="Terms & Condition" />
            </Box>
          </Container>
        </section>
        <section>
          <Container>
            <Box py={5} color="black.main">
              <Typography>
                Lorem ipsum dolor sit amet consectetur. Ultrices sed laoreet
                facilisis amet. Diam posuere consectetur velit nec augue amet
                dictum sed. Hendrerit diam at orci facilisis tincidunt lobortis.
                Mauris dolor quisque tincidunt turpis in a. Aliquam diam in enim
                vitae eros ac elementum vitae vestibulum. Sit at scelerisque in
                sem nec habitasse. Eu nullam augue proin blandit. Suspendisse
                dignissim id diam sollicitudin ultricies tortor non.
              </Typography>

              <Typography mt={2}>
                Amet dictumst enim volutpat elit. Urna volutpat id adipiscing
                quis volutpat at pellentesque. Mauris etiam potenti nec duis.
                Enim eu porttitor et ut quam id metus. Tristique congue dapibus
                praesent consectetur. Elit rutrum massa sit tellus lacus ipsum.
                Aliquam id cursus pharetra enim velit. Et non ridiculus dapibus
                nam molestie amet. Ut est elementum tempus porta gravida sed
                praesent dignissim quisque. Sit ac egestas donec adipiscing
                vitae. In vitae pretium amet tellus. Nibh donec tellus tortor
                convallis eget nisi vitae sed. Et lorem purus velit fringilla
                nibh. Tempus commodo fermentum amet elit. Amet risus eros
                adipiscing amet et augue. Vel nec ullamcorper scelerisque
                tellus. A volutpat proin nec egestas morbi non nullam.
              </Typography>
              <Typography mt={2}>
                Felis viverra quis in laoreet eget morbi nulla risus cursus.
                Accumsan neque pharetra ut aliquet. Euismod nisl pretium augue
                at. Porta mauris mattis euismod consequat enim proin ac.
                Faucibus rutrum diam egestas eget. Auctor leo cursus interdum
                odio. Nulla morbi commodo congue aliquam facilisis diam at nibh.
                Leo at posuere consequat sit fringilla. Id ultricies scelerisque
                tempor odio sed malesuada vel. Urna leo eu arcu ac. Consequat
                pulvinar sed porta nibh turpis. Tellus aenean nunc ipsum turpis
                tortor in. Sit sit id in habitant nam quis id. Tristique quis
                metus a sed libero sed.
              </Typography>
              <Typography mt={2}>
                Ultrices ornare mauris leo arcu tellus feugiat. Lorem volutpat
                nisl viverra adipiscing. Et lorem venenatis etiam vivamus. Et
                rhoncus amet tempus nec enim. Amet facilisis tincidunt egestas
                maecenas vitae viverra lacus netus aenean. Volutpat molestie
                arcu ornare neque.
              </Typography>
            </Box>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
