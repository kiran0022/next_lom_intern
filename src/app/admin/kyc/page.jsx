import KYC from "@/app/components/KYC";
import { getAllKyc } from "@/utils/getAllKyc";
import React from "react";

export default async function page() {
  const data = await getAllKyc();
  return (
    <div>
      <KYC data={data} />
    </div>
  );
}
