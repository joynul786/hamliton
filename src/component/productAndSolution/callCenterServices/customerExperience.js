import { Box, Container } from "@mui/material";
import SectionHeading from "component/sectionHeading";
import React from "react";
import Image1 from "assets/img/dynamic/items/debt-collection.png";
import Image2 from "assets/img/dynamic/items/lead-generation.png";
import Testimonials from "parts/testimonials";

const CallCenterServicesCustomerExperience = () => {
  const list = [
    { label: "Debt Collection", image: Image1 },
    { label: "Lead Generation", image: Image2 },
    { label: "Customer Service", image: Image1 },
    { label: "IT Development", image: Image2 },
  ];
  return (
    <section>
      <Box pb={5}>
        <Container maxWidth="xl">
          <Box>
            <SectionHeading
              subtitle="know For Our"
              subtitleFontWeight={400}
              title="Customer Experience"
              titleFontClass="ff-primary"
              titleFontSize={30}
            />
          </Box>
          <Box>
            <Testimonials centeredSlides />
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default CallCenterServicesCustomerExperience;
