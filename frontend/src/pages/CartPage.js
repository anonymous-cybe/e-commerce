import { useEffect } from "react";
import "./CartPage.css";
import axios from "axios"
export default function CartPage(props) {
    const prodId = props.match.params.id;
    let qty = 1;




    let cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

    const addToCart = async (prodId, qty) => {
        const { data } = await axios.get(`/products/${prodId}`)
        let item = {
            _id: data._id,
            name: data.name,
            price: data.price,
            image: data.image,
            qty
        }

        let existingItem = cartItems.find(x => x._id === item._id)
        if (existingItem) {
            cartItems = cartItems.map(x => x._id === existingItem._id ? item : x)
        } else {
            cartItems = [...cartItems, item];
        }
        item.price *= qty

        localStorage.setItem("cartItems", JSON.stringify(cartItems))
        props.history.push("/cart");
        window.location.reload();


    }

    const deleteItemHandler = id => {
        cartItems = cartItems.filter(x => x._id !== id);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        window.location.reload();

    }

    useEffect(() => {
        if (prodId) {
            addToCart(prodId, qty)
        }
    }, [prodId])

    const deleteHandler = () => {
        localStorage.removeItem("cartItems");
        window.location.reload();
    }












    return <div className="cartpage">


        {cartItems.length === 0 ? <div className="alert alert-primary cart-items">Cart Empty</div>
            :
            <table className="table cart-items">
                <h1>{cartItems && cartItems.length}</h1>
                <tr>
                    <th>Image</th> <th>Name</th> <th>Price</th> <th>Quantity</th>
                </tr>

                {cartItems.map(item => {
                    return <tr key={item._id}>
                        <td><img src={item.image} alt="" /></td> <td>{item.name}</td> <td>{item.price}</td>
                        <td>
                            {item.qty}
                            <select name="" id="" onChange={(e) => addToCart(item._id, e.target.value)}>
                                {[...Array(100).keys()].map(x => {
                                    return <option key={x} value={x + 1}>{x + 1}</option>
                                })}

                            </select>
                            <i onClick={() => deleteItemHandler(item._id)} className="fa fa-trash-alt"></i>
                        </td>
                    </tr>

                })}



            </table>
        }

        <div className="cart-total">
            <h4>The Total of {cartItems.reduce((a, c) => a + Number(c.qty), 0)}</h4>
            <h2>NGN {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</h2>
            <button onClick={deleteHandler} className="btn btn-danger">Delete All</button>
            <a href="/checkout" className="btn btn-primary w-100">Checkout</a>

        </div>


    </div>


}