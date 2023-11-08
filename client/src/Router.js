import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";

function Router(){
    return <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/">
            </Route>
            <Route path="/register" element={<Register/>} >
                
            </Route>
            <Route path="/login">
                
            </Route>
            <Route path="/customer">
            </Route>
        </Routes>

    </BrowserRouter>
};

export default Router;