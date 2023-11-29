import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const SubMenuItem = ({ label, desc, link, handleCloseTargetMobileSubmenu }) => {
  return (
    <Box color="dark.secondary" position="relative">
      <Typography
        variant="body1"
        className="ff-secondary"
        color="black.main"
        dangerouslySetInnerHTML={{ __html: label }}
      />
      <Typography variant="body2" my={1}>
        {desc}
      </Typography>
      <Link
        to={link}
        onClick={() => {
          if (handleCloseTargetMobileSubmenu) {
            handleCloseTargetMobileSubmenu();
          }
        }}
        className="fc-secondary submenu-link stretched-link"
      >
        Learn More
        <ArrowOutwardIcon fontSize="small" />
      </Link>
    </Box>
  );
};

export default SubMenuItem;
