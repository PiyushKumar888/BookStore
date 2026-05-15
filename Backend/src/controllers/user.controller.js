import mongoose from 'mongoose';
import {User} from '../models/user.model.js'
import {asyncHandler} from "../utils/asyncHandler.js";
import bcrypt from "bcrypt";

export const signup = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body;
    const user = await User.findOne({email});
    if (user) {
        return res.status(400).json({
            success: false,
            error: 'User already exists'
        })
    }
    const newuser = await User.create({
        name,
        email,
        password,
    })
    return res.status(201).json({
        success: true,
        data: newuser,
        message:"User successfully created"
    })
})

export const login = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            error: 'email or password required'
        })
    }
    const user = await User.findOne({email});
    const isusermatch = await user.comparePassword(password);
    if (!isusermatch) {
        return res.status(400).json({
            success: false,
            error: 'Incorrect password or email'
        })
    }
    await User.updateOne({verify:true});
    const loginedUser = await User.findOne({email}).select("-password");

    return res.status(200).json({
        success: true,
        data: loginedUser,
        message:"User successfully logged in"
    })
})