import { connectDB } from "@/utils/mongoose";
import Shipping from "../../../../models/shipping";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const data = await Shipping.find();
  return NextResponse.json(data);
}

export async function POST(request) {
  await connectDB();
  const data = await request.json();
  const res = await Shipping.create(data);
  return NextResponse.json(res, { status: 200 });
}
