
const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const cors = required('cors');
const {connectDb} = require('./db');
const {Login} = require("./Schema")

app.use(bodyParser.json());
app.use(cors())

connectDb();

app.get('/health', (req, res) => {

    res.send('server is running');
})



app.post('login', (req,res) => {
res.send('Login Successfull');
})

app.post('/register', () => {
    res.send('Register Sucessfull');
})


app.listen(4000,() => {

    console.log('server is running on port 4000');

})