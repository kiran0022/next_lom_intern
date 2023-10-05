import React from "react";
import { connectDB } from "@/utils/mongoose";
import Product from "../../../../models/products";
import { NextResponse } from "next/server";

export async function POST(request) {
  await connectDB();

  const data = await request.json();

  const newProduct = new Product(data);
  const saveProduct = await newProduct.save();
  return NextResponse.json(saveProduct, { status: 200 });
}

export async function GET() {
  await connectDB();

  const products = await Product.find();

  return NextResponse.json(products);
}
