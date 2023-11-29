import React, { useEffect } from "react";
import { Routes, useLocation } from "react-router-dom";
import { AllRoutes } from "./routes";
import RoutingFunction from "./routingFunction";

const Navigation = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let listener = () => {
      window.scrollTo(0, 0);
    };
    listener();
    return () => (listener = null);
  }, [pathname]);
  return <Routes>{AllRoutes.map((r) => RoutingFunction(r))}</Routes>;
};

export default Navigation;
