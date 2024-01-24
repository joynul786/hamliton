import {
  Grid,
  Box,
  Container,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import ContactUsPic from "assets/img/static/bg/contactUs.png";
import StandardButton from "component/buttons/standardButton";
import SectionHeading from "component/sectionHeading";

const ContactUs = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <Grid container spacing={3} py={4}>
          <Grid item xs={12} md={6} sx={{display:"flex",alignItems:"center"}}>
            <img src={ContactUsPic} alt="contact us" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box bgcolor="white.main" p={5} className="shadow">
              <Box>
                <SectionHeading title="Contact Us" />
                <Typography variant="body2" mt={2}>
                  If you have any question about Hamilton or want to know more
                  about us then reach out. we will help you with your quires
                </Typography>
                <FormGroup sx={{ my: 2 }}>
                  <TextField
                    variant="outlined"
                    name={"name"}
                    label="Name"
                    placeholder="Enter your name"
                    autoComplete="off"
                    sx={{
                      fontWeight: 400,
                    }}
                  />
                </FormGroup>
                <FormGroup sx={{ my: 2 }}>
                  <TextField
                    variant="outlined"
                    type="email"
                    name={"email"}
                    placeholder="Enter your email"
                    label="Email"
                    autoComplete="off"
                    sx={{
                      fontWeight: 400,
                    }}
                  />
                </FormGroup>

                <Box pt={3}>
                  <StandardButton type="submit" buttonText="Submit" fullWidth/>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContactUs;
