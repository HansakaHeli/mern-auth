import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {

    const [loggedIn, setLoggedIn] = useState();

    async function getLoggedIn(){
        const loggedInRes = await axios.get("http://localhost:5000/auth/loggedIn");
        setLoggedIn(loggedInRes.data); // Boolean true or flase
    }

    useEffect(()=>{
        getLoggedIn();
    },[]);

    return ( <AuthContext.Provider value={{loggedIn,getLoggedIn}}>
        {props.children}
    </AuthContext.Provider> );
}

export default AuthContext;
export {AuthContextProvider};