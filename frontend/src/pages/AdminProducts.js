import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";





export default function AdminProductsPage(props) {


    const [products, setProducts] = useState("");



    const history = useHistory();

    // useEffect(()=>{
    //   const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    //   !userInfo || !userInfo.isAdmin && props.history.push("/")
    // }
    // )


    async function deleteHandler(id) {
        window.location.reload();
        const { data } = await axios.delete(`/products/${id}`);

    }

    useEffect(() => {

        async function getProducts() {
            const { data } = await axios.get("/products");
            setProducts(data);
            console.log(data);
        }

        getProducts();
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        !userInfo && props.history.push("/")


    }, [setProducts])
    return (<div>
        <a href="/add-product"> <h1 id="jerry">Add Product</h1> </a>




        <div class="container">
            <div class="row">
                {products && products.map(product => {

                    return <div class="col">
                        <div class="card" style={{ width: "18rem" }}>
                            <img style={{ height: "18rem" }} src={product.image} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{product.name}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-outline-primary w-100">NGN {product.price}</a>
                                <div className="d-flex justify-content-between mt-2">
                                    <a href={`/edit-product/${product._id}`}> <button className="btn btn-primary">Edit</button></a>
                                    <button onClick={() => deleteHandler(product._id)} className="btn btn-danger">Delete</button>


                                </div>
                            </div>
                        </div>
                    </div>




                })}

            </div>
        </div>





    </div>
    )

}