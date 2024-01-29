import { Typography, Container, Box, Grid } from "@mui/material";
import integrationIcon from "assets/img/static/icon/integration.png";
import networkIcon from "assets/img/static/icon/tower.png";
import innovationIcon from "assets/img/static/icon/innovation.png";
import relationIcon from "assets/img/static/icon/relation.png";
import connectIcon from "assets/img/static/icon/connect.png";
import Images from "assets/img/images";


const OurValues = () => {
  return (
    <Box py={4} sx={{ backgroundColor: '#FFFAED' }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            width: 0.7,
            mx: "auto",
            borderBottom: "1px solid #BBBBBB",
            pb: 4,
            mb: 5,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 1000 }}>
            Our Values
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={6} md={4} lg={2.4} >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box className="resImg" mb={3} maxWidth={100} style={{ display: 'flex', backgroundColor: '#00877A' }}>
                <img className="aboutImag" src={Images.lerderShip} alt="network" />
              </Box>
              <Typography variant="subtitle2" sx={{ backgroundColor: '#00877A', color: '#FFFF' }} className="caption">Network</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} lg={2.4} >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box className="resImg" mb={3} maxWidth={100}>
                <img className="aboutImag" src={Images.integrity} alt="Integration" />
              </Box>
              <Typography variant="subtitle2" className="caption">Integration</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} lg={2.4} >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box className="resImg" mb={3} maxWidth={100}>
                <img className="aboutImag" src={Images.innovacation} alt="Innovation" />
              </Box>
              <Typography variant="subtitle2" className="caption">Innovation</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} lg={2.4} >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box className="resImg" mb={3} maxWidth={100}>
                <img className="aboutImag" src={Images.culture} alt="Connectivity" />
              </Box>
              <Typography variant="subtitle2" className="caption">Connectivity</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} lg={2.4} >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box className="resImg" mb={3} maxWidth={100}>
                <img className="aboutImag" src={Images.relationship} alt="Relationship" />
              </Box>
              <Typography variant="subtitle2" className="caption">Relationship</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} mt={5}>
            <Typography textAlign="center" sx={{ fontWeight: 600 }}>
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
