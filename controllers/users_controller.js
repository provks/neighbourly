const User = require('../models/user');
const mongoose = require('mongoose'); 
mongoose.set('useCreateIndex', true);

// render user's PROFILE page
module.exports.profile = function(req, res){
    return res.end('<h1>Profile page</h1>');
    // return res.render('users_profile', {
    //     title : 'Profile'
    // });
}
// render SIGN UP page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title: 'Neighbourly | Sign Up'
    });
}
// render SIGN IN page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in', {
        title: 'Neighbourly | Sign In'
    });
}

// Get Sign Up data
module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password) {
        console.log('password mismatch');
        return res.redirect('back');
    }
    User.findOne({email: req.body.email}, function(err, user){
        if (err) {console.log('Error finding user!'); return;}

        if (!user) {
            User.create(req.body, function(err, user){
                if (err) {console.log('Error creating user!'); return;}
                //user is created, send to sign in page
                return res.redirect('/users/sign-in');
            });
        } else // user already exists
            return res.redirect('back');
    });
}

// Sign In and create session for the user
module.exports.createSession = function(req, res){
    //TODO later
}