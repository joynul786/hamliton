import { Typography, Container, Box, Grid, Tabs, Tab } from "@mui/material";
import { useState } from "react";

const InternetService = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Container maxWidth="xl">
        <Box className="internet-service-bg" p={6}>
          <Typography variant="h3" color="#fff" fontWeight={700}>
            Internet
            <br />
            Services
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }} color="#fff">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                indicatorColor="secondary"
                textColor="inherit"
              >
                <Tab
                  label="Mobile wireless connections"
                  {...a11yProps(0)}
                  color="#fff"
                />
                <Tab label="P2P connections" {...a11yProps(1)} />
                <Tab label="P2MP connections" {...a11yProps(2)} />
                <Tab label="Fiber connectivity" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              Hamilton offers mobile internet connections over 4G/5G LTE devices
              like modems,mifis,routers and E-SIM enabled lowcost mobile phones.
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Point to point dedicated microwave internet connections
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Point to multi point internet connections
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              Backhaul and last mile fiber connections
            </CustomTabPanel>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography color="#fff">{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default InternetService;
