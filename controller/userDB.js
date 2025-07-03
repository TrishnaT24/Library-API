const db=require("../config/sqldb");
const users=require("../user.json");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const insertUsers=()=>{
    const insertquery=`INSERT INTO USERS (username,password) VALUES ?`;

    const vals=users.map(user=>[user.username,user.password]);

    db.query(insertquery,[vals],(err,response)=>{
        if(err) throw err;
        console.log("all users inserted",response);
    })

};

const register=(req,res)=>{
    const {username,password}=req.body;
    const hashedpass=bcrypt.hash(password,10, (err,hash)=>{
        if(err)
        {
            console.log(err);
            return;
        }
        console.log(hash);
    const registerquery=`INSERT INTO USERS (username,password) VALUES (?,?)`;

    db.query(registerquery,[username,hash],(err,response)=>{
        if(err) throw err;

        res.status(201).json("User registered",response);
    })
    });
    // console.log(hashedpass);

};


const login=(req,res)=>{
    const {username,password}=req.body;

    const finduser=`SELECT `

};
module.exports={insertUsers,register,login};