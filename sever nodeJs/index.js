const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
app.use(cors())
app.use(bodyParser.json())
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: true }));

var { phonebook }=require('./schema');

mongoose.connect('mongodb://localhost:27017/phonedb');
app.post('/add',function(req,res){
    var phonedata= req.body
    //console.log(req.body)
    var phone= new phonebook(phonedata)
    phone.save().then(function (data) {
        res.json({
            message:"success"
        })
    }).catch(function (err) {
        res.status(500).json({
            message: "Error"
        })

    })
})
app.post('/get',function(req,res){
    
    let pincode=req.body;
    console.log(pincode);
    phonebook.find(pincode).
    then(function(data){
   
            res.json(data);
        
       
        
    }).catch(function(ersr){
        res.status(500).json({
            message:"error"
        })
    
    })
})
app.listen(3000);
