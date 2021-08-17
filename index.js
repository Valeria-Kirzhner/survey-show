const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User'); 
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();   // each time I use app. it is a middlewarec- means on each entering request the middlewere will work before it sent out to route handlers.

app.use(
    cookieSession({ //  configurations for the installed library :

        maxAge: 30 * 24 * 60 * 60 * 1000,// 30 days till the cookie expired
        keys: [keys.cookieKey]  // the key is hiden for secure. This is an array becouse cookieSession is allow us to use multiple set of keys.
    })
);

// say pasport to use cookies
app.use(passport.initialize());
app.use(passport.session()); 

require('./routes/auth')(app); // authRoutes return an arrow function . The (app) is an argument that immidiately calls the module.export function that wrap the rautes and they need the conection with express.

const PORT = process.env.PORT || 5000;// the port heroku is pretent to provide or 5000 for the local.
app.listen(PORT);