import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const EditSale = () => {
    const { id } = useParams();
    const [sale, setSale] = useState({
        customerId: "",
        productId: "",
        storeId: "",
        dateSold: ""
    });
    const [customers, setCustomers] = useState([]);
    const [products, setProducts] = useState([]);
    const [stores, setStores] = useState([]);

    useEffect(() => {
        loadSale();
        loadCustomers();
        loadProducts();
        loadStores();
    }, []);

    const loadSale = async () => {
        const result = await axios.get(`http://localhost:5049/api/Sales/${id}`);
        setSale(result.data);
    }

    const loadCustomers = async () => {
        const result = await axios.get("http://localhost:5049/api/Customers");
        setCustomers(result.data);
    }

    const loadProducts = async () => {
        const result = await axios.get("http://localhost:5049/api/Products");
        setProducts(result.data);
    }

    const loadStores = async () => {
        const result = await axios.get("http://localhost:5049/api/Stores");
        setStores(result.data);
    }

    const handleInputChange = e => {
        const { name, value } = e.target;
        setSale(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:5049/api/Sales/${id}`, sale);
        window.location.href = "/sales";
    };

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit Sale</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Date Sold</label>
                        <input
                            type="date"
                            className="form-control"
                            name="dateSold"
                            onChange={handleInputChange} />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Customer</label>
                        <select
                            className="form-control"
                            name="customerId"
                            value={sale.customerId}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select Customer</option>
                            {customers.map(customer => (
                                <option key={customer.id} value={customer.id}>{customer.name}</option>
                            ))}
                        </select>
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Product</label>
                        <select
                            className="form-control"
                            name="productId"
                            value={sale.productId}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select Product</option>
                            {products.map(product => (
                                <option key={product.id} value={product.id}>{product.name}</option>
                            ))}
                        </select>
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Store</label>
                        <select
                            className="form-control"
                            name="storeId"
                            value={sale.storeId}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select Store</option>
                            {stores.map(store => (
                                <option key={store.id} value={store.id}>{store.name}</option>
                            ))}
                        </select>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-info">Update</button>{' '}
                    <Link className="btn btn-primary" to="/sales">Cancel</Link>
                </form>
            </div>
        </div>
    );
}

export default EditSale;
