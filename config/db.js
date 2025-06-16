require('dotenv').config();
const Book=require('../models/Book');
const booksData=require('../books.json');
const mongoose=require('mongoose');
const User=require('../models/User');
const usersData=require('../user.json');
const url=process.env.MONGO_URL;
const connectDB=async()=>{

    await mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
    console.log("MongoDB connected....");
    try{
        await Book.insertMany(booksData);
        console.log('Books inserted successfully!');
    }
    catch(err)
    {
        console.log("error loading books",err);
    }
    try{
        await User.insertMany(usersData);
        console.log('Users inserted successfully!');
    }
    catch(err)
    {
        console.log("error loading users",err);
    }
}


module.exports=connectDB;