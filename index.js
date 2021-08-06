const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there'});
});

const PORT = process.env.PORT || 5000;// the port heroku is pretent to provide or 5000 for the local.
app.listen(PORT);