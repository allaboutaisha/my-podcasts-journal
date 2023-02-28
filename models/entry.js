const mongoose = require('mongoose');
const Schema = mongoose.Schema

const entrySchema = new Schema({
    notes: String, 
    favoriteTimestamps: String,
    favoriteQuotes: String,
    dateAdded: {
        type: Date,
        required: true,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Entry', entrySchema)