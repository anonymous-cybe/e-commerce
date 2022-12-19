import axios from "axios";
import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import Loading from "../components/Loading";



export default function AddProductPage(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    !userInfo || !userInfo.isAdmin && props.history.push("/");

  }
  )

  async function getCategories() {
    const { data } = await axios.get("http://localhost:5000/categories");
    setCategories(data);
    console.log(data);
  }
  useEffect(() => {
    getCategories()
  }, [])

  async function submitHandler(e) {


    e.preventDefault();
    history.push("/admin-products");

    const { data } = await axios.post("http://localhost:5000/products", { name, image, price, category })

    setLoading(false);

    history.push("/admin-products");
  }
  async function uploadHandler(e) {
    setUploading(true);
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file)
    data.append("cloud_name", "drkzzg1kg");
    data.append("upload_preset", "SIFUtech")
    fetch("https://api.cloudinary.com/v1_1/drkzzg1kg/image/upload", { method: "post", body: data })
      .then(res => res.json())
      .then(data => {
        setImage(data.url);
        setUploading(false)

      })

  }



  return (
    <center>
      <div className="product-form">
        {loading ? <Loading /> : <form onSubmit={submitHandler} className="form">
          <center> <h3>ADD PRODUCT</h3></center>
          <input type="file" onChange={uploadHandler} className="form-control" />
          {uploading && <div>Uploading...</div>}
          <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Product Name" className="form-control" />
          <input value={image} onChange={e => setImage(e.target.value)} type="text" disabled placeholder="Product Image" className="form-control" />
          <input value={price} onChange={e => setPrice(e.target.value)} type="number" placeholder="Product Price" className="form-control" />
          <select value={category} onChange={e => setCategory(e.target.value)} className="form-control">
            <option value="">---Select Categories---</option>
            {categories.length > 0 && categories.map(category => {
              return <option key={category.id} value={category._id}>{category.name}</option>
            })}
          </select>
          {uploading && <button id="jago" type="submit" disabled >ADD</button>}
          {!uploading && <button id="jago" type="submit" >ADD</button>}
        </form>}
      </div>
    </center>
  )

}