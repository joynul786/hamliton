import {
  Container,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import People10 from "assets/img/static/bg/people10.png";

const IndustriesTop = () => {
  return (
    <Box py={5}>
      <Container maxWidth="xl" >
        <Box pb={4} mb={8} className="deliverHeading">
          <h1>Industries</h1>
          <h4>and communities</h4>
        </Box>
      </Container>
      <Container maxWidth="xl"  sx={{bgcolor:"#1F3432"}}>
        <Grid container spacing={3} p={3} color="#fff">
          <Grid item xs={12} md={6}>
            <Box pl={5}>
              <Typography variant="overline">Communities</Typography>
              <Typography variant="h4" my={4}>
                Hamilton for communities{" "}
              </Typography>
              <Typography variant="body2">
                Hamilton's Mobile Services Suite different types of communities
                with large numbers of people not below 50,000 members for
                example,farming communities and SACCOs ,religious communities
                like churches, ethnic communities as well as business
                communities like the big established corporations.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="resImg">
              <img src={People10} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default IndustriesTop;
