const mongoose = require('mongoose');

const DB = process.env.DATABASE;
// console.log(DB)
// if else using then() and catch()
mongoose.connect(DB)
.then(() => {
    console.log("Database Connection established succesfully");
})
.catch((err) => {
    console.log("Error establishing database connection")
});