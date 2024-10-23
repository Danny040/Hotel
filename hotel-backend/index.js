const express = require('express');
const cors = require('cors');
const app = express();


const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());

var register = require('./src/register');
app.post('/register', (req, res) => {
    register(req, res);
});


app.listen(4000, () => console.log("Server is listening at port 4000"));