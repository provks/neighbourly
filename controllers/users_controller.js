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
    //TODO later
}

// Sign In and create session for the user
module.exports.createSession = function(req, res){
    //TODO later
}