import { Box, Typography } from "@mui/material";
import React from "react";
import defaultImage from "assets/img/static/bg/bg-1.jpg";

const BgOverlayCard = ({
  overlayColor,
  cardImage,
  color,
  title,
  desc,
  minHeight,
  classes,
  ...props
}) => {
  return (
    <Box
      sx={{
        background: ({ palette }) =>
          `linear-gradient(0deg,  ${overlayColor || palette?.black?.[800]}, ${
            overlayColor || palette?.black?.[800]
          }), url(${cardImage || defaultImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
      }}
      px={3}
      py={5}
      color={color || "white.main"}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      minHeight={minHeight || 120}
      className={classes}
      {...props}
    >
      {title ? (
        <Typography
          variant="body1"
          fontWeight={700}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      ) : (
        <></>
      )}
      {desc ? (
        <Typography
          variant="body2"
          fontWeight={400}
          mt={2}
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      ) : (
        <></>
      )}
    </Box>
  );
};

export default BgOverlayCard;
