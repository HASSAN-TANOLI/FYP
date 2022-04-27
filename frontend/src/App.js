import { useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Product Realted Routes

import ProductDetails from "./components/product/ProductDetails";

//user routes
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
import UpdateProfile from "./components/user/UpdateProfile";
import UpdatePassword from "./components/user/UpdatePassword";
import ForgotPassword from "./components/user/ForgotPassword";
import NewPassword from "./components/user/NewPassword";
import { loadUser } from "./actions/userActions";

//Vedor Routes
import VendorLogin from "./components/vendor/VendorLogin";
import RegisterVendor from "./components/vendor/RegisterVendor";
import VendorProfile from "./components/vendor/VendorProfile";
import UpdateVendorProfile from "./components/vendor/UpdateVendorProfile";
import { loadVendor } from "./actions/vendorActions";

//Protected Routes
import ProtectedRoute from "./components/route/ProtectedRoute";
import ProtectedRoutes from "./components/route/ProtectedRoutes";

//Build Pc Related Routes
import PcBuildd from "./components/pcbuild/PcBuildd";

//admin or vendor realted routes
import Dashboard from "./components/admin/Dashboard";
import ProductsList from "./components/admin/ProductList";
import NewProduct from "./components/admin/NewProduct";

import store from "./store";
import Cart from "./components/cart/Cart";
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

        <ProtectedRoutes
          path="/admin/products"
          isAdmin={true}
          component={ProductsList}
          exact
        />

        <ProtectedRoutes
          path="/admin/product/new"
          isAdmin={true}
          component={NewProduct}
          exact
        />

        <Route path="/pcbuildd" component={PcBuildd} exact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
