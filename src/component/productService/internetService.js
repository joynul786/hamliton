import {
  Box,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import interNetSerVice from "../../assets/img/dynamicImg/interNetSerVice.png";
import { useState } from "react";

const InternetService = () => {
  const { palette } = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Box
        style={{
          backgroundImage: `url(${interNetSerVice})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "450px",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12} md={5}>
              <Box py={5}>
                <Typography variant="h2" color={"#000"} fontWeight={700}>
                  Internet SerVices
                </Typography>
              </Box>

              <Box color={palette.secondary.main}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  // aria-label="basic tabs example"
                  textColor="secondary"
                  indicatorColor="secondary"
                  variant="scrollable"
                  scrollButtons="auto"
                  sx={{
                    ".MuiTab-root": {
                      textTransform: "capitalize",
                      fontWeight: 600,
                      fontSize: 20,
                    },
                  }}
                >
                  <Tab label="Mobile wireless connections" {...a11yProps(0)} />
                  <Tab label="P2P connections" {...a11yProps(1)} />
                  <Tab label="P2MP connections" {...a11yProps(2)} />
                  <Tab label="Fiber connectivity" {...a11yProps(3)} />
                </Tabs>
              </Box>

              <CustomTabPanel value={value} index={0}>
                Hamilton offers mobile internet connections over 4G/5G LTE
                devices like modems,mifis,routers and E-SIM enabled lowcost
                mobile phones.
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                Point to point dedicated microwave internet connections
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                Point to mulltipoint internet connections
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                Backhaul and last mile fiber connections
              </CustomTabPanel>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

function a11yProps(index) {
  return {
    id: `internet-service-tab-${index}`,
    "aria-controls": `internet-service-tabpanel-${index}`,
  };
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`internet-service-tabpanel-${index}`}
      aria-labelledby={`internet-service-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default InternetService;
