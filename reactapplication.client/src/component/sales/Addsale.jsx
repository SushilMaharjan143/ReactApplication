import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Addsale() {

    const [inputData, setInputData] = useState({
        dateSold: "",
        customerId: "",
        productId: "",
        storeId: ""
    });

    const [customers, setCustomers] = useState([]);
    const [products, setProducts] = useState([]);
    const [stores, setStores] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const customersResponse = await axios.get('http://localhost:5049/api/Customers');
                setCustomers(customersResponse.data);

                const productsResponse = await axios.get('http://localhost:5049/api/Products');
                setProducts(productsResponse.data);

                const storesResponse = await axios.get('http://localhost:5049/api/Stores');
                setStores(storesResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputData({
            ...inputData,
            [name]: value
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:5049/api/Sales", inputData)
            .then(res => {
                alert("Data Added Successfully!");
                window.location.href = "/sales";
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Create Sale</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Date Sold</label>
                        <input
                            type="date"
                            className="form-control"
                            name="dateSold"
                            onChange={handleInputChange} />
                    </div>
                    <br/>
                    <div className="form-group">
                        <label>Customer</label>
                        <select
                            className="form-control"
                            name="customerId"
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select Customer</option>
                            {customers.map(customer => (
                                <option key={customer.id} value={customer.id}>{customer.name}</option>
                            ))}
                        </select>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label>Product</label>
                        <select
                            className="form-control"
                            name="productId"
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select Product</option>
                            {products.map(product => (
                                <option key={product.id} value={product.id}>{product.name}</option>
                            ))}
                        </select>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label>Store</label>
                        <select
                            className="form-control"
                            name="storeId"
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select Store</option>
                            {stores.map(store => (
                                <option key={store.id} value={store.id}>{store.name}</option>
                            ))}
                        </select>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-info">Create</button>{' '}
                    <Link className="btn btn-primary" to="/sales">Cancel</Link>
                </form>
            </div>
        </div>
    );
}

export default Addsale;
