'use server'

import bcrypt from "bcryptjs";
import { connect } from "@/lib/dbConnect";

export const postUser = async (payload) => {

    const { email, password, name } = payload;

    if (!email || !password || !name) {
        return {
            success: false,
            message: "All fields are required"
        };
    }

    const collection = await connect("users");

    const existingUser = await collection.findOne({ email });

    if (existingUser) {
        return {
            success: false,
            message: "User already exists"
        };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
        provider: "credentials",
        name,
        email,
        password: hashedPassword,
        role: "user",
        createdAt: new Date()
    };

    const result = await collection.insertOne(newUser);

    return {
        success: true,
        acknowledged: result.acknowledged,
        insertedId: result.insertedId.toString()
    };
};

//? signIn user.

export const signInUser = async (payload) => {
    // console.log('payload',payload);
    // return payload

     const { email, password } = payload;

    if (!email || !password) {
        return null;
    }

     const user = await (await connect("users")).findOne({ email });
    //  console.log('user db',user);
    //  return user

    if (!user) {
        return null;
    }

    const isPasswordOk = await bcrypt.compare(
        password,
        user.password
    );
    // console.log(isPasswordOk);
    // return isPasswordOk

    if (!isPasswordOk) {
        return null;
    }
    
    return {
        id: user?._id.toString(),
        name: user?.name,
        email: user?.email,
        role: user?.role,
    };
};