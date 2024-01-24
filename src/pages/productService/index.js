import Navbar from "parts/navbar";
import Footer from "parts/footer";
import ProductTop from "component/productService/productTop";
import CallCenter from "component/productService/callCenter";
import BusinessSolution from "component/productService/businessSolution";
import InternetService from "component/productService/internetService";
import GetUpdate from "parts/getUpdate";
const ProductAndService = () => {
  return (
    <div>
      <Navbar />
      <main>
        <ProductTop />
        <CallCenter />
        <BusinessSolution/>
        <InternetService/>
        <GetUpdate/>
      </main>
      <Footer />
    </div>
  );
};

export default ProductAndService;
