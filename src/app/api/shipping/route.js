import { connectDB } from "@/utils/mongoose";
import Shipping from "../../../../models/shipping";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const data = await Shipping.find();
  return NextResponse.json(data);
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  await Shipping.create(data);
  return NextResponse.json({ message: "created shipping data" });

  //     const newProduct = new Product(data);
  //   const saveProduct = await newProduct.save();
  //   return NextResponse.json(saveProduct, { status: 201 });
}
