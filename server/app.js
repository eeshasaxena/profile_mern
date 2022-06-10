const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express();

// 3. DATABASE 
dotenv.config({ path : './.env'});
require('./db/connection')
const User = require('./models/userSchema')
console.log(mongoose.connection.readyState)


// 2. MIDDLEWARE
const middleware = (req,res,next) => {
    console.log("middleware running");
    next();
}


// 1. ROUTING 
 
// creating middleware for auth.js to convert data into json or to read im not sure
app.use(express.json())
// get the request sent by the user
app.use(require('./router/auth'))

app.get('/', (req,res) => {
    res.send("Hello from the server")
})

app.get('/about',middleware, (req,res) => {
    console.log("this is about")
    res.send("This is the about us page")
})

app.get('/contact', (req,res) => {
    res.send("This is the contact us page")
})

app.get('/login', (req,res) => {
    res.send("This is the login page")
})

app.get('/signup', (req,res) => {
    res.send("This is the registration/ signup page")
})

// console.log("the code works")

// listen and respond to the requesting stating the server 
const PORTS = process.env.PORT
app.listen(PORTS, () =>{
    console.log('Server is running at', PORTS);
})

