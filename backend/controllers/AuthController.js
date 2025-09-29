const {UsersModel} = require('../models/UsersModel');
const {createSecretToken}= require('../util/SecretToken');
const bcrypt= require('bcryptjs');

module.exports.Signup= async(req,res,next)=>{
    try{
        const {email,username,password,createdAt}=req.body;
        const existingUser=await UsersModel.findOne({email})
        if (existingUser){
            return res.json({message: 'User already created'})
        }
        const user = await UsersModel.create({email,username,password,createdAt})
        const token= createSecretToken(user._id)
        res.cookie("token",token, {
            withCredentials: true,
            httpOnly: false, 
            sameSite: "none",     
            secure: false,        
            path: "/",       
        })
        res.status(201).json({message:'User signed in successfully',success: true, user});
        next();
    }
    catch (error){
        console.error(error)
    }
}


module.exports.Login = async(req,res,next)=>{
    try{
        const {email, password}=req.body;
        console.log(email)
        console.log(password)
        if (!email || !password){
            return res.json({message:"All fields are required"})
        }
        const user= await UsersModel.findOne({email})
        if (!user){
            return res.json({message:'Incorrect username or password'})
        }
        const auth= await bcrypt.compare(password,user.password)
        if (!auth){
            return res.json({message:'Incorrect username or password'})
        }
        const token= createSecretToken(user._id)
        res.cookie("token",token,{
            withCredentials:true,
            httpOnly:false,
            sameSite: "none",     // important for cross-origin cookies
            secure: false,        // true if using HTTPS
            path: "/",    

        })
        res.status(201).json({message:"User logged in", success:true})
        next()
    }
    catch(error){
        console.error(error)
    }
}