const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    firstName: String,
    lastName: String,
    email: String,
    address: String,
    phone: String
} , {timestamps: true}
);

const User = mongoose.model('User', userSchema);

module.exports = User;