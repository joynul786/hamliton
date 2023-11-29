import { Box, Container, Typography } from "@mui/material";
import Title from "component/title";
import React from "react";
import HeaderImage from "assets/img/static/bg/the-world-of-mobile-services-header.png";

const TheWorldOfMobileServicesHeader = () => {
  const boxes = [
    {
      text: "Radio<br />Access",
      right: "40%",
      top: "-30px",
    },
    {
      text: "Core<br />Network",
      right: 0,
      top: 0,
    },
    {
      text: "Application <br />& Services",
      right: { xs: 0, md: "-100px" },
      top: "30%",
    },
    {
      text: "Rating &<br />Billing",
      right: { xs: 0, md: "-90px" },
      bottom: "25%",
    },
    {
      text: "Customer<br />Care",
      right: { xs: 0, md: "-30px" },
      bottom: 0,
    },
    {
      text: "Sales &<br />Marketing",
      right: "40%",
      bottom: "-30px",
    },
  ];
  return (
    <section>
      <Container>
        <Box pt={5}>
          <Box color="black.main">
            <Title title="The World of Mobile / Cellular Services" />
          </Box>
          <Box maxWidth={500}>
            <Typography variant="body1" mt={3}>
              Entering the world of mobile telecommunications operators can be
              confusing, with various terms like Full/Thick MVNO, Light/Thin
              MVNO, MVNE, MVNA, IoT, and M2M. In essence, Mobile Operators are
              licensed carriers of radio spectrum, offering wireless
              communication services.
            </Typography>
          </Box>
        </Box>

        <Box
          py={8}
          display="flex"
          justifyContent={{ xs: "center", sm: "flex-end", md: "center" }}
        >
          <Box
            width={{ xs: 280, sm: 350, md: 500 }}
            height={{ xs: 280, sm: 350, md: 500 }}
            position="relative"
            sx={{
              background: ({ palette }) =>
                `linear-gradient(0deg, ${palette?.primary?.[800]}, ${palette?.primary?.[800]}), url(${HeaderImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              boxShadow: `inset -29px 23px 68px rgba(0, 0, 0, 0.25), inset 12px 22px 37px rgba(0, 0, 0, 0.25)`,
              borderRadius: "50%",
            }}
          >
            <Box
              width={{ xs: 250, md: 380 }}
              height={{ xs: 250, md: 380 }}
              position="absolute"
              top="50%"
              left="50%"
              bgcolor="white.main"
              sx={{
                boxShadow: `-29px 23px 68px rgba(0, 0, 0, 0.25), 12px 22px 37px rgba(0, 0, 0, 0.25)`,
                borderRadius: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <Box
              width={{ xs: 280, md: 400 }}
              height={{ xs: 280, md: 400 }}
              position="absolute"
              bottom={{ sm: "5%" }}
              sx={{
                border: ({ palette }) =>
                  `6px solid ${palette?.secondary?.main}`,
                borderRadius: "50%",
                transform: { sm: "translateX(-40%)" },
              }}
            >
              {/* Mobile / Cellular Operators control elements ---- Background content */}
              <Box
                width={250}
                height={250}
                position="absolute"
                top="50%"
                left="10px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                p={5}
                color="white.main"
                sx={{
                  background: ({ palette }) =>
                    `linear-gradient(0deg, ${palette?.primary?.[800]}, ${palette?.primary?.[800]}), url(${HeaderImage})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <Typography variant="body1" fontSize={18} fontWeight={700}>
                  Mobile / Cellular Operators control elements
                </Typography>
              </Box>

              {/* Cards boxes content */}
              <Box>
                {boxes?.map((item, i) => (
                  <Box
                    key={i}
                    bgcolor="white.main"
                    color="black.main"
                    className="shadow"
                    borderRadius="6px"
                    maxWidth="fit-content"
                    textAlign="center"
                    px={3}
                    py={1}
                    position="absolute"
                    top={item?.top ?? "unset"}
                    bottom={item?.bottom ?? "unset"}
                    left={item?.left ?? "unset"}
                    right={item?.right ?? "unset"}
                    zIndex={1}
                  >
                    <Typography
                      dangerouslySetInnerHTML={{ __html: item?.text }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default TheWorldOfMobileServicesHeader;
