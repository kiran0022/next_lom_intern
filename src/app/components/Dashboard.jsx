"use client";
import React from "react";
import {
  AiFillMinusCircle,
  AiOutlineArrowUp,
  AiFillPlusCircle,
  AiOutlineUsergroupAdd,
  AiFillCodeSandboxCircle,
} from "react-icons/ai";

import { Chart } from "react-google-charts";

export default function Dashboard() {
  const dataOld = [
    ["day", "count"],
    ["S", 200],
    ["M", 120],
    ["T", 100],
    ["W", 120],
    ["T", 90],
    ["F", 60],
    ["S", 220],
    ["M", 159],
    ["T", 100],
  ];

  const dataNew = [
    ["day", "count"],
    ["S", 100],
    ["M", 60],
    ["T", 40],
    ["W", 100],
    ["T", 30],
    ["F", 50],
    ["S", 200],
    ["M", 80],
    ["T", 40],
  ];
  const diffdata = {
    old: dataOld,
    new: dataNew,
  };

  // const options = {
  //   chart: {
  //     title: "Shipping overview",
  //     // subtitle: "Sales, Expenses, and Profit: 2014-2017",
  //   },
  // };

  const options = {
    diff: { oldData: { widthFactor: 0.2 }, newData: { widthFactor: 1 } },
    bar: { groupWidth: "5" },
    legend: { position: "top" },
    chart: {
      title: "sipping overview",
    },
  };

  const returns = {
    chart: {
      title: "Returns",
    },
    legend: { position: "none" },
  };
  const data = [
    ["", "Sales", "Expenses"],
    [" ", 30, 30],
    ["", 30, 30],
  ];
  return (
    <section className="grid grid-cols-5 gap-4 justify-around">
      <div>
        <div className=" max-w-[140px] ml-10 flex flex-col gap-10 text-center rounded-md shadow-md">
          <div className="mt-7 bg-red-700 rounded-2xl w-16 self-center h-16  justify-center">
            <AiFillMinusCircle className="inline text-4xl mt-3 text-white " />
          </div>
          <div>
            <p className="text-sm text-stone-500">Flagged items</p>
            <p className="text-start ml-5 text-3xl ">500</p>
          </div>
          <div className="bg-red-700 max-w-max self-center py-1 px-2 text-sm text-white rounded-lg mb-16">
            <AiOutlineArrowUp className="inline text-lg" /> 3.45%
          </div>
        </div>
      </div>
      <div>
        <div className=" max-w-[140px] flex flex-col gap-10 text-center rounded-md shadow-md">
          <div className="mt-7 bg-teal-600 rounded-2xl w-16 self-center h-16  justify-center">
            <AiFillPlusCircle className="inline text-4xl mt-3 text-white " />
          </div>
          <div>
            <p className="text-sm text-stone-500">Flagged items</p>
            <p className="text-start ml-5 text-3xl ">500</p>
          </div>
          <div className="bg-teal-600 max-w-max self-center py-1 px-2 text-sm text-white rounded-lg mb-16">
            <AiOutlineArrowUp className="inline text-lg" /> 3.45%
          </div>
        </div>
      </div>

      <div className="col-span-3">
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="300px"
          diffdata={diffdata}
          options={options}
        />
      </div>

      <div className=" ml-24 mt-3 col-span-2 w-[240px] flex flex-col gap-8 text-center rounded-md shadow-md ">
        <div className="mt-7 bg-blue-700 rounded-2xl w-16 self-center h-16  justify-center">
          <AiOutlineUsergroupAdd className="inline text-4xl mt-3 text-white " />
        </div>
        <div>
          <p>KYC registrations</p>
          <p className="text-start ml-14 text-3xl">60,586</p>
        </div>
        <div className="bg-blue-700 max-w-max self-center py-1 px-2 text-sm text-white rounded-lg mb-10">
          <AiOutlineArrowUp className="inline text-lg" /> 3.45%
        </div>
      </div>

      <div className=" col-span-2 w-[350px] h-48 flex gap-10 text-center rounded-md shadow-md ">
        <div className="mt-7 bg-rose-200 rounded-2xl w-24 self-center h-16 ml-2  justify-center">
          <p>
            <AiFillCodeSandboxCircle className="inline text-4xl mt-3 text-black " />
          </p>
          <p className="mt-5 font-semibold">500</p>
        </div>
        <Chart
          width="100%"
          height="100px"
          chartType="Line"
          data={data}
          options={returns}
        />
      </div>
    </section>
  );
}
