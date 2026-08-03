import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (request) => {
  try {
    const { db } = await connectDB();
    const body = await request.json();
    const { name, email, password } = body;
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Name, email, and password are required" },
        { status: 400 },
      );
    }
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User with this email already exists" },
        { status: 400 },
      );
    }
    const hashedPassword = await bcrypt.hashSync(password, 14);
    console.log("📩 New user data received:", { name, email, password });
    const collection = db.collection("users");
    const result = await collection.insertOne({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });
    console.log("📩 User created successfully:", result);
    return NextResponse.json(
      { message: "User created successfully", data: result },
      { status: 201 },
    );
  } catch (error) {
    console.error("❌ Error inserting data:", error);
    return NextResponse.json(
      { message: "Failed to insert data", error: error.message },
      { status: 500 },
    );
  }
};
