const passport = require('passport');// the core of the logic for authtication with some application.
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

// passport configuration
passport.use( new GoogleStrategy({ // google strategy response differently in use of the two requests (first and second) becouse it checks if the CODE is attached or not.
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'    // where should google redirect the user next.
}, 
(accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId : profile.id })// check if these user already saved in the db.
    .then( ( existingUser ) => { // this is a chaining of what happend next if some saved user was found. I use this method becouse it async request. In case no user was found the (existingUser) will be equal to nall.
        
        if( existingUser ){
            // if the user already exist ( == true )

        } else {
            // if i don't have a user record with the given profile.id ( == false ) so make a new record. 
            new User({ googleId: profile.id  }).save(); // create new User collection
        }
    })

}
));