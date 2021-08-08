const express = require('express');
const app = express();
const passport = require('passport');// the core of the logic for authtication with some application.
const GoogleStrategy = require('passport-google-oauth20').Strategy;


const PORT = process.env.PORT || 5000;// the port heroku is pretent to provide or 5000 for the local.
app.listen(PORT);