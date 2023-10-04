import React from "react";
import {
  AiFillMinusCircle,
  AiOutlineArrowUp,
  AiFillPlusCircle,
  AiOutlineUsergroupAdd,
  AiFillCodeSandboxCircle,
} from "react-icons/ai";

export default function NewDashboard() {
  return (
    <section className="border-2 h-[80vh] grid grid-cols-6 gap-2 p-3">
      <div className=" border-2 col-start-1 bg-neutral-500  text-center">
        <div className="flex flex-col p-3">
          <div className="self-center w-8 h-8 bg-red-500 justify-center">
            <AiFillMinusCircle className="m-auto " />
          </div>
          <div className="">
            <p>flagged items</p>
            <p className="text-start">500</p>
          </div>
          <div>
            <AiOutlineArrowUp className="inline -mt-2" /> 3.45%
          </div>
        </div>
      </div>
      <div className=" border-2 col-start-2">flag2</div>
      <div className=" border-2 col-start-3 col-end-7">barchart</div>
      <div className=" border-2 col-start-2">kyc flag</div>
      <div className=" border-2 col-start-5 row-span">retrun mountain</div>
    </section>
  );
}
