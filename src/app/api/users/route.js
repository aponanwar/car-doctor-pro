    // app/api/users/route.js
    import { connectDB } from "@/lib/db";
    import { NextResponse } from "next/server";

    // POST: Push data directly into MongoDB collection
    export async function POST(request) {
    try {
        // 1. Connect to MongoDB using raw driver
        const { db } = await connectDB();

        // 2. Extract payload from request
        const body = await request.json();
        const { name, email } = body;

        if (!name || !email) {
        return NextResponse.json(
            { message: "Name and email are required" },
            { status: 400 },
        );
        }

        // 3. Access raw collection and push data
        const collection = db.collection("users");

        const result = await collection.insertOne({
        name,
        email,
        createdAt: new Date(),
        });

        console.log("📩 New document inserted into 'users' collection:");
        console.log({ _id: result.insertedId, name, email });

        // 4. Return success response
        return NextResponse.json(
        {
            message: "Data inserted successfully",
            data: { _id: result.insertedId, name, email },
        },
        { status: 201 },
        );
    } catch (error) {
        console.error("❌ Error inserting data:", error);
        return NextResponse.json(
        { message: "Failed to insert data", error: error.message },
        { status: 500 },
        );
    }
    }

    // GET: Query documents from collection
    export async function GET() {
    try {
        const { db } = await connectDB();
        const users = await db.collection("users").find({}).toArray();

        return NextResponse.json({ success: true, data: users }, { status: 200 });
    } catch (error) {
        console.error("❌ Error fetching data:", error);
        return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 },
        );
    }
    }
