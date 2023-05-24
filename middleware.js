"use client";

import Cookies from "js-cookie";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { useSelector } from "react-redux";

// This function can be marked `async` if using `await` inside
export const Middleware = () => {
  //   const token = Cookies.get("token");
  //   console.log("Hello");
  //   let loggedInUser = true;
  //   if (loggedInUser) {
  //     return NextResponse.redirect(
  //       new URL("http://localhost:3000/", NextRequest.url)
  //     );
  //   }
  // };
  // // See "Matching Paths" below to learn more
  // export const config = {
  //   matcher: "/login",
};

export default Middleware;
