
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require("mongoose");
require("dotenv").config();

const uri = `mongodb+srv://user2:user2@cluster0.a6zzphf.mongodb.net/cluster0?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

async function connect() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    console.log(`Uri is ${uri}`);
    await mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }) ;
    // Send a ping to confirm a successful connection
}catch(error){
    console.log(error);
} 
}
module.export = connect;
