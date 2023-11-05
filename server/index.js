const express = require("express")
const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config();

const app = express();
const PORT = 5000;


app.get("/test",(req,res)=>{
    res.send("It works");
})


// connect to mongodb
mongoose.connect(process.env.MDB_CONNECT,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => console.log("DB error", err));



app.listen(PORT,()=>{
    console.log(`Server started on port: ${PORT} `)
})
