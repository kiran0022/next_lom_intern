import getTableData from "@/utils/getAllProduct";
import React from "react";
import Shipping from "@/app/components/Shipping";
import { getAllShipping } from "@/utils/getAllShipping";

export default async function Page() {
  const data = await getAllShipping();

  return <Shipping data={data} />;
}
export const runtime = "edge";
