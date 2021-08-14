const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
const app = express();
require('./routes/auth')(app); // authRoutes return an arrow function . The (app) is an argument that immidiately calls the module.export function that wrap the rautes and they need the conection with express.

mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000;// the port heroku is pretent to provide or 5000 for the local.
app.listen(PORT);