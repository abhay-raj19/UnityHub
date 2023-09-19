import bcrypt from "bcrypt";
import { Jwt } from "jsonwebtoken";
import User from "../models/User.js";


// REGISTER USER
export const register = async(req , res) => {
    try {
        const{
            firstname,
            lastname,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
        } = req.body;
        
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt);

    } catch (error) {
        
    }
}