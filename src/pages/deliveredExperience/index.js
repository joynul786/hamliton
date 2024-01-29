import Navbar from "parts/navbar";
import Footer from "parts/footer";
import GetUpdate from "parts/getUpdate";
import { Container, Grid, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const DeliveredExperience = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div>
      <Navbar />
      <main>
        <Box py={5}>
          <Container maxWidth="xl">
            <Box textAlign="center" sx={{ backgroundColor: '#FFB200', padding: 10 }}>
              <Typography variant="overline">VALUE WE BUILT</Typography>
              <Typography variant="h4" color="">
                Our Delivered Experiences
              </Typography>
            </Box>
            <Container>
              <Box my={6}>
                <Grid container spacing={7}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h5" paddingBottom={1} color={'#FFB200'}>
                      01
                    </Typography>
                    <Typography variant="body1">
                      We take pride in the fact that we are able to work with some
                      of the fastest-growing banks in the country while providing
                      them with robust hybrid call center outbound solutions.
                    </Typography>
                  </Grid>
                  {matches && <Grid item xs={12} md={6}></Grid>}
                  <Grid item xs={12} md={6}>
                    <div className="vr-1"></div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h5" paddingBottom={1} color={'#00877A'}>
                      02
                    </Typography>
                    <Typography variant="body1">
                      We provided outbound call center services to Ayo and using
                      our solution they were able to acquire more customers. Ayo
                      in collaboration with MTN managed to call over 5 million
                      customers.
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={6} className="vrtical">
                    <div className="vr-1"></div>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Typography variant="h5" paddingBottom={1} color={'#FFB200'}>
                      03
                    </Typography>
                    <Typography variant="body1">
                      We supported the  Executive Council of the Uganda Law
                      Society in partnership with the Special Mobilization
                      Committee, to reach out  over 4,000 members and collect
                      money for the construction of the ULS house in Kololo.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div className="vr-1"></div>
                  </Grid>
                  {matches && <Grid item xs={12} md={6}></Grid>}
                  <Grid item xs={12} md={6}>
                    <Typography variant="h5" paddingBottom={1} color={'#00877A'}>
                      04
                    </Typography>
                    <Typography variant="body1">
                      We provided  fiber internet connectivity to The Royal
                      Embassy of Saudi Arabia in Uganda.
                    </Typography>
                  </Grid>
                  {matches && <Grid item xs={12} md={6}></Grid>}
                </Grid>
              </Box>
            </Container>
          </Container>
        </Box>
        <GetUpdate />
      </main>
      <Footer />
    </div>
  );
};

export default DeliveredExperience;
