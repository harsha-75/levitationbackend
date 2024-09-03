require('dotenv').config()
const express= require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const app=express();
connectDB()
app.use(cors('*'));
app.use(express.json());
app.get("/",(req,res)=>{
    res.json({
        data:"hello"
    })
})
app.use('/api/auth', require('./routes/auth'));
app.use('/api/form', require('./routes/form'));
app.listen(8000,()=>{
    console.log("server is running...")
})

module.exports=app

