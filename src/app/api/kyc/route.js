import { connectDB } from "@/utils/mongoose";
import Kyc from "../../../../models/kyc";
import { NextResponse } from "next/server";

export async function POST(request) {
  await connectDB();
  const data = await request.json();

  const newKyc = new Kyc(data);
  const saveKyc = await newKyc.save();
  return NextResponse.json(saveKyc, { status: 200 });
}

export async function GET() {
  await connectDB();
  const products = await Kyc.find();
  return NextResponse.json(products);
}
