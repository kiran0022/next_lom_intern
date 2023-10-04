import React from "react";
import SignInForm from "./components/SignInForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

import bcrypt from "bcryptjs";

export default async function page() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/admin/dashboard");

  //123
  // $2a$10$P01FLJ/HrIwlIXq.mKgNQOWEonN.ZpcLswlTVdp1Ujgc3VqPAlMAe
  //abc
  //$2a$10$n54gRV1.fUilSFdEiDZZCOV7.5sQivbHQBjz2Z2.Wdnm49Vgf5dpK
  return (
    <div>
      <SignInForm />
    </div>
  );
}
