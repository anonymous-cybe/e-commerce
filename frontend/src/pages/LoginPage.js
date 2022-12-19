import axios from "axios";
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import LoginRegister from "../components/LoginRegister";


export default function LoginPage(props) {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const history = useHistory();

useEffect(()=>{
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  userInfo && props.history.push("/")
}
)

async function submitHandler(e) {
  e.preventDefault();
  const {data} =await axios.post("http://localhost:5000/users/login", {email, password});
  data.error && setError(data.error);
  if(data.user){
    localStorage.setItem("userInfo", JSON.stringify(data.user));
    if(data.user.isAdmin){
history.push("/dashboard")
     }else{
    history.push("/")
  }
}
}

  return (<div className="logins">
    <LoginRegister page="login"/>
    <center>
      <h2 className="jago">LOGIN</h2>
    </center>


    <form action="" className="login"  onSubmit={submitHandler}>

{error && <div className="alert alert-danger">{error}</div>        }

<input value={email} onChange={e => setEmail(e.target.value)} required type="email" placeholder="Email" />

<input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required type="password" />

<button type="submit" class="btn button">Login</button>
</form>
      
</div>


  )


}











