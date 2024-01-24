import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import People6Pic from "assets/img/static/bg/people6.png";
import People7Pic from "assets/img/static/bg/people7.png";
const ProductTop = () => {
  return (
    <Box py={5}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} className="center">
            <Box>
              <Typography variant="body2" fontWeight={600}>
                Product & Services
              </Typography>
              <Typography variant="h4" color="secondary" mt={4}>
                Learn about our <br />
                valuable services
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="resImg">
              <img src={People6Pic} alt="people" />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ p: 4, bgcolor: "#ffb2001a" }}>
          <Grid item xs={12} md={7}>
            <Typography>MVNO & MVNE</Typography>
            <Typography variant="h4" color="secondary" fontWeight="bold" mt={4}>
              Mobile Virtual Network
              <br />
              Operator - MVNO
            </Typography>
            <Typography mt={4}>
              Hamilton provides a highly scalable multi-tenant service delivery
              platform that gives MVNOs the ability launch and manage their own
              successful mobile brands. Hamilton's combines next-generation
              technology with traditional telecom environments to enable you
              create exciting new opportunities,have full control over customer
              experience, sales and marketing strategies, service management as
              well as billing, and more .
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box className="resImg">
              <img src={People7Pic} alt="people" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductTop;
