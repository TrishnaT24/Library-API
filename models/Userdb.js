const db = require("../config/sqldb");

const createUser = () => {
    const userquery = `CREATE TABLE IF NOT EXISTS USERS
(id INT AUTO_INCREMENT PRIMARY KEY,
username varchar(255) NOT NULL,
password varchar(255) NOT NULL);`;

    db.query(userquery, (err, response) => {
        if (err) throw err;
        console.log("USERS table created", response);
    })
};

const createShorts = () => {
    const shortquery = `CREATE TABLE SHORTS (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category VARCHAR(50) NOT NULL,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(100),
  publish_date VARCHAR(500),
  content TEXT,
  actual_content_link VARCHAR(500),
  image VARCHAR(500),
  upvote INT DEFAULT 0,
  downvote INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;
    db.query(shortquery,(err,response)=>{
        if(err){
            throw err;
        }
        console.log("Shorts created",response);
    })
}



module.exports = { createUser , createShorts};