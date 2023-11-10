import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function Router(){
    return <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/"></Route>
            <Route path="/register" element={<Register/>} ></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/customer"></Route>
        </Routes>

    </BrowserRouter>
};

export default Router;