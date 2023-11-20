import { adminLogin } from "@/redux/userRedux";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AdminLogin = () => {
  const Admin = useSelector((state) => state.user);
  const [adminPass, setAdminPass] = useState("");

  const dispatch = useDispatch();
  const handleAdminLogin = (e) => {
    e.preventDefault();
    dispatch(adminLogin(adminPass));
  };

  return (
    <div className="h-[calc(100vh-160px)] flex justify-center items-center">
      <div className="shadow-lg py-10 px-4 rounded-lg">
        <p className="text-xl">Enter admin password</p>

        <form className="space-x-4 mt-6">
          <input
            type="password"
            className="border-b rounded-lg p-2 focus:outline-none tracking-[2px]"
            onChange={(e) => setAdminPass(e.target.value)}
          />
          <button
            type="submit"
            className="py-2 px-4 text-white bg-fuchsia-900 rounded-lg"
            onClick={handleAdminLogin}
          >
            Enter
          </button>
          {Admin.adminError && <p className="text-red-500">* Invalid</p>}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
