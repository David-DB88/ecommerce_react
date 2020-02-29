import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import Customers from "./Components/Customers/Customers";
import Categories from "./Components/Categories/Categories";
import Employees from "./Components/Employees/Employees";
import Product from "./Components/Product/Product";
import Shippers from "./Components/Shippers/Shippers";
import Suppliers from "./Components/Suppliers/Suppliers";
// import Home from "./Components/";
import Menu from "./Components/Menu";
import Registration from "./Components/Registration";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Menu />
        {/* className="app-wrapper-content" className="app-wrapper-c" */}
        <div>
          {/* <Route path="/" exact component={Hom} />
          <Route path="/home" component={Home} /> */}
          <Route path="/registration" component={Registration} />
          <Route path="/categories" component={Categories} />
          <Route path="/customers" component={Customers} />
          <Route path="/employees" component={Employees} />
          <Route path="/product" component={Product} />
          <Route path="/shippers" component={Shippers} />
          <Route path="/suppliers" component={Suppliers} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
