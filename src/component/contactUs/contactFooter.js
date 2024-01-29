import { Container, Grid, Typography, Box, Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const ContactFooter = () => {
  return (
    <Box mb={5}>

      <Container maxWidth="xl">
        <Grid container >
          <Grid item xs={12} md={4}>
            <Box bgcolor="#2A2B2A" p={3} color="#fff">
              <Typography variant="h4" mb={3}>
                Locate Us
              </Typography>
              <Typography variant="caption">Postal address</Typography>
              <Typography mb={4}>P.O Box 27290 Kampala-(U)t</Typography>
              <Typography variant="caption">Physical address</Typography>
              <Typography>Plot 37B,Windsor Crescent</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box bgcolor="#2C2D2D" p={3} color="#fff">
              <Typography variant="h4" mb={3}>
                Meet Us
              </Typography>
              <Typography variant="caption">Phone</Typography>
              <Typography mb={4}>+256 322202995</Typography>
              <Typography variant="caption">Email</Typography>
              <Typography>Info@hamiltel.com</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box bgcolor="#FAAF01" p={3} height={1}>
              <Typography variant="h4" mb={3}>
                Pitch Us
              </Typography>
              <Typography mb={4}>
                hello, my name is and my e-mail address is and I would like to
                discuss about
              </Typography>
              <Button
                variant="contained"
                sx={{ borderRadius: 5, px: 4 }}
                size="small"
              >
                Send
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              bgcolor="#2D2D2D"
              color="#fff"
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexWrap: "wrap",
                py: 2,
              }}
            >
              <a
                className="center"
                href="https://www.instagram.com/hamiltontelecom/"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <InstagramIcon />
                &nbsp;
                <Typography variant="caption">@hamiltontelecom</Typography>
              </a>
              <a
                className="center"
                href="https://twitter.com/hamiltel1"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                {/* <TwitterIcon /> */}
                <i class="fa-brands fa-x-twitter"></i>&nbsp;
                <Typography variant="caption">@hamiltel1</Typography>
              </a>
              <a
                className="center"
                href="https://www.facebook.com/hamiltel"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <FacebookIcon />&nbsp;
                <Typography variant="caption">@Hamilton  Telecom</Typography>
              </a>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactFooter;
