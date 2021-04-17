var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: { type: String, unique: true, lowercase: true},
    password: String,
    username: string,
    gender: {
         type: String,
         enum: ['MALE', 'FEMALE']
    },
    phone: Number
});

module.exports = mongoose.model('User', userSchema);