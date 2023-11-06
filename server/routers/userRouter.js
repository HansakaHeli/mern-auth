const router = require("express").Router();
const User = require("../models/userModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); 

router.post("/",async (req,res)=>{
    try {
        // We can get data because we use app.use(express.json()); meddleware
        const {email, password, passwordVerify} = req.body;

        // validation

        if(!email || !password || !passwordVerify){
            return res.status(400).json({errorMessage: "Please enter all required fields! "});
        }

        if(password.length < 6){
            return res.status(400).json({errorMessage: "Please enter a password of at least 6 characters! "});
        }

        if(password != passwordVerify){
            return res.status(400).json({errorMessage: "Please enter the same password twice! "});
        }

        const existingUser = await User.findOne({email: email});
        // const existingUser = User.findOne({email});
        if(existingUser){
            return res.status(400).json({errorMessage: "An account with this emil already exists! "});
        }

        // hash the password

        const salt = await bcrypt.genSalt(); // create a salt
        const passwordHash = await bcrypt.hash(password,salt); // hash the password

        // Save a new user account to the database

        const newUser = new User({
            email,passwordHash
            // email:email,
            // passwordHash:passwordHash
        });

        const savedUser = await newUser.save(); // Save the user. Return the document

        // sign the token

        // create a token
        const token = jwt.sign({
            user: savedUser._id 
        },process.env.JWT_SECRET);

        // send the token in a HTTP-only cookie

        res.cookie("token",token,{
            httpOnly: true
        }).send();

    } catch (error) {
        console.log(error);
        res.status(500).send();
    }   
})

module.exports = router;