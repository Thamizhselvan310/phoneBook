const mongoose = require('mongoose');

var phonebook = mongoose.model('phonelist',{

    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number
    },
    address:{
        type:String
    },
    city:{
        type:String
    },
    pincode:{
        type:String
    }
});

module.exports = {phonebook}