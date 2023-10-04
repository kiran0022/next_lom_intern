"use client";
import { useRouter, use } from "next/navigation";
import {} from "next/router";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

export default function AddUser() {
  // const [newProduct, setNewProduct] = useState({
  //   product: "",
  //   quantity: "",
  //   invoice: "",
  // });

  // useEffect(() => {
  //   setNewProduct((currProduct) => {
  //     return {
  //       ...currProduct,
  //       id: uuidv4(),
  //     };
  //   });
  // }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const router = useRouter();

  // const onSubmit = async (data) => {
  //   console.log(data);
  //   const res = await fetch("http://localhost:3000/api/products", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });

  //   if (res.ok) {
  //     router.push("/admin/inventory");
  //     router.refresh();
  //   } else {
  //     throw new Error("failed to create product");
  //   }
  // };

  const [Base64String, setBase64String] = useState("");

  const onSubmit = async (data) => {
    const file = data.invoice;

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target.result;
        setBase64String(base64);
      };
      reader.readAsDataURL(file);
    }
    data = { ...data, invoice: Base64String };

    // const encode = btoa(data.invoice);

    // console.log(encode);
    // console.log("decode", atob(encode));

    // console.log("atob", btoa(atob(data.invoice)) === data.invoice);

    // formData.set("file", data);

    // data = { ...data, file };

    // console.log("data config", data);
    //my idea
    // console.log(formData.append({ ...data }, file));

    // formData.set("file", data);
    // console.log(data.invoice);

    // formData.append("file", data);
    // data = { ...data, invoice: data.invoice?.name };
    // formData.append("invoice", JSON.stringify(data));
    // console.log("data check", JSON.stringify(data));

    // console.log("form dataaaa", formData);

    const { product, quantity, invoice } = data;

    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        body: JSON.stringify({ product, quantity, invoice }),
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
      {/* <iframe
        src={Base64String}
        title="W3Schools Free Online Web Tutorials"
      ></iframe> */}
      <div className="text-start mt-6">
        <label htmlFor="invoice" className="block text-stone-500">
          Invoice
        </label>

        {/* <input
          type="file"
          id="invoice"
          name="invoice"
          // {...register("invoice", { required: true })}
          onChange={(e) => setFile(e.target.files?.[0])}
        /> */}

        <Controller
          control={control}
          name={"invoice"}
          rules={{ required: "invoice is required" }}
          render={({ field: { value, onChange, ...field } }) => {
            return (
              <input
                {...field}
                value={value?.fileName}
                onChange={(event) => {
                  onChange(event.target.files?.[0]);
                }}
                type="file"
                id="invoice"
                name="invoice"
              />
            );
          }}
        />
      </div>

      {/* <div className="text-start mt-6">
        <label htmlFor="invoice" className="block text-stone-500">
          Invoice
        </label>
        <input
          {...register("invoice", { required: true })}
          type="file"
          id="invoice"
          // value={uuidv4()}
          className="outline-none w-96 border-regal-blue border-[1px] p-2 rounded-md mt-2"
        />
        {errors.invoice && (
          <p className="text-red-500">Invoice is required</p>
        )}
      </div> */}

      <button
        type="submit"
        className=" mt-4 py-2 px-16 rounded-md text-white bg-regal-blue"
      >
        Add
      </button>
    </form>
  );
}
