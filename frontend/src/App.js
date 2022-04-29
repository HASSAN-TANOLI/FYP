import { useEffect, useState } from "react";
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
import updateProduct from "./components/admin/UpdateProduct";

import store from "./store";

//cart shippingInfo and order
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";



import UpdateProduct from "./components/admin/UpdateProduct";

import axios from "axios";

function App() {
  //login user will be load instantly when we reload the page

const[stripeApiKey, setStripeApiKey] = useState('')

  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(loadVendor());

    async function getStripeApiKey() {
      const {data} = await axios.get('/api/v1/stripeapi');
      setStripeApiKey(data.stripeApiKey);
    }
    getStripeApiKey();
  },[]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/search/:keyword" component={Home} />
        <Route path="/product/:id" component={ProductDetails} exact />
        <Route path="/cart" component={Cart} exact />
        <ProtectedRoute path="/shipping" component={Shipping} />

        <ProtectedRoute path="/order/confirm" component={ConfirmOrder} />

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

<ProtectedRoutes
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
          exact
        />

        <Route path="/pcbuildd" component={PcBuildd} exact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
