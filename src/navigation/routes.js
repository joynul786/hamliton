import InternetOfThings from "pages/productAndSolution/internetOfThings";
import Home from "../pages/home";
import { RouteConstant } from "./constant";
import ExperienceTheCloud from "pages/productAndSolution/experienceTheCloud";
import Automobile from "pages/industries/automobile";
import FinancialServices from "pages/industries/financialServices";
import HealthCare from "pages/industries/healthCare";
import Hospitality from "pages/industries/hospitality";
import ECommerce from "pages/industries/eCommerce";
import ITAndICT from "pages/industries/ITAndICT";
import Manufacture from "pages/industries/manufacture";
import NPO from "pages/industries/NPO";
import PublicSector from "pages/industries/publicSector";
import Telecommunications from "pages/industries/telecommunications";
import Transport from "pages/industries/transport";
import Schools from "pages/industries/schools";
import CustomerStories from "pages/customerStories";
import CustomerStoriesDetails from "pages/customerStories/details";
import Resources from "pages/resources";
import ResourcesDetails from "pages/resources/details";
import TermsAndConditions from "pages/termsAndConditions";
import CallCenterServices from "pages/productAndSolution/callCenterServices";
import MobileServices from "pages/productAndSolution/mobileServices";
import TheWorldOfMobileServices from "pages/productAndSolution/mobileServices/theWorldOfMobileServices";
import LaunchMobileBrand from "pages/productAndSolution/mobileServices/launchMobileBrand";
import LightMVNO from "pages/productAndSolution/mobileServices/lightMVNO";
import FullMVNO from "pages/productAndSolution/mobileServices/fullMVNO";
import MNVE from "pages/productAndSolution/mobileServices/MNVE";
import OperationSupportSystem from "pages/productAndSolution/mobileServices/operationSupportSystem";
import BusinessSupportSystem from "pages/productAndSolution/mobileServices/businessSupportSystem";
import PageNotFound from "pages/404";

export const AllRoutes = [
  {
    path: RouteConstant?.HOME,
    element: <Home />,
    name: "Home",
    exact: true,
    isSecured: false,
  },

  // PRODUCT & SOLUTION
  {
    path: RouteConstant?.INTERNET_OF_THINGS,
    element: <InternetOfThings />,
    name: "InternetOfThings",
    exact: true,
    isSecured: false,
  },
  {
    path: RouteConstant?.EXPERIENCE_THE_CLOUD,
    element: <ExperienceTheCloud />,
    name: "ExperienceTheCloud",
    exact: true,
    isSecured: false,
  },
  {
    path: RouteConstant?.CALL_CENTER_SERVICES,
    element: <CallCenterServices />,
    name: "CallCenterServices",
    exact: true,
    isSecured: false,
  },
  {
    path: RouteConstant?.MOBILE_SERVICES,
    element: <MobileServices />,
    name: "MobileServices",
    exact: true,
    isSecured: false,
  },
  {
    path: RouteConstant?.MOBILE_SERVICES_THE_WORLD_OF_MOBILE_SERVICES,
    element: <TheWorldOfMobileServices />,
    name: "TheWorldOfMobileServices",
    exact: true,
    isSecured: false,
  },
  {
    path: RouteConstant?.MOBILE_SERVICES_LAUNCH_YOUR_OWN_MOBILE_BRAND,
    element: <LaunchMobileBrand />,
    name: "LaunchMobileBrand",
    exact: true,
    isSecured: false,
  },
  {
    path: RouteConstant?.MOBILE_SERVICES_LIGHT_MVNO,
    element: <LightMVNO />,
    name: "LightMVNO",
    exact: true,
    isSecured: false,
  },
  {
    path: RouteConstant?.MOBILE_SERVICES_FULL_MVNO,
    element: <FullMVNO />,
    name: "FullMVNO",
    exact: true,
    isSecured: false,
  },
  {
    path: RouteConstant?.MOBILE_SERVICES_MNVE,
    element: <MNVE />,
    name: "MNVE",
    exact: true,
    isSecured: false,
  },
  {
    path: RouteConstant?.MOBILE_SERVICES_OPERATION_SUPPORT_SYSTEM,
    element: <OperationSupportSystem />,
    name: "OperationSupportSystem",
    exact: true,
    isSecured: false,
  },
  {
    path: RouteConstant?.MOBILE_SERVICES_BUSINESS_SUPPORT_SYSTEM,
    element: <BusinessSupportSystem />,
    name: "BusinessSupportSystem",
    exact: true,
    isSecured: false,
  },

  // INDUSTRIES
  {
    path: RouteConstant?.AUTOMOBILE,
    element: <Automobile />,
    name: "Automobile",
    exact: true,
    isSecured: false,
  },
  {
    path: RouteConstant?.E_COMMERCE,
    element: <ECommerce />,
    name: "ECommerce",
    exact: true,
    isSecured: false,
  },
  {
    path: RouteConstant?.FINANCIAL_SERVICES,
    element: <FinancialServices />,
    name: "FinancialServices",
    exact: true,
    isSecured: false,
  },
  {
    path: RouteConstant?.HEALTH_CARE,
    element: <HealthCare />,
    name: "HealthCare",
    exact: true,
    isSecured: false,
  },
  {
    path: RouteConstant?.HOSPITALITY,
    element: <Hospitality />,
    name: "Hospitality",
    exact: true,
    isSecured: false,
  },
  {
    path: RouteConstant?.IT_ICT,
    element: <ITAndICT />,
    name: "ITAndICT",
    exact: true,
    isSecured: false,
  },
  {
    path: RouteConstant?.MANUFACTURE,
    element: <Manufacture />,
    name: "Manufacture",
    exact: true,
    isSecured: false,
  },
  {
    path: RouteConstant?.NPO,
    element: <NPO />,
    name: "NPO",
    exact: true,
    isSecured: false,
  },
  {
    path: RouteConstant?.PUBLIC_SECTOR,
    element: <PublicSector />,
    name: "PublicSector",
    exact: true,
    isSecured: false,
  },
  {
    path: RouteConstant?.ED_TECH,
    element: <Schools />,
    name: "Schools",
    exact: true,
    isSecured: false,
  },
  {
    path: RouteConstant?.TELECOMMUNICATIONS,
    element: <Telecommunications />,
    name: "Telecommunications",
    exact: true,
    isSecured: false,
  },
  {
    path: RouteConstant?.TRANSPORT_LOGISTIC,
    element: <Transport />,
    name: "Transport",
    exact: true,
    isSecured: false,
  },

  // CUSTOMER STORIES
  {
    path: RouteConstant?.CUSTOMER_STORIES,
    element: <CustomerStories />,
    name: "CustomerStories",
    exact: true,
    isSecured: false,
  },
  {
    path: RouteConstant?.CUSTOMER_STORIES_DETAILS,
    element: <CustomerStoriesDetails />,
    name: "CustomerStoriesDetails",
    exact: true,
    isSecured: false,
  },

  // RESOURCES
  {
    path: RouteConstant?.RESOURCES,
    element: <Resources />,
    name: "Resources",
    exact: true,
    isSecured: false,
  },
  {
    path: RouteConstant?.RESOURCES_DETAILS,
    element: <ResourcesDetails />,
    name: "ResourcesDetails",
    exact: true,
    isSecured: false,
  },

  // TERMS CONDITIONS
  {
    path: RouteConstant?.TERMS_CONDITIONS,
    element: <TermsAndConditions />,
    name: "TermsAndConditions",
    exact: true,
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
