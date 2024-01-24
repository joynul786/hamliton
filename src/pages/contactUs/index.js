import Navbar from "parts/navbar";
import Footer from "parts/footer";
import { Box } from "@mui/material";
import HaveTalk from "component/contactUs/haveTalk";
import Faq from "component/contactUs/faq";
import ContactFooter from "component/contactUs/contactFooter";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Box py={5}>
          <HaveTalk />
          <Faq />
          <ContactFooter/>
        </Box>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
