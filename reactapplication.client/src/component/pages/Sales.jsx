import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Sales = () => {
    const [sales, setSales] = useState([]);
    useEffect(() => {
        loadSales();

    }, []);

    const loadSales = async () => {
        const result = await axios.get("http://localhost:5049/api/Sales");
        console.log(result);
        setSales(result.data);


    }

    function deleteHandle(id) {
        const conf = window.confirm("Do you want to Delete?");
        if (conf) {
            axios.delete(`http://localhost:5049/api/Sales/${id}`)
                .then(response => {
                    alert("Record has been deleted.")
                    window.location.href = "/sales";
                }).catch(error => {
                    console.log(error);
                });

        }


    }
    return (
        <div className="container">
            <br></br>
            <Link className="btn btn-primary w-25" to="/sale/add">Add Sale</Link>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">CustomerId</th>
                        <th scope="col">ProductId</th>
                        <th scope="col">StoreId</th>
                        <th scope="col">DateSold</th>
                        <th scope="col">Actions</th>
                        <th scope="col">Actions</th>


                    </tr>
                </thead>
                <tbody>
                    {sales.map((sale, index) => (
                        <tr key={sale.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{sale.customerId}</td>
                            <td>{sale.productId}</td>
                            <td>{sale.storeId}</td>
                            <td>{sale.dateSold}</td>

                            <td>
                                <Link className="btn btn-primary" to={`/sale/edit/${sale.id}`}>Edit</Link>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteHandle(sale.id)} >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default Sales;