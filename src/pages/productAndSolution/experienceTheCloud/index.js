import ExperienceTheCloudFaq from "component/productAndSolution/experienceTheCloud/experienceTheCloudFaq";
import ExperienceTheCloudHeader from "component/productAndSolution/experienceTheCloud/experienceTheCloudHeader";
import ExperienceTheCloudInfo from "component/productAndSolution/experienceTheCloud/experienceTheCloudInfo";
import Footer from "parts/footer";
import Navbar from "parts/navbar";
import React from "react";

const ExperienceTheCloud = () => {
  return (
    <>
      <Navbar />
      <main>
        <ExperienceTheCloudHeader />
        <ExperienceTheCloudInfo />
        <ExperienceTheCloudFaq />
      </main>
      <Footer />
    </>
  );
};

export default ExperienceTheCloud;
