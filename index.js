const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User'); 
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/auth')(app); // authRoutes return an arrow function . The (app) is an argument that immidiately calls the module.export function that wrap the rautes and they need the conection with express.

const PORT = process.env.PORT || 5000;// the port heroku is pretent to provide or 5000 for the local.
app.listen(PORT);