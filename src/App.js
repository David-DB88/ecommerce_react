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
import Registration from "./Components/Registration/Registration";
import Authorization from "./Components/Authorization/Authorization";
import CatigorProd from "./Components/Categories/CategoryProductPagePage";
import AllCustomers from "./Components/Customers/AllCustomers";
import FindTheCustomer from "./Components/Customers/FindTheCustomer";
import CreateCustomer from "./Components/Customers/CreateCustomer";
import UpadteCustomer from "./Components/Customers/UpdateCustomer";
import DeleteCustomer from "./Components/Customers/DeleteCustomer";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Menu />
        {/* className="app-wrapper-content" className="app-wrapper-c" */}
        <div>
          {/* <Route path="/" exact component={Hom} />
          <Route path="/home" component={Home} /> */}
          <Route path="/categories" component={Categories} />
          <Route path="/categories-product/:index" component={CatigorProd} />
          {/* ---------------------------------------------------------------- */}
          <Route path="/customers" component={Customers} />
          <Route path="/allcustomers" component={AllCustomers} />
          <Route path="/find_the_customer" component={FindTheCustomer} />
          <Route path="/create_customer" component={CreateCustomer} />
          <Route path="/update_customer" component={UpadteCustomer} />
          <Route path="/delete_customer" component={DeleteCustomer} />
          {/* ---------------------------------------------------------------- */}
          <Route path="/employees" component={Employees} />
          <Route path="/product" component={Product} />
          <Route path="/shippers" component={Shippers} />
          <Route path="/suppliers" component={Suppliers} />
          <Route path="/authorization" component={Authorization} />
          <Route path="/registration" component={Registration} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
