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
const HaveTalk = () => {
    const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container spacing={3} className="contact-bg">
          <Grid item xs={12} md={7} className="center" order={matches?1:2} >
            <Box sx={{ width: "min(100%, 500px)" }} bgcolor="#fff"p={3} >
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
          <Grid item xs={12} md={5} order={matches?2:1}>
            <Box className="resImg">
              <img src={People15} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HaveTalk;
