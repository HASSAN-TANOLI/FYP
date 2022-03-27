import { useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetails from "./components/product/ProductDetails";
import Login from "./components/user/Login";
import vendorLogin from "./components/user/vendorLogin";
import Register from "./components/user/Register";

import { loadUser } from "./actions/userActions";
import store from "./store";

function App() {
  //login user will be load instantly when we reload the page

  useEffect(() => {
    store.dispatch(loadUser());
  });

  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/search/:keyword" component={Home} />
        <Route path="/product/:id" component={ProductDetails} exact />
        <Route path="/login" component={Login} />
        <Route path="/vendorlogin" component={vendorLogin} />
        <Route path="/register" component={Register} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
