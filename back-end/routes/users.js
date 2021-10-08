const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const router = express.Router();

//register
router.post('/register', async (req, res)=>{
    try{
        //generate a new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        
        //create a new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });
        const savedUser = await newUser.save();
        res.status(200).json(savedUser._id);
    }catch(err){
        res.status(500).json(err);
    }

})

//login
router.post('/login', async (req, res)=>{
    try{
        //find user
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(500).json("wrong username or password!")

        //validate the password
        const validpassword = await bcrypt.compare(req.body.username, savedUser.password);
        !validpassword && res.status(500).json("wrong username or password!");

        res.status(200).json({ id: user._id, username: username });
    }catch(err){
        res.status(500).json(err);
    }
});
module.exports = router;