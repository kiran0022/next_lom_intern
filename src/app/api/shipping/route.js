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
  await Shipping.create(data);
  return NextResponse.json({ message: "created shipping data" });
  // method-2
  //     const newProduct = new Product(data);
  //   const saveProduct = await newProduct.save();
  //   return NextResponse.json(saveProduct, { status: 201 });
}
