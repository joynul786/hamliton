import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Card, CardMedia,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import Pattern5 from "assets/img/static/bg/pattern5.png";
import Images from "assets/img/images";
const AboutTop = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <div className="aboutPage">
          <CardMedia
            component="img"
            alt="Your Image Alt Text"
            height="auto"
            src={Images.ProductAndService}
          />

        </div>
      </Container>
    </Box>
  );
};

export default AboutTop;
