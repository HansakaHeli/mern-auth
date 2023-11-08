import axios from "axios"
import React, { useState } from "react";

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setpasswordVerify] = useState("");

    async function register(e){
        e.preventDefault();

        try {

            // Create an object
            const registerData ={
                email, // email: email
                password,
                passwordVerify
            }

            await axios.post("http://localhost:5000/auth/",registerData);
            
        } catch (error) {
            console.error(error);
        }
    }


    return ( <div>

        <h1>Register a new account</h1>
        <form>
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
            <input 
                type="password" 
                placeholder="Verify your password"
                onChange={(e)=>setpasswordVerify(e.target.value)}
                value={passwordVerify}
                />
            <button type="submit">Register</button>
        </form>

    </div> );
}

export default Register;