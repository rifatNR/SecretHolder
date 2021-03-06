const mongoose = require('mongoose');

const UserScheman = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    first_time_logging:{
        type: Boolean,
        default: true,
        required: true
    },
    date:{
        type: String,
        default: Date.now
    }
})

module.exports = xUser = mongoose.model("UserCollection", UserScheman);