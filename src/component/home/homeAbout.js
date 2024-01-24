import { Box, Container, } from "@mui/material";

const HomeAbout = () => {
  return (
    <section className="home-about">
      <Container maxWidth="xl">
        <Box py={4} position="relative">
          <div className="pattern-bg"></div>
          <div className="home-about-heading position-relative">
            <h5>KNow About US</h5>
            <h2>
              Hamilton Telecom was born out of the desire to fill the gap in the
              Ugandan Telecommunication Industry
            </h2>
            <p>
              With our cutting-edge technology solutions, we aim to
              revolutionize your business through our digital transformation. On
              this backdrop, we provide the industry with the most agile and
              comprehensive solutions which include MVNO services and customized
              business solutions.
            </p>
          </div>
        </Box>
      </Container>
    </section>
  );
};

export default HomeAbout;
