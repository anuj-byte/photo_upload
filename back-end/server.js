const express =require("express");
const cors = require('cors');
const mongoose =require("mongoose");
const userroutes=require("./routes/userroutes")
const app =express();
app.use(cors());
app.use(express.json());
const bodyParser = require("body-parser")
app.use(bodyParser.json())
const path = require('path')
app.use('/static', express.static(path.join('back-end/images', 'public')))
app.use('/users',userroutes)
mongoose.connect("mongodb://localhost:27017/uploads").then((res)=>console.log("connecting")).catch((err)=>console.log(err))
app.listen(3001,()=>console.log("server started"))

