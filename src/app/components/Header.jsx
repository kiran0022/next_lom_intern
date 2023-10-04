"use client";
import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import header_bg from "../../../assets/header.png";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
export default function Header() {
  const pathname = usePathname();
  console.log();

  const routeBasedHeader = [
    {
      route: "/admin/dashboard",
      header: "Welcome to the LOM India warehouse management system",
    },
    {
      route: "/admin/inventory",
      header: "Inventory management",
    },
    {
      route: "/admin/inventory/addproduct",
      header: "Add product to inventory",
    },
    {
      route: "/admin/shipping",
      header: "Shipping",
    },
    {
      route: "/admin/returns",
      header: "Returns",
    },
    {
      route: "/admin/kyc",
      header: "KYC",
    },
    {
      route: "/admin/kyc/addKyc",
      header: "Add new KYC",
    },
  ];

  const filterPath = routeBasedHeader.filter(
    (pagePath) => pagePath.route === pathname
  );
  return (
    <header
      className="h-28 bg-blue-500  text-white rounded-b-xl flex justify-between py-5 mb-4"
      // style={{
      //   backgroundImage: `url(${header_bg})`,
      //   width: "100%",
      //   height: "100%",
      // }}
    >
      <div className="text-xl max-w-md px-4 font-semibold">
        {filterPath?.[0]?.header}
      </div>
      <div className="flex">
        <button
          onClick={() => signOut()}
          className="bg-blue-500 text-white px-2 mr-5 w-30 h-8 mt-4 rounded-full hover:bg-white hover:text-blue-500 hover:font-semibold "
        >
          Sign out
        </button>

        <div className="group">
          <FaCircleUser className="mr-10 mt-3 text-4xl float-left " />
          <div className=" invisible group-hover:visible ">
            {/* <FaCircleUser />
            <FaCircleUser />
          <FaCircleUser /> */}
            <div className="invisible group-hover:visible group-hover:z-10 ">
              {/* <h3>Alexander</h3>
              <p>system admin</p> */}
            </div>
          </div>
        </div>

        {/* create user compoenet so u can call anytime */}
      </div>
    </header>
  );
}
