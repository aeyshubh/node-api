const Model = require("../model/model");
const mongoose = require("mongoose");
require("dotenv").config();

const uri = `mongodb+srv://devshub21:${process.env.PASS}@cluster0.a6zzphf.mongodb.net/cluster0?retryWrites=true&w=majority`;
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) ;

const getAllProducts = async(req,res) =>{
    try{
        
            const data = await Model.find({"walletAddress":"0x82a7A0828fa8EB902f0508620Ee305b08634318A"});
            res.status(200).json({data});

    }catch(error){
        console.log("Error is",error);
    }
};

const updateData = async(req,res) =>{
try{
    const data = await Model.updateOne({"walletAddress":"0x82a7A0828fa8EB902f0508620Ee305b08634318A"},{"attack1":1000});
    res.status(200).json({data});
}catch(error){
    console.log("Error is",error);
}

}

const createCollection = async(req,res) =>{
    try{
        const data = await Model.insertMany({
            "walletAddress":"ZZZZ",
            "lens_id":"0x192",
            "nature":"Water",
            "attack1":400,
            "attack2":200,
            "attack3":500
        })
        res.status(200).json({data});

    }catch(error){

    }
}

const testing = async(req,res) =>{
    res.status(200).json({msg:"I got testing"});
    };
    module.exports = {getAllProducts,testing,updateData,createCollection}
    