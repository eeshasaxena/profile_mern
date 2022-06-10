const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

require('../db/connection')
const User = require('../models/userSchema')


router.get('/', (req, res) => {
    res.send("sending from auth")
})

// getting the data from user from the form 
router.post("/register", async (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "fill al the fields" })
    }

    const newUser = new User({ name, email, phone, work, password, cpassword });

    const userExist = await User.findOne({ email: email })
    if (userExist) {
        return res.status(422).json({ error: "user already exists" })
    } else if (password != cpassword) {
        res.status(400).json({ error: "Passwords don't match" })
    }
    else {
        try {
            await newUser.save();
            return res.status(201).json({ message: "user registered succesfully" });

        } catch (error) {
            return res.status(500).json({ error: "Failed to register user" });
        }
    }

});

// LOGIN
router.post('/login', async (req, res) => {

    try {
        let token;
        const { email, password } = req.body
        console.log(req.body)
        if (!email || !password) {
            res.status(400).json({ error: "fill all the fields " })
        }

        const userLogin = await User.findOne({ email: email });
        
        // token auth
        token = await userLogin.generateAuthToken();
        // console.log(token)

        res.cookie("jwtoken", token, {
            expires : new Date(Date.now() + 258922000000),
            httpOnly : true
        });

        if (userLogin) {
            // match password
            const isMatch = await bcrypt.compare(password, userLogin.password)
            if (isMatch) {
                res.status(200).json({ message: "User logged in " })
            } else {
                res.status(400).json({ error: "Invalid credentials" })
            }
        } else {
            res.status(400).json({ error: "Invalid credentials" })
        }


    } catch (err) {
        res.status(404).json({ err});
    }
});

module.exports = router;