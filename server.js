const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const allroutes=require('./routes/myRoutes');
const connecter=require('./config/db');
const app=express();

app.use(cors());


app.use(express.json());

const start=async()=>{
await connecter();
app.use('/api',allroutes);
PORT=3000;
app.listen(PORT, ()=>console.log(`Server running on Port ${PORT}`));
}


start();

