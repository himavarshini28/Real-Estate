import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authrouter from './routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{console.log("Connected to MongoDB!")})
.catch((err)=>{console.log(err)});

const app=express();
app.use(express.json());
app.listen(3000,()=>{
    console.log("Port is running on server 3000")
});

app.use('/api/user',userRouter);
app.use('/api/auth',authrouter);

app.use((err,req,res,next)=>{
    const StatusCode= err.statusCode || 500;
    const message= err.message || "internal server error";
    res.status(StatusCode).json(
        {
            success: false,
            StatusCode,
            message,
        }
    )
});
