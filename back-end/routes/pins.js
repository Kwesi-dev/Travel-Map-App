const express = require('express');
const Pin = require('../models/Pin');

const router = express.Router();

//create
router.post('/', async (req, res)=>{
    const newPin = new Pin(req.body);
    try{
        const savedPin = await newPin.save();
        res.status(200).json(savedPin);
    }catch(err){
        res.status(500).json(err);
    }
})

//get all pins
router.get('/', async (req, res)=>{
    try{
        const allPins = await Pin.find();
        res.status(200).json(allPins);
    }catch(err){
        res.status(500).json(err);
    }
})

//
module.exports = router;

