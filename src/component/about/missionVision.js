import { Box, Grid, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const MissionVision = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container>
          {/* Mission Grid Item */}
          <Grid item xs={12} md={5} className="center" style={{
            backgroundColor: '#00877A',
            padding: matches ? '30px 0' : '30px',
            order: matches ? 1 : undefined,
          }}>
            <Typography variant="h3" sx={{
              fontWeight: "600",
              color: '#FFFFFF',
              fontSize: matches ? '2rem' : undefined,
              textAlign: matches ? 'center' : undefined,
            }}>

              Mission
            </Typography>
          </Grid>

          {/* Mission Details Grid Item */}
          <Grid item xs={12} md={7} style={{
            backgroundColor: '#00877A',
            padding: matches ? '14px' : '30px',
            order: matches ? 2 : undefined,
          }}>
            <Typography sx={{ maxWidth: 600, color: '#FFFFFF' }}>
              Our mission at Hamilton Telecom is to transform the world of
              mobile telecommunications by delivering innovative and tailored
              solutions that enable businesses to establish their own mobile
              brands. We strive to provide exceptional customer experiences,
              seamless integration, and the latest technological advancements to
              drive our clients’ success in the competitive mobile connectivity
              landscape.
            </Typography>
          </Grid>

          {/* Vision Grid Item */}
          <Grid item xs={12} md={5} className="center" style={{
            backgroundColor: '#FBC13C',
            padding: matches ? '30px 0' : '30px',
            order: matches ? 3 : undefined,
          }}>
            <Typography variant="h3" sx={{ color: "#000", fontWeight: "600" }}>

              Vision
            </Typography>
          </Grid>

          {/* Vision Details Grid Item */}
          <Grid item xs={12} md={7} style={{
            backgroundColor: '#FBC13C',
            padding: matches ? '14px' : '30px',
            order: matches ? 4 : undefined,
          }}>
            <Typography sx={{ maxWidth: 600 }}>
              Our vision is to become the leading provider of comprehensive and
              customized mobile virtual service solutions, delivering
              unparalleled support, seamless integration, and forward-thinking
              strategies to help our clients thrive in an ever-evolving
              industry.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MissionVision;
