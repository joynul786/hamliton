import { Typography, Container, Box, Grid } from "@mui/material";
import integrationIcon from "assets/img/static/icon/integration.png";
import networkIcon from "assets/img/static/icon/tower.png";
import innovationIcon from "assets/img/static/icon/innovation.png";
import relationIcon from "assets/img/static/icon/relation.png";
import connectIcon from "assets/img/static/icon/connect.png";

const OurValues = () => {
  return (
    <Box py={4}>
      <Container maxWidth="xl">
        <Box
          sx={{
            width: 0.7,
            mx: "auto",
            borderBottom: "1px solid #e6e6e6",
            pb: 4,
            mb: 5,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Our Values
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={6} md={4} lg={2.4} >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box className="resImg" mb={3} maxWidth={100}>
                <img src={networkIcon} alt="network" />
              </Box>
              <Typography variant="caption">Network</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} lg={2.4} >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box className="resImg" mb={3} maxWidth={100}>
                <img src={integrationIcon} alt="Integration" />
              </Box>
              <Typography variant="caption">Integration</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} lg={2.4} >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box className="resImg" mb={3} maxWidth={100}>
                <img src={innovationIcon} alt="Innovation" />
              </Box>
              <Typography variant="caption">Innovation</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} lg={2.4} >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box className="resImg" mb={3} maxWidth={100}>
                <img src={connectIcon} alt="Connectivity" />
              </Box>
              <Typography variant="caption">Connectivity</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} lg={2.4} >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box className="resImg" mb={3} maxWidth={100}>
                <img src={relationIcon} alt="Relationship" />
              </Box>
              <Typography variant="caption">Relationship</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} mt={5}>
            <Typography textAlign="center">
              We are mobile experts specializing in providing <br /> mobile
              solutions for our clients.{" "}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurValues;
