const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.register = async (req,res) => {
    try {
        //dissect the query
        const { name, email, password, phone} = req.body;
        //search by email
        const foundUser = await User.findOne({ email });
        if(foundUser){
            return res.status(400).json({errors:[{msg:"This email already exists "}]});
        }
        //New Mail
        //crypte the password
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds);
        //register
        const newUser = new User({name, email, password: hashPassword, phone});
        await newUser.save();
        //Token
        const token = jwt.sign({id: newUser._id},process.env.SECRET_KEY,{expiresIn:"5h"});
        //
        res.status(200).json({success:[{msg:"register sucessfully!!!"}],user: newUser, token });
    } catch (error) {
        res.status(400).json({errors:[{msg:"I couldn't record "}], error});
    }
};
//login
exports.login = async (req,res) => {
    try {
        const {email, password} = req.body;
        const foundUser = await User.findOne({ email })
        if(!foundUser) {
            return res.status(400).json({errors:[{msg:'Email and Password incorrect 1'}]});
        }
        const checkPassword = await bcrypt.compare(password, foundUser.password);
        if(!checkPassword){
            return res.status(400).json({errors:[{msg:'Email and Password incorrect 2'}]});
        }
        const token = jwt.sign({id: foundUser._id},process.env.SECRET_KEY,{expiresIn:"5h"});
        res.status(200).json({success:[{msg:"Login sucessfully!!!"}],user: foundUser, token });
    } catch (error) {
            res.status(400).json({errors:[{msg:"I couldn't Connecte"}], error});
    }
};