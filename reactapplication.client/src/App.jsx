import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Customers from "./component/pages/Customers";
import Stores from "./component/pages/Stores";
import Products from "./component/pages/Products";
import Sales from "./component/pages/Sales";
import Navbar from "./component/layout/Navbar";
import PageNotFound from "./component/pages/PageNotFound";
import Addcustomer from "./component/customers/Addcustomer";
import EditCustomer from "./component/customers/EditCustomer";
import Addproduct from "./component/products/Addproduct";
import EditProduct from "./component/products/EditProduct";
import Addstore from "./component/stores/Addstore";
import EditStore from "./component/stores/EditStore";
import Addsale from "./component/sales/Addsale";
import EditSale from "./component/sales/EditSale";
import {Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Customers/>} />
                <Route exact path="/products" element={<Products/>} />
                <Route exact path="/stores" element={<Stores/>} />
                <Route exact path="/sales" element={<Sales />} />
                <Route exact path="/customer/add" element={<Addcustomer />} />
                <Route exact path="/customer/edit/:id" element={<EditCustomer />} />
                <Route exact path="/product/add" element={<Addproduct />} />
                <Route exact path="/product/edit/:id" element={<EditProduct />} />
                <Route exact path="/store/add" element={<Addstore />} />
                <Route exact path="/store/edit/:id" element={<EditStore />} />
                <Route exact path="/sale/add" element={<Addsale />} />
                <Route exact path="/sale/edit/:id" element={<EditSale />} />
                <Route exact path="*" element={<PageNotFound />} />


            </Routes>
        </div>

        
           
    );
}

export default App;
