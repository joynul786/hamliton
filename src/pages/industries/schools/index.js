import SchoolsHeader from "component/industries/schools/schoolsHeader";
import SchoolsInfo from "component/industries/schools/schoolsInfo";
import Footer from "parts/footer";
import GetUpdate from "parts/getUpdate";
import Navbar from "parts/navbar";
import RelatedNews from "parts/relatedNews";
import React from "react";

const Schools = () => {
  return (
    <>
      <Navbar />
      <main>
        <SchoolsHeader />
        <SchoolsInfo />
        <RelatedNews />
        <GetUpdate />
      </main>
      <Footer />
    </>
  );
};

export default Schools;
