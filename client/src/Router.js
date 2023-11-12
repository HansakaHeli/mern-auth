import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AuthContext from "./context/AuthContext";
import Customers from "./components/customers/Customers";

function Router(){

    const {loggedIn} = useContext(AuthContext); // {} distruct the object. Get only loggedInd value

    return <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route exact path="/"></Route>
            {
                loggedIn === false && (
                    <>
                    <Route path="/register" element={<Register/>} ></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    </>
                )
            }
            {
                loggedIn == true && (
                    <>
                    <Route path="/customer" element={<Customers/>}></Route>
                    </>
                )
            }   
        </Routes>

    </BrowserRouter>
};

export default Router;