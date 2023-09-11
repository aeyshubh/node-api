const express = require('express');
const app = express();
require("dotenv").config();
const port = process.env.PORT ||5000;
const product_routes = require("../routes/products")
const connectDb = require("../db/connect");
app.get("/",(req,res)=>{
    res.send("Hi, i am Live")
})

app.use("/api/products",product_routes);
const start = async() =>{
try{
    await connectDb;
    app.listen(port,() =>{
        console.log("Connected to ",port);
    });

} catch(error){
    console.log(error);
} 
}

start();