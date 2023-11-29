import PublicSectorHeader from "component/industries/publicSector/publicSectorHeader";
import PublicSectorInfo from "component/industries/publicSector/publicSectorInfo";
import PublicSectorProducts from "component/industries/publicSector/publicSectorProducts";
import Footer from "parts/footer";
import GetUpdate from "parts/getUpdate";
import Navbar from "parts/navbar";
import RelatedNews from "parts/relatedNews";
import React from "react";

const PublicSector = () => {
  return (
    <>
      <Navbar />
      <main>
        <PublicSectorHeader />
        <PublicSectorInfo />
        <PublicSectorProducts />
        <RelatedNews />
        <GetUpdate />
      </main>
      <Footer />
    </>
  );
};

export default PublicSector;
