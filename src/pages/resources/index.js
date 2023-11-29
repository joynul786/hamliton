import { Box, Container, Grid, useTheme } from "@mui/material";
import Footer from "parts/footer";
import Navbar from "parts/navbar";
import React from "react";
import { BLOGS_DATA } from "./data";
import BlogCard from "component/cards/blogCard";
import Title from "component/title";

const Resources = () => {
  const { palette } = useTheme();
  return (
    <>
      <Navbar />
      <main>
        <section>
          <Box py={10} color="black.main">
            <Container>
              <Box py={5}>
                <Title title="Blog" fontSize={36} fontWeight={500} />
              </Box>
              <Box>
                <Grid container spacing={3}>
                  {BLOGS_DATA?.map(({ title, date, link, image }, i) => (
                    <Grid item xs={12} key={i}>
                      <BlogCard
                        title={title}
                        date={date}
                        image={image}
                        link={link}
                        overlayColor={
                          i % 2 === 0
                            ? palette?.primary?.[600]
                            : palette?.black?.[600]
                        }
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Container>
          </Box>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Resources;
