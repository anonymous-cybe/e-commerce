import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";



export default function Header(props) {

  let cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  let [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([])
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const history = useHistory();

  async function getCategories() {
    const { data } = await axios.get("/categories");
    setCategories(data);
    console.log(data);
  }
  useEffect(() => {
    getCategories()
  }, [])

  function LogoutHandler() {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("userInfo");
      props.history.push("/");


    }



  }
  function clickHandler(e) {
    e.preventDefault();
    history.push(`/search/${name}`);
    window.location.reload();
  }
  return (<> <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
    <div class="container-fluid">
      <div className="d-flex align-items-center">
        <i onClick={() => setOpen(!open)} className="fa fa-bars text-white me-4 category-toggler"></i>
        <a class="navbar-brand text-white" href="/"> <i aria-hidden="true"></i>SIFU</a>
      </div>


      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link text-white" href="/cart"><i class="fa-solid fa-cart-shopping"></i>Cart <span className="two">{cartItems && cartItems.length}</span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {userInfo && userInfo.username}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown" >
              <li>{userInfo && <a class="dropdown-item" href="/admin-products">Products</a>}</li>
              {userInfo && <li class="nav-item">
                <a class="nav-link text-dark" href="/admin-categories" tabindex="-1"><i class=""></i>categories</a>
              </li>}
              {userInfo && <li><a class="dropdown-item" href="/account/${userInfo._id}</li>">Account</a></li>}
              <li><hr class="dropdown-divider" /></li>
              <li>{userInfo && <a class="dropdown-item" href="" onClick={LogoutHandler}>Logout</a>}</li>

            </ul>
          </li>
          {!userInfo && <li class="nav-item">
            <a class="nav-link text-white" href="login" tabindex="-1"><i class="fa-solid fa-right-to-bracket"></i>Login</a>
          </li>}

          {!userInfo && <li class="nav-item">
            <a class="nav-link  text-white" href="register" tabindex="-1" aria-disabled="true"><i class="fa-solid fa-pen"></i>Register</a>
          </li>}

        </ul>
        <form class="d-flex">
          <input value={name} onChange={e => setName(e.target.value)} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button onClick={clickHandler} class="btn btn-outline-success text-white" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

    {/* {open && <div className='category-sidebar'>
      <a href="">books</a>
      <a href="">cloths</a>
      <a href="">cars</a>
      <a href="">electornics</a>

    </div>} */}
    {open && <div className='category-sidebar'>
      {
        categories.length > 0 && categories.map(category => {
          return <a key={category._id} href={"/category/${category._id}"}>{category.name}</a>
        })
      }

    </div>}
  </>
  )











  //     <div className="header">
  // //         <a className="brand" href="/">
  // //             Ecommerce
  // //             </a>
  // // <div>
  // //     <a href="/cart">Cart</a>

  // //     <a href="/Login">Login</a>
  // //     <a href="/register">Sign up</a>

  // // </div>


  // //   </div>
  // //     );
};