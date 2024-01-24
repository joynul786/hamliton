import Navbar from "parts/navbar";
import ContactUs from "parts/contactUs";
import Footer from "parts/footer";
import AboutTop from "component/about/aboutTop";
import MissionVision from "component/about/missionVision";
import OurValues from "component/about/values";
const AboutHamilton = () => {
  return (
    <div>
      <Navbar />
      <main>
        <AboutTop/>
        <MissionVision/>
        <OurValues/>
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
};

export default AboutHamilton;
