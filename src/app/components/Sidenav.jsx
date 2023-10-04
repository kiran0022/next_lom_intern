import Link from "next/link";
import React from "react";
import {
  AiOutlineHome,
  AiOutlineDashboard,
  AiFillDashboard,
  AiOutlineCodeSandbox,
} from "react-icons/ai";

import logo from "../../../assets/logo.png";
import Image from "next/image";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
export default function Sidenav() {
  return (
    <div className="flex">
      <div className="flex flex-col h-screen p-3 bg-white shadow w-64">
        <div className="space-y-3">
          {/* image */}
          <Image src={logo} width={400} height={300} alt="logo" />
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm hover:shadow-xl hover:border-2 hover:rounded-md">
                <Link
                  href="/admin/dashboard"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <span className="text-xl">
                    <AiOutlineDashboard />
                  </span>
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="rounded-sm hover:shadow-xl hover:border-2 hover:rounded-md">
                <Link
                  href="/admin/inventory"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <span className="text-xl">
                    <AiFillDashboard />
                  </span>
                  <span>Inventory</span>
                </Link>
              </li>
              <li className="rounded-sm hover:shadow-xl hover:border-2 hover:rounded-md">
                <Link
                  href={"/admin/shipping"}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <span>
                    <FaShippingFast className="text-xl" />
                  </span>
                  <span>Shipping</span>
                </Link>
              </li>
              <li className="rounded-sm hover:shadow-xl hover:border-2 hover:rounded-md">
                <Link
                  href="/admin/returns"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <span className="text-xl">
                    <AiOutlineCodeSandbox />
                  </span>

                  <span>Returns</span>
                </Link>
              </li>
              <li className="rounded-sm hover:shadow-xl hover:border-2 hover:rounded-md">
                <Link
                  href="/admin/kyc"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <span className="text-xl">
                    <FaPeopleGroup />
                  </span>
                  <span>KYC</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
