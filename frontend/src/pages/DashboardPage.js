import axios from "axios";
import { useEffect, useState } from "react";

export default function DashboardPage(props) {

    const [products, setProducts] = useState(0);
    const [categories, setCategories] = useState(0);
    const [users, setUsers] = useState(0);
    const [orders, setOrders] = useState(0);


    useEffect(()=>{
    async function getSummary() {
        const {data} = await axios.get("http://localhost:5000/summary");
        setProducts(data.products);
        setUsers(data.users);
        console.log(data);
        
    }

    
    getSummary();
    }
    ,[]
    )


    return <div class="container dashboard">
        <div className="row">

            <div className="col">
                <div class="card bg-danger" style={{ width: "30rem" }}>
                    <div class="card-body" style={{background: "red"}}>
                        <h5 class="card-title text-white"><i className="fa fa-list"></i></h5>
                        <h3 className="card-text text-center text-center text-white">Categories</h3>
                        <h3 className="card-text text-center text-center text-white">2</h3>
                    

                    </div>
                </div>
            </div>
            <div className="col">
                <div class="card" style={{ width: "30rem" }}>
                    <div class="card-body" style={{background: "blue"}}>
                        <h5 class="card-title trxt-white"><i className="fa fa-shopping-cart"></i></h5>
                        <h3 className="card-text text-center text-center text-white">Products</h3>
                        <h3 className="card-text text-center text-center text-white">{products}</h3>



                    </div>
                </div>
            </div>
            <div className="col">
                <div class="card" style={{ width: "30rem" }}>
                    <div class="card-body" style={{background: "green"}}>
                        <h5 class="card-title text-white"><i className="fa fa-users"></i></h5>
                        <h3 className="card-text text-center text-center text-white">Users</h3>
                        <h3 className="card-text text-center text-center text-white">{users}</h3>


                    </div>
                </div>
            </div>
            <div className="col">
                <div class="card" style={{ width: "30rem",  }}>
                    <div class="card-body" style={{background: "purple"}}>
                        <h5 class="card-title text-white"><i className="fa fa-money-bill"></i></h5>
                        <h3 className="card-text text-center text-center text-white">Orders</h3>
                        <h3 className="card-text text-center text-center text-white">NGN 3000</h3>



                    </div>
                </div>
            </div>


        </div>

    </div>
}