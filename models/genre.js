const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreSchema = new Schema({
    genre: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Genre', genreSchema);