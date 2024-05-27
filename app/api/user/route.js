import {  NextResponse } from "next/server";
import { connectDb } from "../../../lib/mongodb";
import User from "../../../models/user";

export async function POST(request) {
    const {name,email,image} = await request.json();
    await connectDb();
    await User.create({name,email,image});
    return NextResponse.json({message : "user Registred.."},{status : 201});
}