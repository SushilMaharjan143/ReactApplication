import { React, useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const Customers = () => {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        loadCustomers();

    }, []);

    const loadCustomers = async () => {
        const result = await axios.get("http://localhost:5049/api/Customers");
        setCustomers(result.data);

        
    }

    function deleteHandle(id) {
        const conf = window.confirm("Do you want to Delete?");
        if (conf) {
            axios.delete(`http://localhost:5049/api/Customers/${id}`)
                .then(response => {
                    alert("Record has been deleted.")
                    window.location.href = "/";
                }).catch(error => {
                    console.log(error);
                });

        }


    }
    return (
        <div className="container">
            <br/>
            <Link className="btn btn-primary w-25" to="/customer/add">Add Customer</Link>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Actions</th>
                        <th scope="col">Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer, index) => (
                        <tr key={customer.id}>
                            <th scope="row">{index + 1}</th>

                            <td>{customer.name}</td>
                            <td>{customer.address}</td>
                            <td>
                                <Link className="btn btn-primary" to={`/customer/edit/${customer.id}`}>Edit</Link>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteHandle(customer.id)} >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    
}

export default Customers;