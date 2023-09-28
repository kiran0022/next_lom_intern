import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import React from "react";
import User from "../../../../models/users";

export async function POST(request) {
  connectDB();
  const data = await request.json();
  const newUser = new User(data);
  const saveUser = await newUser.save();
  return NextResponse.json(saveUser, { status: 200 });
}

export async function GET() {
  await connectDB();

  const users = await User.find();
  return NextResponse.json({ users });
}
