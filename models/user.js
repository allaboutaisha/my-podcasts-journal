const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    uid: String,
    email: String,
    image: String
  }, {
    timestamps: true
  });

module.exports = mongoose.model('User', userSchema);