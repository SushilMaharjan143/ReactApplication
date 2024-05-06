import { React } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {Link, useParams } from "react-router-dom";

function EditCustomer() {

    const { id } = useParams();
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5049/api/Sales/' + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err))

    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        axios.put('http://localhost:5049/api/Sales/' + id, data)
            .then(res => {
                alert("Data Added Successfully!");
                window.location.href = "/sales";

            }).catch((err) => {
                console.log(err)
            })

    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">
                    Edit sale</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <lable htmlFor="name">DateSold</lable>
                        <input
                            type="date"
                            className="form-control form-control-l"
                            name="dateSold"
                            value={data.dateSold}
                            onChange={e => setData({ ...data, dateSold: e.target.value })} />
                    </div>
                    <br />
                    <div className="form-group">
                        <lable htmlFor="name">CustomerId</lable>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            name="customerId"
                            value={data.customerId}
                            onChange={e => setData({ ...data, customerId: e.target.value })} />

                    </div>
                    <br />
                    <div className="form-group">
                        <lable htmlFor="name">ProductId</lable>
                        <input
                            type="text"
                            className="form-control form-control-l"
                            name="productId"
                            value={data.productId}
                            onChange={e => setData({ ...data, productId: e.target.value })} />
                    </div>
                    <br />
                    <div className="form-group">
                        <lable htmlFor="name">StoreId</lable>
                        <input
                            type="text"
                            className="form-control form-control-l"
                            name="store"
                            value={data.storeId}
                            onChange={e => setData({ ...data, storeId: e.target.value })} />
                    </div>
                    <br />

                    <button type="submit" className="btn btn-info">Update</button>{' '}
                    <Link className="btn btn-primary" to="/sales">Cancel</Link>
                    
                </form>
            </div>
        </div>
    );
}
export default EditCustomer;