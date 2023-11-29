import { Box, Container, useTheme } from "@mui/material";
import BlogCard from "component/cards/blogCard";
import Footer from "parts/footer";
import Navbar from "parts/navbar";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BLOGS_DATA } from "../data";

const ResourcesDetails = () => {
  const { palette } = useTheme();
  const params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(BLOGS_DATA?.find((item) => item?.link === params?.id));
  }, [BLOGS_DATA]);

  return (
    <>
      <Navbar />
      <main>
        <section>
          <Box py={5} color="black.main">
            <Container>
              <BlogCard
                title={data?.title}
                image={data?.image}
                date={data?.date}
                overlayColor={palette?.primary?.[600]}
              />
              <Box pt={5} dangerouslySetInnerHTML={{ __html: data?.desc }} />
            </Container>
          </Box>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ResourcesDetails;
