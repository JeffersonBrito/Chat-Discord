const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
     author: String,
     message: String, 
    },
    {
    timestamps: true,
});

module.exports = mongoose.model('Message', MessageSchema);