import getAllProduct from "@/utils/getAllProduct";
import React from "react";
import Inventory from "@/app/components/Inventory";

export default async function Page() {
  const data = await getAllProduct();

  return <Inventory data={data} />;
}
