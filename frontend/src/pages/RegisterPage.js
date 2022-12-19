import { useState ,useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import LoginRegister from "../components/LoginRegister";



export default  function RegisterPage(props){

    const [email , setEmail] =useState("");
    const [username , setUsername] =useState("");
    const [password , setPassword] =useState("");
    const [confirmPassword , setConfirmPassword] =useState("");
    const [error, setError] =useState("");
    const [success, setSuccess] =useState("");

const history = useHistory();

useEffect(()=>{
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  userInfo && props.history.push("/")
}
)



 async function submitHandler(e) {


  e.preventDefault();
  if(password !== confirmPassword){
    alert("Password do not match");
    return;
  }
  console.log("from the frontend")
  const url = "http://localhost:5000/users/register";
  const {data} = await axios.post("http://localhost:5000/users/register", 
  {email, username, password})
  if(data.success){
    history.push("/login");
    return;
  }

  setError(data.error);
  // setSuccess(data.success);
}







    return(
      <>
      <LoginRegister page="register"/>
    <div className="logins">
      <center>
      <h2 className="jago">REGISTER</h2>
    </center>
    <div className="login">
    


<form  onSubmit={ submitHandler}>
 

  {error && <div className="alert alert-danger">{error}</div>        }

<input value={email} onChange={e => setEmail(e.target.value)} required type="email" placeholder="Email" />
<input value={username} onChange={e => setUsername(e.target.value)} required type="text" placeholder="Username" />

<input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required type="password" />
<input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Re Enter Password" required type="password" />

<button type="submit" class="btn button">Register</button>
</form>
    </div>
    </div>
    </>
        
    )
}


























