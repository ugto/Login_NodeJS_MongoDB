const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const{Schema}= mongoose;

const userSchema = new Schema({
    email: String,
    password: String
});

userSchema.methods.encryptPassword= (password)  =>{
    return bcrypt.hashSync(password,bcrypt,bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword= (password)  =>{
    return bcrypt.hashSync(password, this.password);
};

module.exports = mongoose.model('users', userSchema);