const express = require('express');
const passport = require('passport');// the core of the logic for authtication with some application.
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use( new GoogleStrategy({ // google strategy response differently in use of the two requests (first and second) becouse it checks if the CODE is attached or not.
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'    // where should google redirect the user next.
}, 
(accessToken, refreshToken, profile, done) => {
    console.log('Access Token', accessToken);
    console.log('Refresh Token', refreshToken);
    console.log('Profile : ', profile);
}
));

// the first request - for authenticate google with users  premission for givving his information using passport googleStrategy. The response will be to redirect to auth/google/callback with the user id and the CODE of premission.
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email']})); // the scope is property is telling google which info exacly to return.
// the second request - that would hold by passport google strategy this time would had the CODE. These andpoind would be redirect by google itself.
app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000;// the port heroku is pretent to provide or 5000 for the local.
app.listen(PORT);