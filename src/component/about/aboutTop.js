import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import Pattern5 from "assets/img/static/bg/pattern5.png";
const AboutTop = () => {
  return (
    <Box py={5}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: "100%",
              }}
            >
              <Box >
                <Typography
                  variant="overline"
                  sx={{
                    pb: 1,
                    width: "200px",
                    borderBottom: "1px solid #e6e6e6",
                    mb: 3,
                    fontSize: "16px",
                  }}
                >
                  About Us
                </Typography>
                <Typography>
                  <Typography
                    variant="h5"
                    sx={{ display: "inline", margin: 0 }}
                  >
                    Hamilton Telecom{" "}
                  </Typography>
                  is a dynamic and innovative provider of mobile
                  telecommunications solutions founded in 2016 with a National
                  Public Service Provider License (NPSP) by Uganda
                  Communications Commission, committed to revolutionizing the
                  industry
                </Typography>
                <Box mt={3}>
                  <Link
                    style={{ textDecoration: "underline", fontSize: "14px" }}
                  >
                    Learn More
                  </Link>
                </Box>
              </Box>
              <Box >
                <TextField
                  label={"Email *"}
                  variant="standard"
                  sx={{ mr: 4, width: "50%" }}
                />
                <Button variant="contained" size="small">
                  Contact us
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={Pattern5} alt="people" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutTop;
