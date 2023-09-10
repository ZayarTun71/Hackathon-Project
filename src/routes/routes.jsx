import React from "react";
import { Route } from "react-router-dom";
import Cookies from "js-cookie";

const Routes = () => {
  const token = Cookies.get("token");
  const role = Cookies.get("role");

  return (
    <>
      {token !== undefined && role !== undefined && (
        <Route>
          {/* Your route content here */}
        </Route>
      )}
    </>
  );
};

export default Routes;
