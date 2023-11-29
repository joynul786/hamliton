import { Box, Typography } from "@mui/material";
import React from "react";
import DefaultImage from "assets/img/static/bg/cloud.png";
import StandardButton from "component/buttons/standardButton";

const BlogCard = ({ title, date, image, link, overlayColor }) => {
  return (
    <Box
      sx={{
        background: ({ palette }) =>
          `linear-gradient(0deg,  ${overlayColor || palette?.black?.[800]}, ${
            overlayColor || palette?.black?.[800]
          }), url(${image || DefaultImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      pt={20}
      px={5}
      pb={5}
      color="white.main"
      display="flex"
      justifyContent="space-between"
      alignItems={{
        md: "flex-end",
      }}
      flexDirection={{
        xs: "column",
        md: "row",
      }}
    >
      <Box>
        {title ? (
          <Typography
            variant="body1"
            fontWeight={500}
            maxWidth={300}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        ) : (
          <></>
        )}
        {date ? (
          <Typography variant="body2" fontWeight={400} mt={1}>
            {date}
          </Typography>
        ) : (
          <></>
        )}
      </Box>
      {link ? (
        <Box mt={{ xs: 5, md: 0 }}>
          <StandardButton
            link={link}
            buttonText="Read More"
            variant="outlined"
            color="inherit"
            sx={{ borderRadius: 50 }}
          />
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default BlogCard;
