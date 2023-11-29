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
    label: "Product & Solution",
    path: RouteConstant?.PRODUCT_AND_SOLUTION,
    selfLink: false,
    Submenu: ProductSolutionNavMenu,
  },
  {
    label: "Industries",
    path: RouteConstant?.INDUSTRIES,
    selfLink: false,
    Submenu: IndustriesNavMenu,
  },
  {
    label: "Customer Stories",
    path: RouteConstant?.CUSTOMER_STORIES,
    selfLink: true,
  },
  { label: "Resources", path: RouteConstant?.RESOURCES, selfLink: true },
  { label: "About", path: RouteConstant?.ABOUT, selfLink: true },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const [targetMobileSubmenu, setTargetMobileSubmenu] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleCloseTargetMobileSubmenu = () => {
    setTargetMobileSubmenu(null);
    setMobileOpen(false);
  };

  const isSubMenuActive = useCallback(
    (path) => {
      if (pathname.includes(path)) return "active";
      else return "";
    },
    [pathname]
  );

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
              flexGrow: 1,
              display: { xs: "none", lg: "flex" },
            }}
          >
            {navbarList.map(({ label, path, selfLink, Submenu }, i) => (
              <MenuItem key={i} className="nav-item">
                {selfLink ? (
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? `active` : ""} ${
                        Submenu ? isSubMenuActive(path) : ""
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ) : (
                  <Box
                    component="span"
                    className={`nav-link ${
                      Submenu ? isSubMenuActive(path) : ""
                    }`}
                  >
                    {label}
                  </Box>
                )}
                {Submenu ? (
                  <Box className="submenu shadow">{<Submenu />}</Box>
                ) : (
                  <></>
                )}
              </MenuItem>
            ))}

            <Box marginLeft="auto" marginTop="auto" marginBottom="auto">
              <StandardButton
                link={RouteConstant?.CONTACT}
                buttonText="Contact Us"
                endIcon={<ArrowOutwardIcon />}
              />
            </Box>
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
              {navbarList.map(({ label, path, selfLink, Submenu }, i) => (
                <MenuItem key={i} className="nav-item">
                  {selfLink ? (
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        isActive ? `nav-link active` : "nav-link"
                      }
                      onClick={handleDrawerToggle}
                    >
                      {label}
                    </NavLink>
                  ) : (
                    <Box
                      component="span"
                      className={`nav-link ${
                        Submenu ? isSubMenuActive(path) : ""
                      }`}
                      onClick={() => setTargetMobileSubmenu(path)}
                    >
                      {label}
                    </Box>
                  )}
                  {Submenu && path === targetMobileSubmenu ? (
                    <Box className="mobile-submenu shadow">
                      <Box
                        p={3}
                        sx={{
                          borderBottom: "1px solid",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Title title={label} fontWeight={500} color="primary" />
                        <Box>
                          <Button
                            color="secondary"
                            sx={{
                              width: 30,
                              height: 30,
                              borderRadius: "50%",
                              minWidth: "unset",
                              padding: 0,
                            }}
                            onClick={handleCloseTargetMobileSubmenu}
                          >
                            <Close fontSize="medium" />
                          </Button>
                        </Box>
                      </Box>
                      {
                        <Submenu
                          handleCloseTargetMobileSubmenu={
                            handleCloseTargetMobileSubmenu
                          }
                        />
                      }
                    </Box>
                  ) : (
                    <></>
                  )}
                </MenuItem>
              ))}
              <MenuItem onClick={handleDrawerToggle} className="nav-item">
                <StandardButton
                  buttonText="Contact Us"
                  endIcon={<ArrowOutwardIcon />}
                  sx={{ mx: 2 }}
                />
              </MenuItem>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
