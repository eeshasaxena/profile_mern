const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
    tokens : [
        {
            token : {
                type : String,
                required : true
            }
        }
    ]
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

// generating tokens
  userSchema.methods.generateAuthToken = async function() {
      try {
         let token = jwt.sign({_id : this._id}, process.env.SECRET_KEY); 
         this.tokens = this.tokens.concat({token : token})
         await this.save()
         return token

      } catch (err) {
          console.log(err)
      }
  }

// create a new collection 
const User = mongoose.model('USER', userSchema);

module.exports = User;