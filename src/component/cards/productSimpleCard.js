import { Box, IconButton, Paper } from "@mui/material";
import { Link } from "react-router-dom";
const ProductSimpleCard = ({ img, description, title, link }) => {
  return (
    <Paper component={Box} sx={{ height: "100%" }}>
      <Box className="simple-product-card responsive" sx={{ height: "100%" }}>
        <Box className="left-side">
          <h3 className="simple-card-title">{title}</h3>
          <p className="simple-card-desc">{description}</p>
          <Box className="simple-card-action-btn">
            <Link to={link}>
              <IconButton>{/* <EastIcon /> */}</IconButton>
            </Link>
          </Box>
        </Box>
        <Box className="right-side">
          <img src={img} />
        </Box>
      </Box>
    </Paper>
  );
};

export default ProductSimpleCard;
