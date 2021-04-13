const mongoose = require('mongoose');
const User = require('../models/user-model');

exports.read = (req, res) => {
     User.find()
     .then((result) => {
        res.render('index.ejs', {users : result});
     })
     .catch(err => console.log(error));
}

exports.create = (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone
    });
    
    user.save()
    .then(result => res.redirect('/users'))
    .catch(err => console.log(error));
}

exports.delete = (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(result => {
        res.send();
    })
    .catch(err => console.log(err));
}

exports.update = (req, res) => {
    User.findByIdAndUpdate(req.params.id,req.body)
    .then(result => {
        res.redirect('/users');
    })
    .catch(err => console.log(err));
}