const db=require("../config/sqldb");

const createUser=()=>{
const userquery=`CREATE TABLE IF NOT EXISTS USERS
(id INT AUTO_INCREMENT PRIMARY KEY,
username varchar(255) NOT NULL,
password varchar(255) NOT NULL);`;

db.query(userquery,(err,response)=>{
    if(err) throw err;
    console.log("USERS table created",response);
})
};




module.exports={createUser};