import { React, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Addcustomer() {
    const [inputData, setInputData] = useState({ name: "", price: "" })




    function handleSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:5049/api/Products", inputData)
            .then(res => {
                alert("Data Added Successfully!");
                window.location.href = "/products";

            }).catch(err => console.log(err));

    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">
                    Create product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <lable htmlFor="name">NAME</lable>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            name="name"
                            onChange={e => setInputData({ ...inputData, name: e.target.value })} />

                    </div>
                    <br />
                    <div className="form-group">
                        <lable htmlFor="name">PRICE</lable>
                        <input
                            type="text"
                            className="form-control form-control-l"
                            name="price"
                            onChange={e => setInputData({ ...inputData, price: e.target.value })} />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-info">Create</button>{' '}
                    <Link className="btn btn-primary" to="/products">Cancel</Link>
                </form>
            </div>
        </div>
    );
}
export default Addcustomer;