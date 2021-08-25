const passport = require('passport'); 


module.exports = app => {    // exporting the routes instead make another require for express in these page and it's need the app from the index.js enter as a parameter.

// the first request - for authenticate google with users  premission for givving his information using passport googleStrategy. The response will be to redirect to auth/google/callback with the user id and the CODE of premission. the scope property is telling google which info exacly to return.
app.get('/auth/google', 
passport.authenticate('google', { scope: ['profile', 'email']}));


// the second request - that would hold by passport google strategy this time would had the CODE. These andpoind would be redirect by google itself. The idea behind this API is to autenticate the user by the middlewere and that's it, redirect user next .
app.get('/auth/google/callback', 
passport.authenticate('google'),//middlewere
( req,res ) => {
    res.redirect('/surveys')
}
);

//if the person who is making the request here is signed into the application this route will respond back with the model represented the person who has signed it.
app.get('/api/current_user', (req, res) => {
     
    res.send(req.user);
     
});

app.get('/api/logout', ( req, res ) => {

    req.logout();// these request turns to passport and kill the token.
    res.send( req.user ); // the prove - if it was deleted it will not be show in the browser.
});


};