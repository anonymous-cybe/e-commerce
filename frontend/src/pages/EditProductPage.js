import axios from "axios";
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";





export default function EditProductPage(props) {


    const productId = props.match.params.id;


    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0);



    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        !userInfo && props.history.push("/")
    }
    )




    async function getProduct(productId) {
        const { data } = await axios.get(`http://localhost:5000/products/${productId}`);
        setName(data.name);
        setImage(data.image);
        setPrice(data.price);
    }



    useEffect(() => {
        getProduct(productId);
    }, [productId])

    const history = useHistory();



    async function submitHandler(e) {

        e.preventDefault();
        history.push("/admin-products");

        const { data } = await axios.put(`http://localhost:5000/products/${productId}`, { name, image, price })

        history.push("/admin-products");
    }

    return <div className="input">
        <form onSubmit={submitHandler} className="form">
            <center><h3>ADD PRODUCT</h3></center>
            <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Product Name" className="form-control" />
            <input value={image} onChange={e => setImage(e.target.value)} type="text" placeholder="Product Image" className="form-control" />
            <input value={price} onChange={e => setPrice(e.target.value)} type="number" placeholder="Product Price" className="form-control" />
            <button id="jago" type="submit" >UPDATE</button>
        </form>
    </div>
}