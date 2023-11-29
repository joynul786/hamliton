import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Title from "component/title";
import BackButton from "component/buttons/backButton";

const CustomerStoriesDetailsHeader = ({ title, image, desc }) => {
  return (
    <section>
      <Box
        color="white.main"
        sx={{
          background: ({ palette }) =>
            `linear-gradient(0deg,  ${palette?.primary?.[800]}, ${palette?.primary?.[800]} ), url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container maxWidth="xl">
          <Box py={10}>
            <BackButton color="inherit" />

            <Container>
              <Box pt={10}>
                <Title title={title} />
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default CustomerStoriesDetailsHeader;
