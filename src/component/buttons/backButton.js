import { Box, Button } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const BackButton = ({ color }) => {
  const navigate = useNavigate();
  return (
    <Box color={color || "black.main"}>
      <Button
        variant="outlined"
        color="inherit"
        onClick={() => navigate(-1)}
        sx={{ width: 40, height: 40, borderRadius: "50%", minWidth: "unset" }}
      >
        <ArrowBackIcon fontSize="small" />
      </Button>
    </Box>
  );
};

export default BackButton;
