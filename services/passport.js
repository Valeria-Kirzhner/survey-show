const passport = require('passport');   // the core of the logic for authtication with some application.
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');


passport.serializeUser(( user, done ) => {

    done(null, user.id);    // firs argument is for errors in case they will be. user.id = mongodb auto givven id which I need to put as a token in the cookies.

});

passport.deserializeUser(( id, done ) => {    // the id is the cookie token, and the done function is the to make sure that I successfuly turnet the id back to recognized user in the db. 
   
    User.findById(id)

    .then( user => {    // becouse the search request is async function, to check if the request done succesfuly I chained then function.
    
    done( null, user );    // firs argument is for errors in case they will be. 
    
    });
});

// passport configuration
passport.use( new GoogleStrategy({    //google strategy response differently in use of the two requests (first and second) becouse it checks if the CODE is attached or not.
    
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',   //where should google redirect the user next.
    proxy: true // these is becouse google strategy couse a problem in the browser by thinking that the protocol is not protected (http). 
}, 
async (accessToken, refreshToken, profile, done) => {

  const existingUser =  await User.findOne({ googleId : profile.id })   //check if these user already saved in the db, in case no user was found the existingUser will be equal to null.

    if( existingUser ){   //if user already exist ( == true )
                                                
        done(null, existingUser);  //the done is for the google proccess of authentication, null argument says that there are no errors, the second argument is if I have error, so I provide the found user in these argument.

    } else {  //if I don't have a user record with the given profile.id ( == false ) then make a new record. 
        
        const user = await new User({ googleId: profile.id }).save()
    
        done(null, user)   //to be sure that the user is saved here also have firs argument as null that means 'no errors', and second argument is the saved user just a sacond ago.

    }
}
));