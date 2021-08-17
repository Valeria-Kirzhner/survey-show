const passport = require('passport');// the core of the logic for authtication with some application.
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');


passport.serializeUser(( user, done ) => {
    done(null, user.id);// firs argument is for errors in case they will be. user.id = mongodb auto givven id which I need to put as a token in the cookies.
});

passport.deserializeUser(( id, done ) => {// the id is the cookie token, and the done function is the to make sure that I successfuly turnet the id back to recognized user in the db. 
   
    User.findById(id)
    .then( user => {// becouse the search request is async function, to check if the request done succesfuly I chained then function.
        done( null, user );// firs argument is for errors in case they will be. 
    });
});

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
            done(null, existingUser);//  this done is for the google proccess of authentication. The null argument says that there is no errors, the second argument is if i have some problem or error, so I provide the found user in these argument

        } else {
            // if i don't have a user record with the given profile.id ( == false ) so make a new record. 
            new User({ googleId: profile.id  })
            .save() // create new User collection
            .then( user => done ( null, user ));//  to be sure that the user is saved, becouse of the async request - i am chained the 'then' function that also have firs argument as null that means 'no errors', and second argument is the saved user just a sacond ago.

        }
    })

}
));