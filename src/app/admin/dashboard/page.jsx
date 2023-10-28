import Dashboard from "@/app/components/Dashboard";
import NewDashboard from "@/app/components/NewDashboard";
import { getAllKyc } from "@/utils/getAllKyc";
import getAllProduct from "@/utils/getAllProduct";
import { getAllShipping } from "@/utils/getAllShipping";
import React from "react";

export default async function dashboard() {
  const productData = await getAllProduct();
  const kycData = await getAllKyc();
  const shippingData = await getAllShipping();

  return (
    <div className="flex flex-col justify-center text-center h-[70vh] w-[70vw]">
      <Dashboard
        productData={productData}
        kycData={kycData}
        shippingData={shippingData}
      />
    </div>
  );
}

export const runtime = "edge";
