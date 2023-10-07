"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiFillFilter } from "react-icons/ai";
import ShippingTable from "./ShippingTable";
export default function Inventory({ data }) {
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalReceived, setTotalReceived] = useState(0);
  const [totalReturn, setTotalReturn] = useState(0);
  const [totalDelay, setTotalDelay] = useState(0);

  useEffect(() => {
    setTotalReturn(
      () =>
        data.filter((item) => item.status.toLowerCase() == "returned").length
    );

    setTotalOrders(() => data.length);

    setTotalReceived(
      () =>
        data.filter((item) => item.status.toLowerCase() == "confirmed").length
    );

    setTotalDelay(
      () => data.filter((item) => item.status.toLowerCase() == "delayed").length
    );
  }, [data]);

  return (
    <div className="mx-4 h-[80vh] overflow-auto scrollbar-hide">
      <h2 className="text-2xl font-bold ml-4">Overall Orders</h2>
      <div className="flex mt-5 gap-20">
        <ul className=" w-56 border-r-2 flex flex-col gap-3 mx-5">
          <li className="font-semibold text-blue-600 text-lg">Total Orders</li>
          <li className="font-semibold">{totalOrders}</li>
          <li className="text-stone-500 text-sm">Last 7 days</li>
        </ul>
        <ul className=" w-64  border-r-2 flex flex-col gap-3 px-6">
          <li className="font-semibold text-yellow-500 text-lg">
            Total Received
          </li>
          <li className="font-semibold">{totalReceived}</li>
          <li className="text-stone-500 text-sm">Last 7 days</li>
        </ul>
        <ul className=" w-64  border-r-2 flex flex-col gap-3 px-6">
          <li className="font-semibold text-purple-700 text-lg">
            Total Returned
          </li>
          <li className="font-semibold">{totalReturn}</li>
          <li className="text-stone-500 text-sm">Last 7 days cost</li>
        </ul>
        <ul className=" w-60 text-right  border-r-2 flex flex-col gap-3 px-6">
          <li className="font-semibold text-orange-700 text-lg">On the way</li>
          <li className="font-semibold">{totalDelay}</li>
          <li className="text-stone-500 text-sm">Ordered</li>
        </ul>
      </div>
      <div className="flex justify-between mt-7 ">
        <div className="ml-3 mb-5">
          <h3 className="font-semibold ">Products</h3>
        </div>
        <div className="text-sm">
          <Link href={"/admin/shipping/addShipping"}>
            <button className="px-2 py-1 bg-blue-600 text-white mx-2 rounded-md">
              Add product
            </button>
          </Link>

          <button className="mx-2 border-2 rounded-md px-2 py-1">
            <AiFillFilter className="inline -mt-1 text-lg  " />
            Filters
          </button>
          <button className="px-2 py-1 mx-6 border-2  rounded-md">
            Order history
          </button>
        </div>
      </div>
      <ShippingTable data={data} />
    </div>
  );
}
