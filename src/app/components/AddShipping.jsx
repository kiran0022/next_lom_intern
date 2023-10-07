"use client";
import { useRouter } from "next/navigation";
import {} from "next/router";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

export default function AddShipping() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    const { orderID, product, quantity, date, price, status } = data;

    console.log(orderID, product, quantity, date, price, status);
    try {
      const res = await fetch("http://localhost:3000/api/shipping", {
        method: "POST",
        body: JSON.stringify({
          orderID,
          product,
          quantity,
          date,
          price,
          status,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        router.push("/admin/shipping");
        router.refresh();
      } else {
        throw new Error("failed to create Shipping");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-start mt-2">
        <label htmlFor="orderID" className="block text-stone-500">
          Order ID
        </label>
        <input
          {...register("orderID", { required: true })}
          type="text"
          id="orderID"
          className="outline-none w-96 border-regal-blue border-[1px] p-2 rounded-md mt-2"
        />
        {errors.orderID && (
          <p className="text-red-500">Order ID name required</p>
        )}
      </div>
      <div className="text-start mt-2">
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
      <div className="text-start mt-2">
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

      <div className="text-start mt-2">
        <label htmlFor="price" className="block text-stone-500">
          Price
        </label>
        <input
          {...register("price", { required: true })}
          type="number"
          id="price"
          className="outline-none w-96 border-regal-blue border-[1px] p-2 rounded-md mt-2"
        />
        {errors.price && <p className="text-red-500">price is required</p>}
      </div>
      <div className="text-start mt-2">
        <label htmlFor="date" className="block text-stone-500">
          Date
        </label>
        <input
          {...register("date", { required: true })}
          type="date"
          id="date"
          className="outline-none w-96 border-regal-blue border-[1px] p-2 rounded-md mt-2"
        />
        {errors.price && <p className="text-red-500">date is required</p>}
      </div>
      <div className="text-start mt-2">
        <label htmlFor="status" className="block text-stone-500">
          Status
        </label>
        <input
          {...register("status", { required: true })}
          type="text"
          id="status"
          className="outline-none w-96 border-regal-blue border-[1px] p-2 rounded-md mt-2"
        />
        {errors.status && <p className="text-red-500">Status is required</p>}
      </div>

      <button
        type="submit"
        className=" mt-2 py-2 px-16 rounded-md text-white bg-regal-blue"
      >
        Add
      </button>
    </form>
  );
}
