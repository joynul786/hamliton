import { Route } from "react-router-dom";
// import PrivateRoute from "./privateRoute";

const RoutingFunction = (route, index) => {
  if (route.children) {
    return (
      <Route
        exact={route.exact || false}
        path={route.path}
        index={route.index || false}
        key={route.name || index}
        element={route.element || undefined}
      >
        {route.children.map((r) => RoutingFunction(r))}
      </Route>
    );
  } else {
    return (
      <Route
        exact={route.exact || false}
        path={route.path}
        index={route.index || false}
        element={
          route.element
          // route.isSecured ? (
          //   <PrivateRoute>{route.element}</PrivateRoute>
          // ) : (
          //   route.element
          // )
        }
        key={route.name || index}
      />
    );
  }
};
export default RoutingFunction;
