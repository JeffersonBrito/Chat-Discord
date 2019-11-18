const mongoose = require('mongoose');
const Message = require('./Message').schema;

const ChatSchema = new mongoose.Schema({
     messages:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message'}]
}, {
    timestamps: true,
});



module.exports = mongoose.model('Post', ChatSchema);