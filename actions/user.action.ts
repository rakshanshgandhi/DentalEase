"use server";

import User from "@/models/user";
import dbConnect from "@/lib/mongodb"

export async function createUser(user : any){
    try {
        await dbConnect();
        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
        console.log(error);
    }
}