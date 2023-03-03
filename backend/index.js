require("dotenv").config();
const express=require("express");
const mongoose= require("mongoose");
const app=express();
const router = require("./routes/router");

var cors=require("cors");
app.use(cors());
app.use(express.json());
app.use(router);

// const url="mongodb+srv://admin:4LPZudtJGHHLK2Xx@cluster0.5qu8lrg.mongodb.net/?retryWrites=true&w=majority"
// const url2="mongodb+srv://bhuvana:bhuvana1997@cluster0.q4jvafn.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database Connected Succssfully")
}).catch((err)=>{
    console.log(err)
});

app.listen(process.env.PORT,()=>{
    console.log(`APP IS RUNNING AT ${process.env.PORT}`)
});
