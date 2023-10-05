"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaUserGroup } from "react-icons/fa6";

export default function KYC({ data }) {
  const [selectedUser, setSelectedUser] = useState("");

  return (
    <div className=" ml-10 grid grid-flow-col col-span-2">
      <div>
        <div className="text-center flex rounded-md h-24 px-6 gap-28 max-w-max shadow-md">
          <div className=" bg-red-700 rounded-2xl w-14 self-center h-14 shadow-lg">
            <FaUserGroup className="inline text-3xl mt-3 text-white " />
          </div>

          <div className="mt-5">
            <p className="text-sm text-stone-500">total </p>
            <p className="text-2xl font-semibold">75 </p>
          </div>
        </div>
        <button className="mt-3">
          {" "}
          <Link
            href={"/admin/kyc/addKyc"}
            className="cursor-pointer p-2 bg-blue-500 rounded-md text-sm"
          >
            Add New KYC
          </Link>
        </button>

        <div className="flex flex-col gap-3 mt-6 shadow-md max-w-md rounded-md p-6">
          <h2 className="font-semibold text-xl p-4">Customers</h2>
          {data.map((user) => {
            return (
              <div className="flex gap-4" key={user._id}>
                <div className="w-16 h-16 rounded-full">
                  <Image
                    alt="user profile"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
                    width={1000}
                    height={1000}
                    layout="responsive"
                    className="rounded-full"
                  />
                </div>
                <div
                  onClick={() => setSelectedUser(user.kyc)}
                  className="cursor-pointer"
                >
                  <p>{user.name}</p>

                  <p>{new Date(user.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            );
          })}

          {/* <div className="flex gap-4">
          <div className="w-16 h-16 rounded-full bg-green-700"></div>
          <div>
            <p>Jacob Jones</p>
            <p>today</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-16 h-16 rounded-full bg-green-700"></div>
          <div>
            <p>enny Wilson</p>
            <p>today</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-16 h-16 rounded-full bg-green-700"></div>
          <div>
            <p>Leslie Alexander</p>
            <p>today</p>
          </div>
        </div> */}
        </div>
      </div>
      <div className="mr-6">
        <h2 className="text-4xl">
          fix add kyc sometimes not working properly base64 add kyc component
        </h2>
        <h2 className="self-center mb-3">Document preview</h2>
        {/* {setSelect(() =>
          data.filter((user) => {
            user._id === selectedUser;
          })
        )} */}
        {selectedUser ? (
          <iframe
            width="100%"
            height="450px"
            src={selectedUser}
            title="W3Schools Free Online Web Tutorials"
          ></iframe>
        ) : (
          <h2>No document!</h2>
        )}
      </div>
    </div>
  );
}
