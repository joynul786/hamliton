import { Container, Typography, Box } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  return (
    <Box my={4}>
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          color="#000"
          fontWeight="bold"
          textAlign="center"
          mb={3}
        >
          Frequently . Asked . Questions
        </Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              <Typography variant="caption " mr={3}>
                01
              </Typography>
              What is the difference between an MVNE and an MVNO ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <b>MVNE’s </b>are mobile virtual network enablers who provide
              infrastructure and back end services for MVNOs
            </Typography>
            <Typography>
              <b>MVNO’s </b>are mobile virtual network operators who do not own
              or operate their networks
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              <Typography variant="caption " mr={3}>
                02
              </Typography>
              What qualifies me to become an MVNO ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A client base or community group above 50,000 individuals.
            </Typography>
            <Typography>
              Not less than three years of business existence and working
              experience.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              <Typography variant="caption " mr={3}>
                03
              </Typography>
              What makes an MVNO successful ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>The ability to be agile and adaptable</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              <Typography variant="caption " mr={3}>
                04
              </Typography>
              What is the procedure and how long does it take to become an MVNO?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Filling out the MVNO requirement questionnaire,providing valid KYC
              documents and proof of experience and finally signing of legal
              binding documents.
            </Typography>
            <Typography>
              Becoming an MVNO can be completed within a minimum period of three
              months.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              <Typography variant="caption " mr={3}>
                05
              </Typography>
              How much capital investment do i need to become an MVNO ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Becoming an MVNO on the Hamilton MVNE platform requires zero
              capital investment . Contact us
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};

export default Faq;
