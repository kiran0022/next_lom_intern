import AddProduct from "@/app/components/AddProduct";
import React from "react";

export default function page() {
  return (
    <div className="flex justify-center">
      <AddProduct />
    </div>
  );
}

export const runtime = "edge";
