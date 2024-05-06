import { React, useState } from "react";
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";

function Addsale() {
    const [inputData, setInputData] = useState({
        customerId: "",
        productId: "",
        storeId: "",
        dateSold: ""
    })



    const navigat = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:5049/api/Sales", inputData)
            .then(res => {
                alert("Data Added Successfully!");
                window.location.href = "/sales";

            }).catch(err => console.log(err));

    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">
                    Create sale</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <lable htmlFor="name">DateSold</lable>
                        <input
                            type="date"
                            className="form-control form-control-l"
                            name="dateSold"
                            onChange={e => setInputData({ ...inputData, dateSold: e.target.value })} />
                    </div>
                    <br/>
                    <div className="form-group">
                        <lable htmlFor="name">CustomerId</lable>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            name="customerId"
                            onChange={e => setInputData({ ...inputData, customerId: e.target.value })} />

                    </div>
                    <br />
                    <div className="form-group">
                        <lable htmlFor="name">ProductId</lable>
                        <input
                            type="text"
                            className="form-control form-control-l"
                            name="productId"
                            onChange={e => setInputData({ ...inputData, productId: e.target.value })} />
                    </div>
                    <br />
                    <div className="form-group">
                        <lable htmlFor="name">StoreId</lable>
                        <input
                            type="text"
                            className="form-control form-control-l"
                            name="storeId"
                            onChange={e => setInputData({ ...inputData, storeId: e.target.value })} />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-info">Create</button>{' '}
                    <Link className="btn btn-primary" to="/sales">Cancel</Link>
                </form>
            </div>
        </div>
    );
}
export default Addsale;