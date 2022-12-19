import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";




const AccountPage = (props) => {

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    const userId = props.match.params.id;
    const [email, setEmail] = useState(userInfo.email);
    const [username, setUsername] = useState(userInfo.username);
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [error, setError] = useState("")


    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Password dont match");
            return
        }
        const { data } = await axios.put(`/users/${userInfo._id}`, { username, password });
        localStorage.setItem("userInfo", JSON.stringify(data));
        window.location.reload();
    }










    return <div>

        <form onSubmit={submitHandler} className="p-2 d-flex align-items-center flex-column w-50" >
            {error && <div className="alert alert-danger">{error}</div>}

            <input required value={email} type="email" className="form-control mb-2" placeholder="Email" />
            <br />
            <input required value={username} onChange={e => setUsername(e.target.value)} type="username" className="form-control mb-2" placeholder="Username" />
            <br />
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control mb-2" placeholder="Password" />
            <br />
            <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password" className="form-control mb-2" placeholder="Comfirm Password" />
            <br />
            <button className="btn btn-dark" id="button" type="submit"> Update</button>


        </form>

    </div>


}




export default AccountPage;