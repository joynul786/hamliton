import { Box, Breadcrumbs, Container, Typography } from "@mui/material";
import { RouteConstant } from "navigation/constant";
import React from "react";
import { Link } from "react-router-dom";

const BasicBreadcrumbs = ({ links }) => {
  return (
    <section>
      <Container maxWidth="xl">
        <Box pt={3}>
          <Breadcrumbs>
            <Box>
              <Link underline="hover" color="inherit" to={RouteConstant?.HOME}>
                Home
              </Link>
            </Box>
            {links?.map((item, i) => (
              <Box key={i}>
                {item?.link && item?.label ? (
                  <>
                    <Link underline="hover" color="inherit" to={item?.link}>
                      {item?.label}
                    </Link>
                  </>
                ) : item?.label ? (
                  <>
                    <Typography color="text.primary">{item?.label}</Typography>
                  </>
                ) : (
                  <></>
                )}
              </Box>
            ))}
          </Breadcrumbs>
        </Box>
      </Container>
    </section>
  );
};

export default BasicBreadcrumbs;
