"use client";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
export default function AddKyc() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const router = useRouter();
  // const decodeBase64 = () => {
  //   if (fileData) {
  //     try {
  //       const decodedData = atob(fileData);
  //       console.log(decodedData);
  //     } catch (error) {
  //       console.error("Error decoding Base64:", error);
  //     }
  //   } else {
  //     console.warn("No file data to decode.");
  //   }
  // };
  const [Base64String, setBase64String] = useState("");

  const onSubmit = async (data) => {
    const file = data.kyc;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target.result;
        setBase64String(base64);
      };
      reader.readAsDataURL(file);
    }
    data = { ...data, kyc: Base64String };

    const { name, address, contact, kyc } = data;
    console.log(kyc, data);

    try {
      const res = await fetch("http://localhost:3000/api/kyc", {
        method: "POST",
        body: JSON.stringify({ name, address, contact, kyc }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        console.log("response", res.json());
        router.push("/admin/kyc");
        router.refresh();
      } else {
        throw new Error("failed to create product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-start mt-6 ">
        <label htmlFor="id" className="block text-stone-500">
          Name
        </label>
        <input
          {...register("name", { required: true })}
          type="text"
          id="name"
          className="outline-none w-96 border-regal-blue border-[1px] p-2 rounded-md mt-2"
        />
        {errors.name && <p className="text-red-500">Name required</p>}
      </div>
      <div className="text-start mt-6 ">
        <label htmlFor="id" className="block text-stone-500">
          Address
        </label>
        <input
          {...register("address", { required: true })}
          type="text"
          id="address"
          className="outline-none w-96 border-regal-blue border-[1px] p-2 rounded-md mt-2"
        />
        {errors.address && <p className="text-red-500">Address required</p>}
      </div>
      <div className="text-start mt-6 ">
        <label htmlFor="id" className="block text-stone-500">
          Contact
        </label>
        <input
          {...register("contact", { required: true })}
          type="number"
          id="contact"
          className="outline-none w-96 border-regal-blue border-[1px] p-2 rounded-md mt-2"
        />
        {errors.contact && <p className="text-red-500">Contact required</p>}
      </div>
      <div className="text-start mt-6 ">
        <label htmlFor="id" className="block text-stone-500">
          Document
        </label>

        <Controller
          control={control}
          name={"kyc"}
          rules={{ required: "kyc is required" }}
          render={({ field: { value, onChange, ...field } }) => {
            return (
              <input
                {...field}
                value={value?.fileName}
                onChange={(event) => {
                  onChange(event.target.files?.[0]);
                }}
                type="file"
                id="kyc"
                name="kyc"
              />
            );
          }}
        />
        {errors.kyc && <p className="text-red-500">kyc document required</p>}
      </div>

      <button
        type="submit"
        className=" mt-4 py-2 px-16 rounded-md text-white bg-regal-blue"
      >
        Add
      </button>
    </form>
  );
}
