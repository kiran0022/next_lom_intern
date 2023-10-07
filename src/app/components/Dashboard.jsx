"use client";
import React from "react";

export default function Dashboard({ productData, kycData, shippingData }) {
  console.log(productData, kycData, shippingData);
  return (
    <div className="flex justify-center gap-32">
      <div className="shadow-black shadow-sm p-7 rounded-md">
        <h2 className="text-2xl  text-indigo-600">Total products</h2>
        <p className="mt-3 font-semibold">{productData.length}</p>
      </div>
      <div className="shadow-black shadow-sm p-7 rounded-md">
        <h2 className="text-2xl text-yellow-600">Kyc registration</h2>
        <p className="mt-3 font-semibold">{kycData.length}</p>
      </div>
      <div className="shadow-black shadow-sm p-7 rounded-md">
        <h2 className="text-2xl text-green-600">Shipping details</h2>
        <p className="mt-3 font-semibold">{shippingData.length}</p>
      </div>
    </div>
  );
}
