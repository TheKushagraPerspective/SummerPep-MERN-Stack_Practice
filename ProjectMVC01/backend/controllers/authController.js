const authModel = require("../models/authModel")
const jwt = require("jsonwebtoken");

const doLogin = async (req , res) => {
    try {
        let body = req.body;
        let userData = await authModel.login(body.email , body.password);

        if(!userData) {
            return res.status(401).json({success:false , msg:"User doesn't exist in database"});
        }
        else {
            // JWT implementation
            const config = {
                jwt : {
                    secret : "LPU@summer-training-2025",//secret key
                    expiresIn: "7d",
                },
            };

            const token = jwt.sign(
                { userId : userData.id , email : userData.email },
                  config.jwt.secret,
                { expiresIn: config.jwt.expiresIn }
            );

            return res.status(200).json({success:true , msg:"Login Successful" , userData : userData , token})
        }
    } catch (error) {
        throw error;
    }
}



const doSignUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Basic validation
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, msg: "All fields are required" });
        }

        // Insert user using model
        const signUpData = await authModel.signUp(name, email, password);

        if (!signUpData || !signUpData.insertId) {
            return res.status(500).json({ success: false, msg: "Signup failed" });
        }

        return res.status(201).json({
            success: true,
            msg: "SignUp Successful",
            signUpData
        });

    } catch (error) {
        console.error("Signup Error:", error);
        return res.status(500).json({
            success: false,
            msg: "Internal Server Error",
            error: error.message
        });
    }
};




module.exports = {
    doLogin,
    doSignUp,
};