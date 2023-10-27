"use client";
import { useRouter, use } from "next/navigation";
import {} from "next/router";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

export default function AddUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    const { product, quantity, unit } = data;

    try {
      const res = await fetch(`${process.env.API_URL}/api/products`, {
        method: "POST",
        body: JSON.stringify({ product, quantity, unit }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        console.log(res.json());
        router.push("/admin/inventory");
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
          Name of Product
        </label>
        <input
          {...register("product", { required: true })}
          type="text"
          id="product"
          className="outline-none w-96 border-regal-blue border-[1px] p-2 rounded-md mt-2"
        />
        {errors.product && (
          <p className="text-red-500">Product name required</p>
        )}
      </div>
      <div className="text-start mt-6">
        <label htmlFor="pass" className="block text-stone-500">
          Quantity
        </label>
        <input
          {...register("quantity", { required: true })}
          type="number"
          id="quantity"
          className="outline-none w-96 border-regal-blue border-[1px] p-2 rounded-md mt-2"
        />
        {errors.quantity && (
          <p className="text-red-500">Quantity is required</p>
        )}
      </div>

      <div className="text-start mt-6">
        <label htmlFor="unit" className="block text-stone-500">
          Unit Price
        </label>
        <input
          {...register("unit", { required: true })}
          type="number"
          id="quantity"
          className="outline-none w-96 border-regal-blue border-[1px] p-2 rounded-md mt-2"
        />
        {errors.unit && <p className="text-red-500">Unit price is required</p>}
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
