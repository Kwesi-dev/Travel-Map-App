const mongoose = require('mongoose');

const pinSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true
    },
    title:{
        type: String,
        require: true,
        min: 3
    },
    desc:{
        type: String,
        require: true,
        min: 3
    },
    rating:{
        type: Number,
        require: true,
        min: 0,
        max: 5
    },
    latitude:{
        type: Number,
        require: true
    },
    longitude:{
        type: Number,
        require: true
    }

}, {timestamp: true})

module.exports = mongoose.model('Pin', pinSchema); 