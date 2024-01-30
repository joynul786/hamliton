import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  MenuItem,
  Toolbar,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import LogoImage from "assets/img/static/icon/logo.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import StandardButton from "component/buttons/standardButton";
import MenuIcon from "@mui/icons-material/Menu";

import ProductSolutionNavMenu from "./component/productSolution";
import { RouteConstant } from "navigation/constant";
import IndustriesNavMenu from "./component/industries";

import "styles/navbar/navbar.scss";
import Title from "component/title";
import { Close } from "@mui/icons-material";

const navbarList = [
  {
    label: "About Hamilton",
    path: RouteConstant.ABOUT,
  },
  {
    label: "Products & Services",
    path: RouteConstant.PRODUCT_SERVICE,
  },
  {
    label: "Delivered Experiences",
    path: RouteConstant.DELIVERED_EXPERIENCE,
  },
  { label: "Industries", path: RouteConstant.INDUSTRIES },
  { label: "Contact Us", path: RouteConstant.CONTACT },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <AppBar position="static" className="site-header">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ alignItems: "unset" }}>
          {/* Logo */}
          <Link to={RouteConstant?.HOME}>
            <img
              src={LogoImage}
              alt="Hamilton Telecom"
              className="logo-image"
            />
          </Link>

          {/* Desktop */}
          <Box
            sx={{
              height: "auto",
              // flexGrow: 1,
              ml: "auto",
              display: { xs: "none", lg: "flex" },
            }}
          >
            {navbarList.map(({ label, path }, i) => (
              <MenuItem key={i} className="nav-item">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? `active` : ""} `
                  }
                >
                  {label}
                </NavLink>
              </MenuItem>
            ))}
          </Box>

          {/* Mobile */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", lg: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              onClick={handleDrawerToggle}
              color="secondary"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", lg: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  pt: 5,
                  width: "100%",
                },
              }}
            >
              <IconButton
                size="large"
                onClick={handleDrawerToggle}
                color="secondary"
                sx={{ position: "absolute", right: 10, top: 10 }}
              >
                <Close />
              </IconButton>
              {navbarList.map(({ label, path }, i) => (
                <MenuItem key={i} className="nav-item">
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? `nav-link active` : "nav-link"
                    }
                    onClick={handleDrawerToggle}
                  >
                    {label}
                  </NavLink>
                </MenuItem>
              ))}
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
