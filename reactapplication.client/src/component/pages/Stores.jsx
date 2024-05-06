import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Stores = () => {
    const [stores, setStores] = useState([]);
    useEffect(() => {
        loadStores();

    }, []);

    const loadStores = async () => {
        const result = await axios.get("http://localhost:5049/api/Stores");
        setStores(result.data);


    }

    function deleteHandle(id) {
        const conf = window.confirm("Do you want to Delete?");
        if (conf) {
            axios.delete(`http://localhost:5049/api/Stores/${id}`)
                .then(response => {
                    alert("Record has been deleted.")
                    window.location.href = "/stores";
                }).catch(error => {
                    console.log(error);
                });

        }


    }
    return (
        <div className="container">
            <br />
            <Link className="btn btn-primary w-25" to="/store/add">Add Store</Link>
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
                    {stores.map((store, index) => (
                        <tr key={store.id}>
                            <th scope="row">{index + 1}</th>

                            <td>{store.name}</td>
                            <td>{store.address}</td>
                            <td>
                                <Link className="btn btn-primary" to={`/store/edit/${store.id}`}>Edit</Link>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteHandle(store.id)} >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default Stores;