const _ = require('lodash');
const bcrypt = require('bcrypt');
const usermodel  = require("./../models/user-model");


var registerGet = (req,res) => {
  res.render('register');
};

var registerPost =  (req, res) => {
    var user = _.pick(req.body,['name','email','password']);
    
    var newuser = new usermodel.User(user);
    newuser.save().then((doc) =>{
      console.log(doc);
    },(e)=>{
    console.log(`unable to connect`,e);
    });
    res.redirect('/register');
};

var profile = (req, res) =>{
  res.render('profile');
};



module.exports = {
    registerGet,
    registerPost,
    profile
};