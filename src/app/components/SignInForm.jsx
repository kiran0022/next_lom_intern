"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(id, password, checked);
    try {
      const res = await signIn("credentials", {
        id,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        console.log("invalid");
        return;
      }

      router.replace("admin/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <div className="text-start mt-6 ">
            <label htmlFor="id" className="block text-stone-500">
              ID
            </label>
            <input
              onChange={(e) => setId(e.target.value)}
              type="text"
              id="id"
              className="outline-none w-96 border-regal-blue border-[1px] p-2 rounded-md mt-2"
            />
          </div>
          <div className="text-start mt-6">
            <label htmlFor="pass" className="block text-stone-500">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className="outline-none w-96 border-regal-blue border-[1px] p-2 rounded-md mt-2"
            />
          </div>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <div className="flex justify-between mt-5">
            <div className="text-stone-500">
              <input
                type="checkbox"
                id="remember"
                value={checked}
                onChange={(e) => setChecked(!checked)}
                className="w-[13px] h-[13px] mr-2"
              />
              <label htmlFor="remember">Remember me?</label>
            </div>
            <p className=" text-regal-blue cursor-pointer">Forgot Password</p>
          </div>
          <button
            type="submit"
            className=" mt-4 hover:bg-gray-400,font-small py-2 px-16 rounded-md text-white bg-regal-blue"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
