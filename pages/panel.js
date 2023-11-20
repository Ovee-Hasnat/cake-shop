"use client";

import AdminHome from "@/components/AdminHome";
import AdminLogin from "@/components/AdminLogin";
import Router from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const Panel = () => {
  const isAdmin = useSelector((state) => state.user.currentUser?.isAdmin);
  const Admin = useSelector((state) => state.user);

  if (!isAdmin) {
    Router.push("/");
  } else {
    return (
      <div>
        <div className="my-4">
          <h1 className="text-5xl text-center font-semibold tracking-tighter">
            Admin Panel
          </h1>
        </div>
        {Admin.admin && !Admin.adminError ? <AdminHome /> : <AdminLogin />}
      </div>
    );
  }
};

export default Panel;
