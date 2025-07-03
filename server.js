const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const allroutes=require('./routes/myRoutes');
const db=require('./config/sqldb');
const app=express();
// const {createBook}=require("./models/Bookdb");
const {createUser}=require("./models/Userdb");
const {insertUsers}=require("./controller/userDB");
// const {insertBooks,truncateBooks}=require('./controller/bookDB');
app.use(cors());


app.use(express.json());
createUser();
insertUsers();
// createBook();
// insertBooks();
// truncateBooks();
const start=()=>{
// await connecter();
app.use('/api',allroutes);
PORT=3000;
app.listen(PORT, ()=>console.log(`Server running on Port ${PORT}`));
};


start();

