const Book=require('../models/Book');


const getAllBooks=async (req,res)=>{
     try{
        const books=await Book.find();
        res.status(200).json(books);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
};

const addBook=async(req,res)=>{
     try{
        const{title,copies,author}=req.body;
        const newBook= new Book({title,copies,author});
        const savedBook=await newBook.save();
        res.status(201).json(savedBook);
    }
    catch(err)
    {
        res.status(500).json("invalid book details or format",err);
    }
};

const findBookByAuthor=async(req,res)=>{
    try{
        const authorName=req.params.name;
        // const authorName = req.query.name;
        const book=await Book.findOne({author:authorName});
        res.status(200).json(book);
    }
    catch(err)
    {
        res.status(500).json("Author does not exist or invalid name format.")
    }
};


const findBookByTitle=async(req,res)=>{
    try{
        const {title}=req.body;
        const titlebook=await Book.findOne({title:title});
        res.status(200).json(titlebook);
    }
    catch(err)
    {
        res.status(500).json("Book not found",err);
        // console.log("Book not found",err);
    }
};




module.exports={
getAllBooks,
addBook,
findBookByTitle,
findBookByAuthor,
};
