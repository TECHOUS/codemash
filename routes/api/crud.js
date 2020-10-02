import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true});
const db = mongoose.connection;
db.on('error',console.error.bind(console, 'Connection error:'));

// create
router.post('/post', (_, res)=>{
    res.json({
        message: "POST API for MERN Boilerplate"
    })
})

// read
router.get('/get', (_, res)=>{
    res.json({
        message: "GET API for MERN Boilerplate"
    })
})

// update
router.put('/put/:id',(req,res)=>{
    res.json({
        message: `PUT ${req.params.id} API for MERN Boilerplate`
    })
})

// delete
router.delete('/delete/:id', (req,res)=>{
    res.json({
        message: `DELETE ${req.params.id} API for MERN Boilerplate`
    })
})

module.exports = router;