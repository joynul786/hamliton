import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const topFooterList = [
  {
    label: "About",
    desc: "Lorem ipsum dolor sit amet consectetur. Sagittis donec pretium urna euismod. Metus scelerisque mi ac laoreet dolor. Mattis arcu a maecenas amet. Mauris senectus dui lectus felis in est vestibulum. Sed lobortis et cursus turpis.",
  },
  {
    label: "Contact Us",
    desc: "Lorem ipsum dolor sit amet consectetur. Sagittis donec pretium urna euismod. Metus scelerisque mi ac laoreet dolor. Mattis arcu a maecenas amet. Mauris senectus dui lectus felis in est vestibulum. Sed lobortis et cursus turpis.",
  },
  {
    label: "Resources",
    desc: "Lorem ipsum dolor sit amet consectetur. Sagittis donec pretium urna euismod. Metus scelerisque mi ac laoreet dolor. Mattis arcu a maecenas amet. Mauris senectus dui lectus felis in est vestibulum. Sed lobortis et cursus turpis.",
  },
  {
    label: "Company Information",
    desc: "Lorem ipsum dolor sit amet consectetur. Sagittis donec pretium urna euismod. Metus scelerisque mi ac laoreet dolor. Mattis arcu a maecenas amet. Mauris senectus dui lectus felis in est vestibulum. Sed lobortis et cursus turpis.",
  },
  {
    label: "Partnerships",
    desc: "Lorem ipsum dolor sit amet consectetur. Sagittis donec pretium urna euismod. Metus scelerisque mi ac laoreet dolor. Mattis arcu a maecenas amet. Mauris senectus dui lectus felis in est vestibulum. Sed lobortis et cursus turpis.",
  },
  {
    label: "Ad Gallery",
    desc: "Lorem ipsum dolor sit amet consectetur. Sagittis donec pretium urna euismod. Metus scelerisque mi ac laoreet dolor. Mattis arcu a maecenas amet. Mauris senectus dui lectus felis in est vestibulum. Sed lobortis et cursus turpis.",
  },
];

const productNavList = [
  { label: "Home", link: "" },
  { label: "Products & Services", link: "" },
  { label: "Business Solutions", link: "" },
  { label: "Support", link: "" },
];
const OtherNavList = [
  { label: "About", link: "" },
  { label: "Company Information", link: "" },
  { label: "Resources", link: "" },
  { label: "Partnership", link: "" },
  { label: "Contact us", link: "" },
];

const socialNavList = [
  { label: "Facebook", link: "https://www.facebook.com/hamiltel" },
  { label: "Twitter", link: "https://twitter.com/hamiltel1" },
  { label: "Instagram", link: "https://www.instagram.com/hamiltontelecom/" },
  { label: "Blog", link: "" },
];

const companyNavList = [
  { label: "About", link: "" },
  { label: "Labs", link: "" },
  { label: "Careers", link: "" },
  { label: "Press kit", link: "" },
];

const supportNavList = [
  { label: "Support Center", link: "" },
  { label: "Release Notes", link: "" },
  { label: "Feature Request", link: "" },
  { label: "FAQ", link: "" },
];

const Footer = () => {
  return (
    <footer>
      <Box
        bgcolor="dark.main"
        color="text.grey"
        py={10}
        className="ff-open-sans"
      >
        <Container maxWidth="xl">
          <Box>
            <Grid container spacing={10}>
              {/* {topFooterList?.map(({ label, desc }, i) => (
                <Grid item key={i} xs={12} sm={6} md={4}>
                  <Typography variant="body1" fontWeight={600}>
                    {label}
                  </Typography>
                  <Typography variant="body2" fontWeight={400} mt={2}>
                    {desc}
                  </Typography>
                </Grid>
              ))} */}
              <Grid item xs={12} sm={12} md={2}>
                <Typography variant="body2" fontWeight={400}>
                  &copy; {new Date().getFullYear()}. All rights reserved.
                  <br /> Terms of Service — Privacy Policy
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={10}>
                <Box>
                  <Grid container spacing={{ xs: 5, sm: 2 }}>
                    {/* Product Nav List */}
                    <Grid item xs={6} sm={2.4}>
                      <Typography variant="body1" fontWeight={600}>
                        Product
                      </Typography>
                      <List sx={{ pt: 2, pb: 0 }}>
                        {productNavList?.map(({ label, link }, i) => (
                          <ListItem key={i} sx={{ px: 0 }}>
                            <Link
                              to={link}
                              style={{
                                color: "inherit",
                                fontSize: 14,
                                fontWeight: 400,
                              }}
                            >
                              {label}
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                    <Grid item xs={6} sm={2.4}>
                      <Typography variant="body1" fontWeight={600}>
                        Other
                      </Typography>
                      <List sx={{ pt: 2, pb: 0 }}>
                        {OtherNavList?.map(({ label, link }, i) => (
                          <ListItem key={i} sx={{ px: 0 }}>
                            <Link
                              to={link}
                              style={{
                                color: "inherit",
                                fontSize: 14,
                                fontWeight: 400,
                              }}
                            >
                              {label}
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                    {/* Scial Nav List */}
                    <Grid item xs={6} sm={2.4}>
                      <Typography variant="body1" fontWeight={600}>
                        Social
                      </Typography>
                      <List sx={{ pt: 2, pb: 0 }}>
                        {socialNavList?.map(({ label, link }, i) => (
                          <ListItem key={i} sx={{ px: 0 }}>
                            <Link
                              to={link}
                              style={{
                                color: "inherit",
                                fontSize: 14,
                                fontWeight: 400,
                              }}
                            >
                              {label}
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                    {/* Company Nav List */}
                    <Grid item xs={6} sm={2.4}>
                      <Typography variant="body1" fontWeight={600}>
                        Company
                      </Typography>
                      <List sx={{ pt: 2, pb: 0 }}>
                        {companyNavList?.map(({ label, link }, i) => (
                          <ListItem key={i} sx={{ px: 0 }}>
                            <Link
                              to={link}
                              style={{
                                color: "inherit",
                                fontSize: 14,
                                fontWeight: 400,
                              }}
                            >
                              {label}
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                    {/* Support Nav List */}
                    <Grid item xs={6} sm={2.4}>
                      <Typography variant="body1" fontWeight={600}>
                        Support
                      </Typography>
                      <List sx={{ pt: 2, pb: 0 }}>
                        {supportNavList?.map(({ label, link }, i) => (
                          <ListItem key={i} sx={{ px: 0 }}>
                            <Link
                              to={link}
                              style={{
                                color: "inherit",
                                fontSize: 14,
                                fontWeight: 400,
                              }}
                            >
                              {label}
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
