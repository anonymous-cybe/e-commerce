import axios from "axios";
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";





export default function EditCategoryPage (props) {
    

const categoryId = props.match.params.id;


const[name, setName] = useState("");




useEffect(()=>{
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    !userInfo && props.history.push("/")
  }
  )
  



async function getCategory(categoryId) {
    const {data} = await axios.get(`http://localhost:5000/categories/${categoryId}`);
    setName(data.name);
}



useEffect(()=>{
    getCategory(categoryId);
}, [categoryId])





 async function submitHandler(e) {

    const {data} = await axios.put(`http://localhost:5000/categories/${categoryId}`, {name})

    if (data.success) {
        
        window.location.reload();
}
 }

    return <>        

    <section className="vh-110">
        <div className="container py-5 h-100">
            <div className="category">
                <div className="col col-xl-10">
                    <div className="card" style={{ borderRadius: '1rem' }}>
                        <div className="row g-0">

                            
                            <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                <div className="card-body p-4 p-lg-5 text-black">

                                    <form className="form" onSubmit={submitHandler}>

                                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Edit Category</h5>
                                        
                                        <div className="form-floating form-outline mb-4 form-floating">
                                        <input style={{background:"white"}} type="text" placeholder="Add new category" value={name} onChange={e => setName(e.target.value)} required className="form-control form-control-lg" />
                                                        <label className="form-label" htmlfor="form2Example27">Category Name</label>
                                            {/* <input type="text"  value={name} onChange={e => setName(e.target.value)} className="form-control form-control-lg" />
                                            <label className="form-label" htmlfor="form2Example27">Category Name</label> */}
                                        </div>                                            

                                        <div className="pt-1 mb-3 text-center">
                                            <button className="btn btn-dark btn-outline-primary btn-block" type="submit">Edit</button>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</>
}

   
