import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        loadProducts();

    }, []);

    const loadProducts = async () => {
        const result = await axios.get("http://localhost:5049/api/Products");
        setProducts(result.data);


    }

    function deleteHandle(id) {
        const conf = window.confirm("Do you want to Delete?");
        if (conf) {
            axios.delete(`http://localhost:5049/api/Products/${id}`)
                .then(response => {
                    alert("Record has been deleted.")
                    window.location.href = "/products";
                }).catch(error => {
                    console.log(error);
                });

        }


    }
    return (
        <div className="container">
            <br />
            <Link className="btn btn-primary w-25" to="/product/add">Add Product</Link>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                        <th scope="col">Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <th scope="row">{index + 1}</th>

                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <Link className="btn btn-primary" to={`/product/edit/${product.id}`}>Edit</Link>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteHandle(product.id)} >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default Products;