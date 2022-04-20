import { useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetails from "./components/product/ProductDetails";
import Login from "./components/user/Login";
import VendorLogin from "./components/vendor/VendorLogin";
import RegisterVendor from "./components/vendor/RegisterVendor";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
import VendorProfile from "./components/vendor/VendorProfile";
import UpdateVendorProfile from "./components/vendor/UpdateVendorProfile";
import ProtectedRoute from "./components/route/ProtectedRoute";
import UpdateProfile from "./components/user/UpdateProfile";
import UpdatePassword from "./components/user/UpdatePassword";
import ForgotPassword from "./components/user/ForgotPassword";
import NewPassword from "./components/user/NewPassword";
import Cart from "./components/cart/Cart";
import { loadVendor } from "./actions/vendorActions";
import { loadUser } from "./actions/userActions";
import ProtectedRoutes from "./components/route/ProtectedRoutes";

//admin or vendor import
import Dashboard from "./components/admin/Dashboard";

import store from "./store";

function App() {
  //login user will be load instantly when we reload the page

  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(loadVendor());
  });

  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/search/:keyword" component={Home} />
        <Route path="/product/:id" component={ProductDetails} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/login" component={Login} />
        <Route path="/loginvendor" component={VendorLogin} />
        <Route path="/registervendor" component={RegisterVendor} />

        <Route path="/register" component={Register} />
        <Route path="/userpassword/forgot" component={ForgotPassword} exact />
        <Route
          path="/userpassword/reset/:token"
          component={NewPassword}
          exact
        />
        <Route path="/vendor/update" component={UpdateVendorProfile} exact />
        <ProtectedRoute path="/user" component={Profile} exact />
        <ProtectedRoute path="/user/update" component={UpdateProfile} exact />
        <ProtectedRoute
          path="/password/update"
          component={UpdatePassword}
          exact
        />

        <ProtectedRoutes path="/vendor" component={VendorProfile} exact />

        <ProtectedRoutes
          path="/dashboard"
          isAdmin={true}
          component={Dashboard}
          exact
        />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
