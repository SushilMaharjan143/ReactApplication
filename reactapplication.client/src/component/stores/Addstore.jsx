import { React, useState } from "react";
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";

function Addstore() {
    const [inputData, setInputData] = useState({ name: "", address: "" })



    const navigat = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:5049/api/Stores", inputData)
            .then(res => {
                alert("Data Added Successfully!");
                window.location.href = "/stores";

            }).catch(err => console.log(err));

    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">
                    Create store</h2>
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
                        <lable htmlFor="name">ADDRESS</lable>
                        <input
                            type="text"
                            className="form-control form-control-l"
                            name="address"
                            onChange={e => setInputData({ ...inputData, address: e.target.value })} />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-info">Create</button>{' '}
                    <Link className="btn btn-primary" to="/stores">Cancel</Link>
                </form>
            </div>
        </div>
    );
}
export default Addstore;