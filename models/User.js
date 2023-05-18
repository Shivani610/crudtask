const mongoose = require("mongoose");

module.exports = mongoose.model("User", mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true,
        match: /^[6-9]{1}[0-9]{9}$/
    },
    address: {
        type: String,
        required: true
    }
}, { timestamps: true }))