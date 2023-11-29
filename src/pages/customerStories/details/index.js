import CustomerStoriesCloud from "component/customerStories/details/customerStoriesCloud";
import CustomerStoriesM1mvne from "component/customerStories/details/customerStoriesEloM1mvne";
import CustomerStoriesSetroc from "component/customerStories/details/customerStoriesEloSetroc";
import CustomerStoriesEloWifi from "component/customerStories/details/customerStoriesEloWifi";
import CustomerStoriesSmartCity from "component/customerStories/details/customerStoriesSmartCity";
import CustomerStoriesTelecall from "component/customerStories/details/customerStoriesTelecall";
import Footer from "parts/footer";
import Navbar from "parts/navbar";
import React from "react";
import { useParams } from "react-router-dom";

const CustomerStoriesDetails = () => {
  const params = useParams();

  return (
    <>
      <Navbar />
      <main>
        {params?.id === "cayon-cloud-MVNE-MVNA-MVNO" ? (
          <CustomerStoriesCloud />
        ) : params?.id === "elo-wi-fi-enterprise" ? (
          <CustomerStoriesEloWifi />
        ) : params?.id === "m1mvne-mvno" ? (
          <CustomerStoriesM1mvne />
        ) : params?.id === "setrocmvne-mvna-mvno" ? (
          <CustomerStoriesSetroc />
        ) : params?.id === "smart-city-kyiv-internet-of-things" ? (
          <CustomerStoriesSmartCity />
        ) : params?.id === "telecallmvne-mvna-mvno" ? (
          <CustomerStoriesTelecall />
        ) : (
          <></>
        )}
      </main>
      <Footer />
    </>
  );
};

export default CustomerStoriesDetails;
