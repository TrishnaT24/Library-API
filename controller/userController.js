const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken');

const findbyUsername = async (req, res) => {
  try {
    const { username } = req.body;
    const userfind = await User.findOne({ username: username });
    res.status(200).json(userfind);
  } catch (err) {
    res.status(500).json("User not found", err);
  }
};

const login = async (req, res) => {
    try{
        const {username,password}=req.body;
        const existuser=await User.findOne({username:username});
        if(!existuser)
        {
            res.status(404).json("User not found");
        }
        const passmatch=await bcrypt.compare(password,existuser.password);
        if(!passmatch)
        {
            res.status(401).json("Invalid password");
        }

        const token=jwt.sign(
            {
                id:existuser._id,
                username:existuser.username
            },
            process.env.JWT_SECRET || "secretkey", 
            { expiresIn: '1h' }
        );

        res.status(200).json("Login successfull",token);
    }
    catch(err)
    {
        res.status(500).json("Login failed");
    }
};

const signup = async (req, res) => {
  try {
    const {username,password}=req.body;
    const hashedpass= await bcrypt.hash(password,10);

    const newUser=new User({
        username,
        password:hashedpass,
    });

    await newUser.save();
    res.status(201).json("New user created");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { findbyUsername,signup,login};
