import { Box, Grid, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const MissionVision = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box py={4}>
      <Container maxWidth="xl">
        <Grid container spacing={10}>
          <Grid item xs={12} md={4} className="center" order={1}>
            <Typography variant="h3" sx={{ color: "#000", fontWeight: "600" }}>
              Our
              <br />
              Mission
            </Typography>
          </Grid>
          <Grid item xs={12} md={8} order={2}>
            <Typography sx={{maxWidth:600}}>
              Our mission at Hamilton Telecom Is to transform the world of
              mobile telecommunications by delivering Innovative and tailored
              solutions that enable businesses to establish their own mobile
              brands. We strive to provide exceptional customer experiences,
              seamless integration, and the latest technological advancements to
              drive our clients’ success in the competitive mobile connectivity
              landscape.
            </Typography>
          </Grid>
          <Grid item xs={12} md={8} order={matches?4:3}>
            <Typography sx={{maxWidth:600}}>
              Our vision is to become the leading provider of comprehensive and
              customized mobile virtual service solutions, delivering
              unparalleled support, seamless integration, and forward-thinking
              strategies to help our clients thrive in an ever evolving
              industry.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} className="center"  order={matches?3:4}>
            <Typography variant="h3" sx={{ color: "#000", fontWeight: "600" }}>
              Our
              <br />
              Vision
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MissionVision;
