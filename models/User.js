 const mongoose = require('mongoose');
 const { Schema } = mongoose; //   mongodb is schemales so using mongoose I can tell to mongodb which info i expecting for .

const userSchema = new Schema({

    googleId: String

});

//  these is creating a new collection 'users' if the new record match the userSchema. It is not owerwrite it self in next time 
mongoose.model('users', userSchema);