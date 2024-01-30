import { Container, Grid, Typography, Box } from "@mui/material";
import People11 from "assets/img/static/bg/people11.png";
import People12 from "assets/img/static/bg/people12.png";
import People13 from "assets/img/static/bg/people13.png";
import People14 from "assets/img/static/bg/people14.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import financeIndustry from "../../assets/img/dynamicImg/financeIndustry.png";
import HospitalityTelephony from "../../assets/img/dynamicImg/HospitalityTelephony.png";
import publicSector from "../../assets/img/dynamicImg/publicSector.png";
import transportANdlogistics from "../../assets/img/dynamicImg/transport&logistics.png";

const IndustriesMid = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box>
      <Container maxWidth="xl">
        <Box
          style={{
            backgroundImage: `url(${financeIndustry})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "400px",
            position: "relative",
            backgroundSize: "cover",
          }}
        >
          <Grid container spacing={{ xs: 1, md: 3 }} p={{ xs: 2, md: 3 }}>
            <Grid item xs={12} md={7}>
              <Box pl={{ xs: 2, md: 5 }}>
                <Typography variant="overline">FINANCE</Typography>
                <br />
                <Typography className="ServicesIndustry">
                  Hamilton for the Financial Services Industry
                </Typography>

                <Typography variant="body2">
                  In the past few decades, digitization has transformed the
                  financial services sector with the emergence of online
                  banking, neobanks, mobile wallets, commission-free trading
                  apps, and BNPL apps. These technologies have made financial
                  services accessible to more people worldwide. Moreover,
                  blockchain technologies and digital ledgers have enabled new
                  developments in cryptocurrencies, digital coins, and NFTs.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          style={{
            backgroundImage: `url(${HospitalityTelephony})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "470px",
            backgroundSize: "cover",
          }}
        >
          <Grid container spacing={{ xs: 1, md: 3 }} p={{ xs: 2, md: 3 }}>
            <Grid item xs={12} md={7}>
              <Box pl={{ xs: 2, md: 5 }}>
                <Typography variant="overline">Hospitality</Typography>
                <Typography variant="h4" component="h2" my={{ xs: 2, md: 4 }}>
                  Hamilton for Hospitality
                </Typography>
                <Typography variant="body2">
                  The hospitality industry is constantly evolving, and
                  advancements in connectivity technology have played a key role
                  in its growth. Wi-Fi, SMS, mobile services, and IoT have
                  enabled hotels, restaurants, travel agencies, and
                  entertainment companies to optimize operations, enhance
                  customer engagement, and strengthen customer loyalty through
                  new and innovative means.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          style={{
            backgroundImage: `url(${publicSector})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "470px",
            backgroundSize: "cover",
          }}
        >
          <Grid
            container
            spacing={3}
            p={3}
            className="Publicsector"
            style={{ color: "white" }}
          >
            <Grid item xs={12} md={7}>
              <Box>
                <Typography variant="overline">Public Sector</Typography>
                <Typography variant="h4" my={4}>
                  Hamilton for Public Sector
                </Typography>
                <Typography variant="body2">
                  The global market size for public safety Internet of Things
                  (IoT) solutions is expected to reach $29.7 billion by 2027.
                </Typography>
                <Typography variant="body2">
                  Over 98% of text messages are read, making it one of the most
                  effective ways for governments to communicate with employees
                  and citizens alike.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          style={{
            backgroundImage: `url(${transportANdlogistics})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "470px",
            backgroundSize: "cover",
          }}
        >
          <Grid container spacing={3} color="#000">
            <Grid item xs={12} md={7}>
              <Box className="transportANdlogistics">
                <Typography variant="overline">Transport & Logistic</Typography>
                <Typography variant="h4" my={2}>
                  Hamilton for Transport & Logistic
                </Typography>
                <Typography variant="body2">
                  Hamilton's Mobile Service Suite offers an Operations Support
                  System (OSS) that serves as an interface for various networks,
                  including mobile, fixed, OTT, broadband, TV, and more. Its
                  architecture is designed to be scalable both horizontally and
                  vertically, allowing it to handle increasing amounts of
                  traffic and data as needed. The OSS is built on global
                  standards, protocols, and techniques, making it simple to
                  integrate into existing environments without causing
                  disruption.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default IndustriesMid;
