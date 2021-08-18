// Figure out what set of credentials to return

if ( process.env.NODE_ENV === 'production' ) {  //  if in production - return production set of keys

    module.exports = require('./prod');
     
} else {// we are in development - return the dev keys

    module.exports = require('./dev');

}