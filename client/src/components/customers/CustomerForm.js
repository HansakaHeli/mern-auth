import axios from "axios";
import React, { useState } from "react";

function CustomerForm({getCustomers}) {

    const [customerName, setCustomerName] = useState("");

    async function saveCustomer(e){

        e.preventDefault();

        try {
            const customerData = {
                name: customerName
            };
            await axios.post("http://localhost:5000/customer", customerData);
            getCustomers(); // Call getCustomers(), so without reloading it call the getCustomer() function in Customers.js
            //window.location.reload(); // This line reload the page

        } catch (error) {
            console.log(error);
        }

    }

    return ( <div>
        <form onSubmit={saveCustomer}>
            <input 
                type="text" 
                placeholder="Customer name"
                onChange={(e)=>{
                    setCustomerName(e.target.value);
                }}
                value={customerName}
                />
            <button type="submit">Save new customer</button>
        </form>
    </div> );
}

export default CustomerForm;