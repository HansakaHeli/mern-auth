import React from "react"
import Router from "./Router"
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";

axios.defaults.withCredentials = true; //Axios always allows credentials to be sent
// requests should include credentials such as cookies, HTTP authentication, and client-side SSL certificates.

function App() {
  return (
    <AuthContextProvider>
      <Router/>
    </AuthContextProvider>
    
  );
}

export default App;
