import React, { useState } from "react";
import Image from "next/image";
import { login } from "@/redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { CheckIcon } from "@heroicons/react/24/solid";


const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { phoneNumber });
  };

  let disable;
  if (phoneNumber.length == 11 && phoneNumber.match(/^[0-9]+$/)) {
    disable = false;
  } else {
    disable = true;
  }

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
          <div className="space-y-6">
            <h1 className="text-2xl font-['Prata'] tracking-tighter">
              Welcome
            </h1>
            <p className="text-sm font-thin tracking-wide">
              Not required to Sign-up, just Sign-in &#x2714;
              <br />
              Please enter your phone number.
            </p>
          </div>
          <div>
            <div className="py-12 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div className="relative h-9">
                <input
                  autoComplete="off"
                  id="phone"
                  name="phone"
                  type="tel"
                  className={
                    disable
                      ? "peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none absolute bg-transparent z-10 font-semibold"
                      : "peer placeholder-transparent h-10 w-full border-b-2 border-green-700 text-gray-900 focus:outline-none absolute bg-transparent z-10 font-semibold"
                  }
                  placeholder="Phone"
                  required
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <label
                  htmlFor="phone"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm font-thin peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text"
                >
                  Phone Number
                </label>
                {disable ? (
                  <></>
                ) : (
                  <CheckIcon className="w-8 text-green-700 absolute top-2 right-4" />
                )}
              </div>

              {phoneNumber.length > 0 && disable ? (
                <p className="text-xs text-blue-700">{11- phoneNumber.length } digits required.</p>
              ) : (
                <></>
              )}

              <div className="relative space-y-6">
                <button
                  type="submit"
                  className={
                    !disable
                      ? "bg-fuchsia-950 text-white rounded-md px-6 py-2 hover:bg-fuchsia-900 transition-all duration-200 ease-linear"
                      : "bg-gray-500 text-white rounded-md px-6 py-2 cursor-not-allowed"
                  }
                  disabled={disable}
                  onClick={handleLogin}
                >
                  Log in
                </button>
                {error && (
                  <p className="text-sm font-thin tracking-wider text-red-900">
                    &#128681; Something went wrong!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
