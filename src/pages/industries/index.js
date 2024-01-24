import Navbar from "parts/navbar";
import Footer from "parts/footer";
import GetUpdate from "parts/getUpdate";
import IndustriesTop from "component/industries/industriesTop";
import IndustriesMid from "component/industries/industriesMid";
const Industries = () => {
  return (
    <div>
      <Navbar />
      <main>
        <IndustriesTop/>
        <IndustriesMid/>
        <GetUpdate />
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
