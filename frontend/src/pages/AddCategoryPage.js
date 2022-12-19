
    import axios from "axios";
    import { useState, useEffect } from "react";
    import { useHistory } from "react-router-dom";
    import Loading from "../components/Loading";
    
    
    function AddCategoryPage(props) {
    
        const [name, setName] = useState("");   
    
        const [loading, setLoading] = useState(false);
        const [message, setMessage] =useState("");
    
        useEffect(() => {
            const userInfo = JSON.parse(localStorage.getItem("userInfo"));
            !userInfo && props.history.push("/");
        });
    
        const submitHandler = async (e) => {
    e.preventDefault();
            setLoading(true);
            const { data } = await axios.post("http://localhost:5000/categories", { name })
            if (data.message){
                setMessage(data.message)
            }
            if (data.success) {
                setLoading(false);
                props.history.push("/admin-categories");
                window.location.reload();
            }
    
        }
    
        return <div>
    
            
    
                <section className="vh-110">
                    <div className="container py-5 h-100">
                        <div className="add">
                            <div className="col col-xl-10">
                                
                                    <div className="row g-0">
    
                                       
                                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                            <div className="card-body p-4 p-lg-5 text-black">
    
                                                <form className="form" onSubmit={submitHandler}>
    {message && <div className="alert alert-danger p-2">{message}</div>}
                                                   
    
                                                    <div className="form-outline mb-4">
                                                        
                                                        <h1 >Add Category</h1>
                                                        <input style={{background:"white"}} type="text" placeholder="Add new category" value={name} onChange={e => setName(e.target.value)} required className="form-control form-control-lg" />
                                                        <label className="form-label" htmlfor="form2Example27">Category Name</label>
                                                    </div>                        
    
                                                    <div className="pt-1 mb-3 text-center">
                                                        <button className="btn btn-primary btn-outline-primary btn-block" type="submit">Add</button>
                                                    </div>
    
                                                </form>
    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </section>
    
    
        </div>
    }
    
    export default AddCategoryPage;