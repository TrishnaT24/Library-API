const db = require("../config/sqldb");
const books=require("../books.json");
const { response } = require("express");
    
    
    
    
const insertBooks=()=>{
const insertquery=`INSERT INTO BOOKS (title,copies,author) VALUES ?`;

const vals=books.map(book=>[book.title,book.copies,book.author]);

db.query(insertquery,[vals],(err,res)=>{
    if(err) throw err;
    console.log(`${res.affectedRows} books inserted ✅`);
})

};

const truncateBooks=()=>{
    const truncatequery=`TRUNCATE TABLE BOOKS`;

    db.query(truncatequery,(err,res)=>{
        if(err) throw err;
        console.log("table truncated");
    })
};

const getAllBooks=(req,res)=>{
    const getquery=`SELECT * FROM BOOKS`;

    db.query(getquery,(err,response)=>{
        if(err) throw err;
        res.status(200).json(response);
        console.log("all books recd");
    })
};

const findbyId=(req,res)=>{
    const {id}=req.body;
    const idquery=`SELECT * FROM BOOKS WHERE id=?`;

    db.query(idquery,[id],(err,response)=>{
        if(err) throw err;
        res.status(200).json(response);
    })
};

const addBook=(req,res)=>{

    const {title,copies,author}=req.body;

    const addquery=`INSERT INTO BOOKS (title,copies,author) VALUES (?,?,?)`;
    
    db.query(addquery,[title,copies,author],(err,response)=>{
        if(err) throw err;
        res.status(200).json(response);
    })
};



module.exports={insertBooks,truncateBooks,getAllBooks,findbyId,addBook};