import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup=async(req,res,next)=>{
    const {username, password, email}=req.body;
    const hashedpassword=bcryptjs.hashSync(password,10);
    const newUser = new User({username,password:hashedpassword, email});
    try{
        await newUser.save();
        console.log(req.body);
    res.status(201).json("user created successfully!");
    }
    catch(error)
    {
        next(errorHandler);  
    }
};