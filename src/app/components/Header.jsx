import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import header_bg from "../../../assets/header.png";

export default function Header() {
  const routeBasedHeader = [
    {
      route: "/dashboard",
      header: "Welcome to the LOM India warehouse management system",
    },
    {
      route: "/inventory",
      header: "Inventory management",
    },
    {
      route: "/inventory/addproduct",
      header: "Add product to inventory",
    },
    {
      route: "/shipping",
      header: "Shippin",
    },
    {
      route: "/returns",
      header: "Returns",
    },
    {
      route: "/kyc",
      header: "KYC",
    },
  ];

  return (
    <header
      className="h-28 bg-blue-500  text-white rounded-b-xl flex justify-between py-5 mb-4"
      // style={{
      //   backgroundImage: `url(${header_bg})`,
      //   width: "100%",
      //   height: "100%",
      // }}
    >
      <div className="text-xl max-w-md px-4 font-semibold">main repo</div>
      <div>
        <div className="group">
          <FaCircleUser className="mr-10 mt-3 text-4xl float-left " />
          <div className=" invisible group-hover:visible ">
            {/* <FaCircleUser />
            <FaCircleUser />
          <FaCircleUser /> */}
            <div className="invisible group-hover:visible group-hover:z-10 ">
              <h3>Alexander</h3>
              <p>system admin</p>
            </div>
          </div>
        </div>

        {/* create user compoenet so u can call anytime */}
      </div>
    </header>
  );
}
