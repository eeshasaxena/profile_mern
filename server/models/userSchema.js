const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

// create document type
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
})

// hashing passwords
userSchema.pre("save", async function (next) {
    const user = this;
    // console.log("Before Save");
    if (user.isDirectModified("password")) {
      user.password = await bcrypt.hash(user.password, 8);
      user.cpassword = await bcrypt.hash(user.cpassword, 8);
    }
    next();
  });


// create a new collection 
const User = mongoose.model('USER', userSchema);

module.exports = User;