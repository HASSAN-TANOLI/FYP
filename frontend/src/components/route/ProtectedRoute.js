import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  //we will get component from App.js which is profile  as props and rest will be all the other props like path, exact etc.
  const { isAuthenticatedUser, loading, user } = useSelector(
    (state) => state.auth
  );

  const { isAuthenticatedVendor, loadingg, vendor } = useSelector(
    (state) => state.vendor
  );

  return (
    <Fragment>
      {loading === false && (
        <Route
          {...rest}
          render={(props) =>
            !isAuthenticatedUser ? (
              <Redirect to="/login" />
            ) : (
              <Component {...props} />
            )
          }
        />
      )}

      {loadingg === false && (
        <Route
          {...rest}
          render={(props) =>
            !isAuthenticatedVendor ? (
              <Redirect to="/loginvendor" />
            ) : (
              <Component {...props} />
            )
          }
        />
      )}
    </Fragment>
  );
};

export default ProtectedRoute;
