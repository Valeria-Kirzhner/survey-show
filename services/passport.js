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

    new User({ googleId: profile.id  }).save(); 

}
));