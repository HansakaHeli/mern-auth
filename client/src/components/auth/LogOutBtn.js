import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import AuthContext from "../../context/AuthContext";

function LogOutBtn() {

    const {getLoggedIn} = useContext(AuthContext) // {} distruct the object. Get only getLoggedIn fucntion

    const navigate = useNavigate();

    async function logOut(){
        await axios.get("http://localhost:5000/auth/logout");
        await getLoggedIn();
        navigate("/");
    }


    return ( 
        <button onClick={logOut}>
            Log out
        </button>
     );
}

export default LogOutBtn;