"use client";
import React from "react";
import ProductTable from "./ProductTable";
import { AiFillFilter } from "react-icons/ai";
import Link from "next/link";
export default function Inventory({ data }) {
  return (
    <div className="mx-4 h-[80vh] overflow-y-auto scrollbar-hide">
      <h2 className="text-2xl font-bold ml-4">Overall Inventory</h2>
      <div className="flex mt-5">
        <ul className=" w-40  border-r-2 flex flex-col gap-3 mx-5">
          <li className="font-semibold text-blue-600 text-lg">Catogories</li>
          <li className="font-semibold">14</li>
          <li className="text-stone-500 text-sm">Last 7 days</li>
        </ul>
        <ul className=" w-48  border-r-2 flex flex-col gap-3 px-6">
          <li className="font-semibold text-yellow-500 text-lg">
            Total Products
          </li>
          <li className="font-semibold">856</li>
          <li className="text-stone-500 text-sm">Last 7 days</li>
        </ul>
        <div className="flex border-r-2 px-6">
          <ul className=" w-48  flex flex-col gap-3 ">
            <li className="font-semibold text-blue-600 text-lg">Low stocks</li>
            <li className="font-semibold">14</li>
            <li className="text-stone-500 text-sm">Ordered</li>
          </ul>
          <ul className="flex flex-col-reverse gap-2">
            <li className="text-stone-500">Not in stock</li>
            <li className="font-semibold">2</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between mt-7 ">
        <div className="ml-3 mb-5">
          <h3 className="font-semibold ">Products</h3>
        </div>
        <div className="">
          <Link href={"/admin/inventory/addproduct"}>
            <button className="px-2 py-1 bg-blue-600 text-white mx-2 rounded-md">
              Add product
            </button>
          </Link>

          <button className="mx-2 border-2 rounded-md px-2 py-1">
            <AiFillFilter className="inline -mt-1 text-lg  " />
            Filters
          </button>
        </div>
      </div>
      <ProductTable data={data} />
    </div>
  );
}
