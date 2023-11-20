"use client";

import Login from "@/components/LoginForm";
import { motion } from "framer-motion";
import Image from "next/image";
import Router from "next/router";
import { React, useEffect } from "react";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const user = useSelector((state) => state.user.currentUser);

  if (user) {
    Router.push("/");
  } else {
    return (
      <div>
        <div className="bg-[url('https://images.unsplash.com/photo-1595272568891-123402d0fb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80')] bg-cover bg-black/20 bg-blend-multiply md:bg-none md:bg-transparent">
          <div className="h-[calc(100vh-76px)] p-4 max-w-7xl mx-auto">
            <div className="flex items-center h-full">
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex-1 hidden md:flex justify-end"
              >
                <Image
                  src="https://images.unsplash.com/photo-1613452707901-21b3fd7f7e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  width={500}
                  height={350}
                  alt=""
                  priority
                />
              </motion.div>

              <div className="flex-1">
                <Login />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default LoginPage;
