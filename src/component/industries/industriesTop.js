import {
  Container,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import communities from '../../assets/img/dynamicImg/communities.png'
const IndustriesTop = () => {
  return (
    <Box mx={{ xs: 2, md: 3 }} mb={{ xs: 0, md: 3 }}>
      <Container maxWidth="xl">
        <Box p={4} mb={8} className="deliverHeading">
          <h1>Industries</h1>
          <h4>and communities</h4>
        </Box>
      </Container>
      <Container maxWidth="xl"
        style={{
          backgroundImage: `url(${communities})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '470px',
          backgroundSize: 'cover',
        }}
      >
        <Grid container spacing={3} p={3} color="#fff">
          <Grid item xs={12} md={6}>
            <Box pl={{ sx: 0, md: 6 }}>
              <Typography variant="overline">Communities</Typography>
              <Typography variant="h4" my={4}>
                Hamilton for communities{" "}
              </Typography>
              <Typography variant="body2">
                Hamilton's Mobile Services Suite different types of communities
                with large numbers of people not below 50,000 members for
                example,farming communities and SACCOS religious communities
                like churches, ethnic communities as well as business
                communities like the big established corporations.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default IndustriesTop;
