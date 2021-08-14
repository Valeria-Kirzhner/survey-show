 const mongoose = require('mongoose');
 const { Schema } = mongoose; //   mongodb is schemales so using mongoose I can tell to mongodb which info i expecting for .

const userSchema = new Schema({

    googleId: String

});

