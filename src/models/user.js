const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const{Schema}= mongoose;

const userSchema = new Schema({
    email: String,
    password: String
});
module.exports = mongoose.model('users', userSchema);