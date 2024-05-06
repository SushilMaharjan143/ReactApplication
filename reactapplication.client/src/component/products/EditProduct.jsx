import { React } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {Link, useParams } from "react-router-dom";

function EditProduct() {

    const { id } = useParams();
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5049/api/Products/' + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err))

    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        axios.put('http://localhost:5049/api/Products/' + id, data)
            .then(res => {
                alert("Data Added Successfully!");
                window.location.href = "/products";

            }).catch((err) => {
                console.log(err)
            })

    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">
                    Edit product</h2>
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <lable htmlFor="name">NAME</lable>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            name="name"
                            value={data.name}
                            onChange={e => setData({ ...data, name: e.target.value })} />


                    </div>
                    <br />
                    <div className="form-group">
                        <lable htmlFor="name">PRICE</lable>
                        <input
                            type="text"
                            className="form-control form-control-l"
                            name="price"
                            value={data.price}
                            onChange={e => setData({ ...data, price: e.target.value })} />

                    </div>
                    <br />
                    <button type="submit" className="btn btn-info">Update</button>{' '}
                    <Link className="btn btn-primary" to="/products">Cancel</Link>
                </form>
            </div>
        </div>
    );
}
export default EditProduct;