import Home from "../pages/home";
import { RouteConstant } from "./constant";
import PageNotFound from "pages/404";
import AboutHamilton from "pages/about";
import ProductAndService from "pages/productService";
import Industries from "pages/industries";
import DeliveredExperience from "pages/deliveredExperience";
import ContactUs from "pages/contactUs";

export const AllRoutes = [
  {
    path: RouteConstant?.HOME,
    element: <Home />,
    name: "Home",
    exact: true,
    isSecured: false,
  },
  {
    path: RouteConstant?.ABOUT,
    element: <AboutHamilton />,
    name: "AboutHamilton",
    isSecured: false,
  },
  {
    path: RouteConstant?.PRODUCT_SERVICE,
    element: <ProductAndService />,
    name: "ProductAndService",
    isSecured: false,
  },
  {
    path: RouteConstant?.INDUSTRIES,
    element: <Industries />,
    name: "Industries",
    isSecured: false,
  },
  {
    path: RouteConstant?.DELIVERED_EXPERIENCE,
    element: <DeliveredExperience />,
    name: "DeliveredExperience",
    isSecured: false,
  },
  {
    path: RouteConstant?.CONTACT,
    element: <ContactUs />,
    name: "ContactUs",
    isSecured: false,
  },

  // 404
  {
    path: "*",
    element: <PageNotFound />,
    name: "PageNotFound",
    exact: false,
    isSecured: false,
  },
];
