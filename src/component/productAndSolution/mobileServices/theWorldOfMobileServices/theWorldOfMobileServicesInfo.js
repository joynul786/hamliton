import { Box, Container, Grid, Typography } from "@mui/material";
import Title from "component/title";
import React from "react";

const TheWorldOfMobileServicesInfo = () => {
  const list = [
    {
      label: "Radio<br />Access",
    },
    {
      label: "Core<br />Network",
    },
    {
      label: "Application <br />& Services",
    },
    {
      label: "Rating &<br />Billing",
    },
    {
      label: "Customer<br />Care",
    },
    {
      label: "Sales &<br />Marketing",
    },
  ];
  return (
    <section>
      <Container>
        <Box>
          <Title
            title="From Past to <br />Present"
            color="primary"
            fontSize={24}
            fontWeight={700}
          />
          <Box fontWeight={400} pt={3}>
            <Typography variant="body1">
              In the current mobile telecommunications landscape, Mobile Virtual
              Network Operators (MVNOs) have become increasingly common. These
              are companies that partner with Mobile Network Operators (MNOs) to
              offer their own unique branded mobile services. There are
              typically three types of MVNOs: Full Mobile Virtual Network
              Operators (Full/Thick MVNOs), Light Mobile Virtual Network
              Operators (Light/Thin MVNOs), and Mobile Virtual Network Enablers
              (MVNEs). Each type has its own distinct characteristics and level
              of involvement in the mobile ecosystem.
            </Typography>
            <ul>
              <li>Branded Resellers</li>
              <li>Light / Thin MVNO – Enhanced Service Providers</li>
              <li>Full / Thick MVNO – Full infrastructure MVNOs</li>
            </ul>
          </Box>

          <Box pt={5} pb={3} color="black.main" display="flex" flexWrap="wrap">
            {list?.map(({ label }, i) => (
              <Box
                key={i}
                mb={2}
                mr={2}
                px={2}
                py={1}
                textAlign="center"
                sx={{
                  border: ({ palette }) => `1px solid ${palette?.black?.[100]}`,
                  borderRadius: "10px",
                }}
              >
                <Typography
                  variant="body1"
                  dangerouslySetInnerHTML={{ __html: label }}
                />
              </Box>
            ))}
          </Box>

          <Box fontSize={18} fontWeight={700} textAlign="center">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={9}>
                <Box bgcolor="primary.100" color="primary.main" p={2}>
                  MVNE
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box bgcolor="secondary.100" color="secondary.main" p={2}>
                  Branded Reseller
                </Box>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Box bgcolor="primary.100" color="primary.main" p={2}>
                  MVNE
                </Box>
              </Grid>
              <Grid item xs={12} sm={7}>
                <Box bgcolor="secondary.100" color="secondary.main" p={2}>
                  Enhanced Service Provider / light MVNO
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box bgcolor="primary.100" color="primary.main" p={2}>
                  MVNE
                </Box>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Box bgcolor="secondary.100" color="secondary.main" p={2}>
                  Full Infrastructure Mobile Virtual Network Operator | Full
                  MNVO
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box pt={3} pb={5}>
            <Typography variant="body1">
              Mobile Virtual Network Enablers (MVNEs) can offer MVNO services to
              other companies without becoming a service provider, by setting up
              an environment to host multiple MVNOs. IoT and M2M leverage
              mobile/cellular operator and MVNO networks to connect devices,
              cars, appliances, and more for sophisticated deployments and
              platforms.
            </Typography>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default TheWorldOfMobileServicesInfo;
