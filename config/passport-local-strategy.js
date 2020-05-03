const passpoert = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

// authentication and finding the user using passport
passport.use(new LocalStrategy({
        usernameField : 'user_name'
    },
    function(user_name, password, done) {
        // find the user and establish the identity
        User.findOne({email: user_name}, function(err, user){
            
            // handle user not found
            if (err) {console.log('Error in finding user : Passport'); return done(err);}
            
            // handle user found
            if (!user || user.password != password) {
                console.log('Invalid Username/Password');
                return done(null, false);
            }

            // handle user is found
            return done(null, user);
        });
    }
));

// serializing the user : to decide which key is to kept in the cookies
passport.serializeUser(function(user, done){
    done(null, user.id);
});

// deserializing the user : get the key kept in the cookies
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        // handle id doesn't match to user
        if (err) { console.log('Error in finding the user :: Passport'); return done(err)};

        return done(null, user);
    })
});

module.exports = passport;