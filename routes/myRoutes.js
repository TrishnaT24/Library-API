const express=require('express');
const router=express.Router();
// const Book=require('../models/Book');
// const User=require('../models/User');
// const {
//   getAllBooks,
//   addBook,
//   findBookByAuthor,
//   findBookByTitle,
// } = require('../controller/bookController');
// const {findbyUsername,signup,login}=require('../controller/userController');


const {createBook}=require("../models/Bookdb");
const {getAllBooks,findbyId,addBook}=require('../controller/bookDB');

const products=[
    // 'apple','mango'
    { id: 1, name: "Laptop", price: 1000 }, 
    { id: 2, name: "Phone", price: 500 }
]
//get the products list.
router.get('/products',(req,res)=>{
    res.send(products);
});

//get the welcome message
router.get('/welcome',(req,res)=>{
    res.send("hi, welcome to Trishna's API");
});



//mongo routes
//get all books
// router.get('/books',getAllBooks);

// //can add a book to the bookstore
// router.post('/add',addBook);

// //retrive book based on title
// router.get('/findbook/:name',findBookByAuthor);

// //find by title
// router.post('/findbytitle',findBookByTitle);


// //find user by username
// router.post('/finduser',findbyUsername);

// router.post('/signup',signup);

// router.post('/login',login);

//sql routes
router.get('/getallBooks',getAllBooks);
router.post('/byid',findbyId);
router.post('/addbook',addBook);

module.exports=router;