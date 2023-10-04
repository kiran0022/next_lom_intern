// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";

import middleware from "next-auth/middleware";

// export default withAuth(
//   function middleware(request) {
//     if (
//       request.nextUrl.pathname.startsWith("/admin") &&
//       request.nextauth.token?.role !== "admin"
//     ) {
//       return NextResponse.rewrite(new URL("/denied", request.url));
//     }
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => !!token,
//     },
//   }
// );

// export const config = {
//   matcher: ["/admin/:path*"],
// };

export { default } from "next-auth/middleware";
export const config = { matcher: ["/admin/:path*"] };
