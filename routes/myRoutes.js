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
const {register,login}=require("../controller/userDB");
const {authenticateJWT,authorizeAdmin}=require("../middleware/authMiddleware");
const {addShort,showFeed,delshort} = require("../controller/shortDB");
// const products=[
//     // 'apple','mango'
//     { id: 1, name: "Laptop", price: 1000 }, 
//     { id: 2, name: "Phone", price: 500 }
// ]
// //get the products list.
// router.get('/products',(req,res)=>{
//     res.send(products);
// });

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
// router.post('/api/shorts/filter/:category',findbyUsername);

// router.post('/signup',signup);

// router.post('/login',login);

//sql routes
router.get('/getallBooks',getAllBooks);
router.post('/byid',findbyId);
router.post('/addbook',addBook);

//sql routes for users 
router.post('/register',register);

router.post('/login',login);
router.post('/shorts/create',authenticateJWT, authorizeAdmin,addShort);
router.get('/shorts/feed',authenticateJWT,showFeed);
router.get('/shorts/:id',delshort);

// authorizeAdmin
module.exports=router;