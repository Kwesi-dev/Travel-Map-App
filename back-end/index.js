const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const pinRoute = require('./routes/pins')
const userRoute = require('./routes/users')

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('mongoDB connected');
})
.catch((err)=>{
    console.log(err);
})

app.use('/api/pins', pinRoute);
app.use('/api/users', userRoute);
app.listen(5000, ()=>{
    console.log('backend server is running');
});

