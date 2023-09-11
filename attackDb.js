const connectDb = require("./db/connect");
const mongoose = require("mongoose");
const model = require("./model/model");
const modelData = require("./attacks.json")
require("dotenv").config();

const uri = `mongodb+srv://devshub21:${process.env.PASS}@cluster0.a6zzphf.mongodb.net/cluster0?retryWrites=true&w=majority`;

const start = async () =>{
    try{
        await mongoose.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }) ;
        console.log(`Success`);
        await model.create(modelData);
        console.log(`Success`);
    }catch(error){
        console.log(error)
    }
}
start();