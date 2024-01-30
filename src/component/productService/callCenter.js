import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  CardMedia,
  Container,
  Dialog,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import Images from "assets/img/images";
import { useState } from "react";
import callCenter from "../../assets/img/dynamicImg/callcenter.png";

const CallCenter = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box style={{ position: "relative" }}>
        <Box
          style={{
            backgroundImage: `url(${callCenter})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            height: "550px",
          }}
        >
          <Container maxWidth="xl">
            <Grid container>
              <Box className="callServices">
                <Typography variant="h3" color={"#faaf01"}>
                  Call Centre Services
                </Typography>
                <Typography variant="body2" className="callCenterText">
                  Hamilton Call Centre offers a state-of-the art facility where
                  our clinents can reach and interact with their customers on an
                  omnichannel system. We offer outbound and inbound outsourced
                  and call centre solutions enabling channels like voice, SMS,
                  and web-chat. Our technology will provide you a secure and
                  efficient system that will help maximize you efficiency and
                  meet your goals.
                </Typography>

                <Box
                  pt={3}
                  display="flex"
                  justifyContent="flex-end"
                  sx={{ color: "#fff" }}
                >
                  <Button
                    variant="outlined"
                    color="inherit"
                    sx={{ borderRadius: 30 }}
                    onClick={handleOpen}
                  >
                    Learn More
                  </Button>
                </Box>

                <CardMedia
                  className="callPositionImgOne"
                  component={"img"}
                  src={Images.positionOne}
                />
                <CardMedia
                  className="callPositionImgTWo"
                  component={"img"}
                  src={Images.positiontwo}
                />
              </Box>
            </Grid>
          </Container>
        </Box>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        sx={{
          ".MuiPaper-root.MuiDialog-paper": {
            backgroundColor: "rgba(31, 52, 50, 1)",
            color: "#fff",
          },
        }}
      >
        <Box p={5}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 15,
              top: 15,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" fontWeight={600}>
            Multi-Channel Support:
          </Typography>
          <Box pt={2}>
            <Typography mt={2}>
              Multi-Channel Support: supports voice, email, chat, and SMS
              channels, ensuring that your customers can reach you through their
              preferred communication method.
            </Typography>
            <Typography mt={2}>
              Scalability: Accommodates your evolving business needs, providing
              flexibility during peak times or for future growth.
            </Typography>

            <Typography mt={2}>
              Customized Call Routing: Ensures calls are directed to the most
              appropriate agents based on customer needs, issue severity, and
              agent skills.
            </Typography>

            <Typography mt={2}>
              IVR System: streamline call flows, reduce wait times, and provide
              self-service options for customers.
            </Typography>

            <Typography mt={2}>
              Performance Analytics: Advanced analytics, real-time monitoring,
              and reporting tools to optimize operations and improve service
              quality
            </Typography>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default CallCenter;
