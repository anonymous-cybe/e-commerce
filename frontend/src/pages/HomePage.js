import { useEffect, useState } from "react";
import axios from "axios";


export default function AdminProductsPage(params) {
  // localStorage.removeItem("cartItems");

  const [products, setProducts] = useState("");


  async function deleteHandler(id) {
    window.location.reload();
    const { data } = await axios.delete(`http://localhost:5000/products/${id}`);

  }

  useEffect(() => {

    async function getProducts() {
      const { data } = await axios.get("http://localhost:5000/products");
      setProducts(data);
      console.log(data);

    }

    getProducts();


  }, [setProducts])
  return (<>
    <div className="carosel">
      <div className="carosel1">
        <img src="image1.png" alt="..." className="image1" />
      </div>

    </div>





    <div class="container">
      <div class="row">
        {products && products.map(product => {

          return <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <a href={`/product/${product._id}`}><img style={{ height: "18rem" }} src={product.image} class="card-img-top" alt="..." /></a>
              <div class="card-body">
                <h5 class="card-title">{product.name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary w-100">NGN {product.price}</a>

                <div className="d-flex justify-content-center mt-2">
                  <a href={`/cart/${product._id}`} className="btn btn-primary">Add To Cart</a>

                </div>

              </div>
            </div>
          </div>




        })}

      </div>
    </div>





  </>
  )

}