const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true,
        minlength: 3
    },
    gender: {
        type: String, 
        required: true,
        enum: ["male", "female"]
    },
    group: {
        type: String, 
        required: true,
        enum: ["pz-21", "pz-22", "pz-23"]
    },
    date: {
        type: String,
        require: true
    },
    profilePic: {
        type: String, 
        default: ""
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;