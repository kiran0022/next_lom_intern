"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    const { id, password } = data;
    try {
      const res = await signIn("credentials", {
        id,
        password,
        redirect: false,
      });

      if (res.error) {
        setError(
          { id, password },
          {
            type: "manual",
            message: "Invalid credentials",
          }
        );
        return;
      }

      router.replace("admin/dashboard");

      // console.log(data);
      // const res = await signIn("http://localhost:3000/api/users", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // });

      // const result = await res.json();

      // const _id = result._id;

      // localStorage.setItem("userID", _id);
      // _id && router.push("/admin/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  // router.push('/admin/dashboard')

  return (
    <div className="grid place-items-center h-screen">
      <div className="text-center max-w-max  m-auto mt-24 ">
        {/* <h2 className="font-bold text-3xl mt-2">
          remove styled compoents package json
        </h2> */}
        <h2 className="font-bold text-3xl mt-2">Sign In</h2>
        <p className="text-stone-500 text-base mt-3">
          Sign in to stay connected.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-start mt-6 ">
            <label htmlFor="id" className="block text-stone-500">
              ID
            </label>
            <input
              {...register("id", { required: true })}
              type="text"
              id="id"
              className="outline-none w-96 border-regal-blue border-[1px] p-2 rounded-md mt-2"
            />
            {errors.id && <p className="text-red-500">ID is required</p>}
            {errors.id && <p>{errors.id.message}</p>}
          </div>
          <div className="text-start mt-6">
            <label htmlFor="pass" className="block text-stone-500">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              id="password"
              className="outline-none w-96 border-regal-blue border-[1px] p-2 rounded-md mt-2"
            />
            {errors.password && (
              <p className="text-red-500">Password is required</p>
            )}
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className="flex justify-between mt-5">
            <div className="text-stone-500">
              <input
                type="checkbox"
                id="remember"
                className="w-[13px] h-[13px] mr-2"
              />
              <label htmlFor="remember">Remember me?</label>
            </div>
            <p className=" text-regal-blue cursor-pointer">Forgot Password</p>
          </div>
          <button
            type="submit"
            className=" mt-4 py-2 px-16 rounded-md text-white bg-regal-blue"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
