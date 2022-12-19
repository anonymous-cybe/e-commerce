import { useEffect, useState } from "react";
import axios from "axios"
import { useHistory } from "react-router-dom";


export default function ProductPage(props) {
    const productId = props.match.params.id;
    const [product, setProduct] = useState("")



    const history = useHistory();


    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        !userInfo && props.history.push("/")
    }
    )




    useEffect(() => {
        async function getProduct(productId) {
            const { data } = await axios.get(`http://localhost:5000/products/${productId}`);
            setProduct(data);
            console.log(data);
        }
        getProduct(productId);
    }, [productId])


    return <div className="productpage">
        {product && <>
            <img src={product.image} alt="" />
            <div className="product-details">
                <center>
                    <h1>{product.name}</h1>
                    <h3>{product.price}</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi suscipit nesciunt soluta enim quis voluptatibus perspiciatis vitae impedit tempore maiores? Consequuntur unde ut ipsam, est id tempora optio fugit perferendis!</p>
                </center>
            </div>
        </>
        }
    </div>
}
