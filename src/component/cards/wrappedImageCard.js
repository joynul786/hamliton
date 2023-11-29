import { Box, Typography } from "@mui/material";
import React from "react";
import CardImage from "assets/img/static/bg/bg-4.png";
import LogoImage from "assets/img/static/icon/logo-white.png";

const WrappedImageCard = ({ onlyBgImage, bgColor, bgImage, logo, boxes }) => {
  return (
    <Box position="relative">
      <Box
        width={{ xs: 280, sm: 400 }}
        height={{ xs: 280, sm: 400 }}
        borderRadius="50%"
        overflow="hidden"
        position="relative"
        margin="auto"
      >
        <Box
          width="100%"
          height="100%"
          sx={{
            backgroundImage: ({ palette }) =>
              onlyBgImage
                ? `url(${bgImage || CardImage})`
                : `linear-gradient(0deg,  ${
                    bgColor || palette?.primary?.[600]
                  }, ${bgColor || palette?.primary?.[800]}), url(${
                    bgImage || CardImage
                  })`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={logo || LogoImage}
            alt="Hamilton Telecom"
            style={{ maxWidth: "50%" }}
          />
        </Box>
      </Box>

      {boxes?.length ? (
        boxes?.map((item, i) => (
          <Box
            key={i}
            bgcolor="white.main"
            className="shadow"
            borderRadius="6px"
            maxWidth={280}
            minWidth={180}
            p={2}
            position="absolute"
            top={item?.top ?? "unset"}
            bottom={item?.bottom ?? "unset"}
            left={item?.left ?? "unset"}
            right={item?.right ?? "unset"}
            zIndex={1}
          >
            <Typography dangerouslySetInnerHTML={{ __html: item?.text }} />
          </Box>
        ))
      ) : (
        <></>
      )}
    </Box>
  );
};

export default WrappedImageCard;
