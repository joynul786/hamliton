import { Typography } from "@mui/material";
import React from "react";

const Title = ({ title, variant, color, fontSize, fontWeight }) => {
  return (
    <Typography
      variant={variant || "h2"}
      fontWeight={fontWeight || 400}
      fontSize={{ xs: 24, sm: fontSize || 36 }}
      color={color || "inherit"}
      dangerouslySetInnerHTML={{ __html: title }}
    />
  );
};

export default Title;
