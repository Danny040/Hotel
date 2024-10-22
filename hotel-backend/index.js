const express = require('express');
const app = express();


var register = require('./src/register');
app.post('/register', (req, res) => {
    register(req, res);
});


app.listen(3000, () => console.log("Server is listening at port 3000"));