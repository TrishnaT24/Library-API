const db=require("../config/sqldb");


const createBook=()=>{
const createTablequery=`CREATE TABLE IF NOT EXISTS BOOKS
(id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255) NOT NULL,
copies INT DEFAULT 1,
author VARCHAR(255) NOT NULL)`;



db.query(createTablequery,(err,res)=>{
    if(err) throw err;
    console.log("table books created");
});
};

module.exports={createBook};