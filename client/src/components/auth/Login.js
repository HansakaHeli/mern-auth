import axios from "axios"
import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {getLoggedIn} = useContext(AuthContext);
    //{} distruct the object. Get only getLoggedIn fucntion
    
    const navigate = useNavigate();

    async function login(e){
        e.preventDefault();

        try {

            // Create an object
            const loginData ={
                email, // email: email
                password,
            }

            await axios.post("http://localhost:5000/auth/login",loginData);
            await getLoggedIn();
            navigate("/");
            
        } catch (error) {
            console.error(error);
        }
    }


    return ( <div>

        <h1>Log in to your account</h1>
        <form onSubmit={login}>
            <input 
                type="email" 
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
            />
            <input 
                type="password" 
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                />
            <button type="submit">Log in</button>
        </form>

    </div> );
}

export default Login;