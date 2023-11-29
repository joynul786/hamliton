import { Box, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as VectorIcon } from "assets/img/static/icon/heading-vector.svg";

const SectionHeading = ({
  subtitle,
  subtitleFontWeight,
  subtitleEndIcon,
  title,
  titleColor,
  titleFontClass,
  titleFontSize,
  titleFontWeight,
}) => {
  return (
    <>
      {subtitle ? (
        <Box display="flex" alignItems="center">
          <Typography
            variant="subtitle2"
            letterSpacing={1}
            textTransform="uppercase"
            color="black.main"
            fontWeight={subtitleFontWeight || 500}
          >
            {subtitle}
          </Typography>
          {subtitleEndIcon ? (
            <Box mx={2}>
              <VectorIcon width={32} className="stroke-secondary" />
            </Box>
          ) : (
            <></>
          )}
        </Box>
      ) : (
        <></>
      )}
      {title ? (
        <Typography
          variant="h2"
          className={`section-heading-title ${
            titleFontClass || "ff-secondary"
          }`}
          color={titleColor || "black.main"}
          fontSize={{ xs: 30, sm: 42, md: titleFontSize || 36 }}
          fontWeight={titleFontWeight || 500}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default SectionHeading;
