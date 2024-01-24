import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import { Box, IconButton, Paper } from "@mui/material";
const ProductSimpleCard = ({ img, description, title, link }) => {
  return (
    <Paper component={Box}>
      <div className="simple-product-card responsive" >
        <div className="left-side">
          <h3 className="simple-card-title">{title}</h3>
          <p className="simple-card-desc">{description}</p>
          <div className="simple-card-action-btn">
            <Link to={link}>
              <IconButton>
                <EastIcon />
              </IconButton>
            </Link>
          </div>
        </div>
        <div className="right-side">
          <img src={img} />
        </div>
      </div>
    </Paper>
  );
};

export default ProductSimpleCard;
