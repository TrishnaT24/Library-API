const db = require("../config/sqldb");
const users = require("../user.json");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const insertUsers = () => {
    const insertquery = `INSERT INTO USERS (username,password) VALUES ?`;

    const vals = users.map(user => [user.username, user.password]);

    db.query(insertquery, [vals], (err, response) => {
        if (err) throw err;
        console.log("all users inserted", response);
    })

};

const register = (req, res) => {
    const { username, password } = req.body;
    const hashedpass = bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(hash);
        const registerquery = `INSERT INTO USERS (username,password) VALUES (?,?)`;

        db.query(registerquery, [username, hash], (err, response) => {
            if (err) throw err;

            res.status(201).json("User registered", response);
        })
    });
    // console.log(hashedpass);

};


const login = (req, res) => {
    const { username, password } = req.body;
    const finduser = `SELECT * from USERS where username=?`;
    db.query(finduser, [username], (err, response) => {
        if (err) {
            throw err;
        }
        if (response.length === 0) {
            res.status(500).json("User not found");
            return;
        }

        const user = response[0];
        const hashedPassword = user.password;
        bcrypt.compare(password, hashedPassword, (err, ismatch) => {
            if (err) {
                throw err;
            }
            // console.log(ismatch);
            if (!ismatch) {
                return res.status(401).json("Incorrect username/password provided. Please retry");
            }
            const token = jwt.sign({ user: user.username, id: user.id },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );
            res.status(201).json({
                status: "Login successful",
                user_id: user.id,
                access_token: token
            });

        });
        // console.log(response);

    })
};
module.exports = { insertUsers, register, login };