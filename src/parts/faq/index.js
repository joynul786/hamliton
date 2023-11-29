import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";

import React from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const list = [
  {
    title: "Question | Based On The Page Topic",
    summary:
      "Lorem ipsum dolor sit amet consectetur. Ut sollicitudin mattis aliquam nibh et. Elementum arcu tellus diam enim porta sodales viverra.",
  },
  {
    title: "Question | Based On The Page Topic",
    summary:
      "Lorem ipsum dolor sit amet consectetur. Ut sollicitudin mattis aliquam nibh et. Elementum arcu tellus diam enim porta sodales viverra.",
  },
  {
    title: "Question | Based On The Page Topic",
    summary:
      "Lorem ipsum dolor sit amet consectetur. Ut sollicitudin mattis aliquam nibh et. Elementum arcu tellus diam enim porta sodales viverra.",
  },
  {
    title: "Question | Based On The Page Topic",
    summary:
      "Lorem ipsum dolor sit amet consectetur. Ut sollicitudin mattis aliquam nibh et. Elementum arcu tellus diam enim porta sodales viverra.",
  },
  {
    title: "Question | Based On The Page Topic",
    summary:
      "Lorem ipsum dolor sit amet consectetur. Ut sollicitudin mattis aliquam nibh et. Elementum arcu tellus diam enim porta sodales viverra.",
  },
];

const ExpandIcon = () => {
  return (
    <Box
      sx={{
        ".Mui-expanded & > .collapseIconWrapper": {
          display: "none",
        },
        ".expandIconWrapper": {
          display: "none",
        },
        ".Mui-expanded & > .expandIconWrapper": {
          display: "block",
        },
      }}
    >
      <Box className="expandIconWrapper">
        <CloseIcon fontSize="medium" />
      </Box>
      <Box className="collapseIconWrapper">
        <AddIcon fontSize="medium" />
      </Box>
    </Box>
  );
};

const Faq = ({ data = list }) => {
  return (
    <>
      <Box>
        {data?.length ? (
          data?.map(({ title, summary }, i) => {
            return (
              <Accordion
                key={i}
                sx={{
                  boxShadow: "none",
                  "&": {
                    borderBottom: 0,
                    "&::before": {
                      display: "none",
                    },
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandIcon />}
                  sx={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}
                >
                  <Typography fontWeight={400} variant="h6" fontSize={18}>
                    <Box component="span" mr={3}>
                      {i < 10 ? `0${i + 1}` : i + 1}
                    </Box>
                    <Box component="span">{title}</Box>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box p={3}>
                    <Typography variant="body2">{summary}</Typography>
                    <Box mt={3}>
                      <Typography variant="caption">
                        Still Have Doubt ?&nbsp;
                        <Link to={"#"} className="fc-blue">
                          Connect with us today
                        </Link>
                      </Typography>
                    </Box>
                  </Box>
                </AccordionDetails>
              </Accordion>
            );
          })
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};

export default Faq;
