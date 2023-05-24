import React from "react";
import Image from "next/image";

const SignUpForm = () => {
  return (
    <div>
      <div>
        <div
          className="max-w-md mx-auto p-6 rounded-xl shadow-xl
            md:shadow-none bg-white"
        >
          <div className="flex items-center justify-start gap-2 mb-24">
            <Image src="/logo.png" width={40} height={20} alt="logo" />
            <div className="text-right w-fit">
              <p className="text-xs tracking-widest uppercase font-thin">
                Rest In
              </p>
              <p className="text-lg font-['Prata'] leading-tight">Cheese</p>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-['Prata']">Create an account</h1>
            <p className="text-sm font-thin tracking-wide">
              {`Let's get started.`}
            </p>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="py-12 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div className="relative">
                <input
                  autoComplete="off"
                  id="name"
                  name="name"
                  type="text"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none"
                  placeholder="Name"
                />
                <label
                  for="name"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm font-thin peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text"
                >
                  Name
                </label>
              </div>
              <div className="relative">
                <input
                  autoComplete="off"
                  id="email"
                  name="email"
                  type="text"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none"
                  placeholder="Email address"
                />
                <label
                  for="email"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm font-thin peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text"
                >
                  Email Address
                </label>
              </div>
              <div className="relative">
                <input
                  autoComplete="off"
                  id="password"
                  name="password"
                  type="password"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none"
                  placeholder="Password"
                />
                <label
                  for="password"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm font-thin peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text"
                >
                  Password
                </label>
              </div>
              <div className="relative">
                <button className="bg-fuchsia-950 text-white rounded-md px-4 py-1 hover:bg-fuchsia-900 transition-all duration-200 ease-linear">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
