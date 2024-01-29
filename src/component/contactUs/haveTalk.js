import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import People15 from "assets/img/static/bg/people15.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import callCentreBanner from '../../assets/img/dynamicImg/callCentreBanner.png'

const HaveTalk = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box>
      <Container maxWidth="xl">
        <Box
          style={{
            backgroundImage: `url(${callCentreBanner})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '470px',
            backgroundSize: 'cover',
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={7} className="center" order={matches ? 1 : 2} >
              <Box sx={{ width: "min(100%, 500px)", borderRadius: 4 }} bgcolor="#fff" p={3} >
                <Typography variant="h4" mb={5} color="#000">
                  Let’s have a talk
                </Typography>

                <TextField
                  label="Name"
                  placeholder="Eg :  Jason Moe"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  label="Email"
                  placeholder="Eg :  work@example.com"
                  fullWidth
                  sx={{ my: 4 }}
                  variant="standard"
                />
                <TextField
                  label="Message"
                  placeholder="Eg : I'm want to know more..."
                  variant="standard"
                  fullWidth
                />
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ mt: 4 }}
                  size="large"
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>

          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HaveTalk;
