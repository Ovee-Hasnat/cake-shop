import { adminLogout } from "@/redux/userRedux";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch } from "react-redux";

const AdminHome = () => {
  const dispatch = useDispatch();
  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Logout */}
      <button
        className="py-2 px-4 text-white bg-fuchsia-900 rounded-lg mb-10 mx-auto block font-semibold font-['Raleway']"
        onClick={() => {
          dispatch(adminLogout());
        }}
      >
        LOGOUT
      </button>

      {/* Add Buttons */}
      <div className="flex gap-3 md:justify-end justify-evenly text-neutral-400 font-['Raleway']">
        <div className="w-40 py-3 border border-fuchsia-900 rounded-lg flex flex-row-reverse justify-center items-center gap-3 cursor-pointer hover:shadow-inner hover:shadow-fuchsia-950/40">
          <h3 className="text-lg font-semibold leading-none">
            Add <br /> Products
          </h3>
          <PlusIcon className="w-7 text-fuchsia-900" />
        </div>

        <div className="w-40 p-2 border border-fuchsia-900 rounded-lg flex flex-row-reverse justify-center items-center gap-3 cursor-pointer hover:shadow-inner hover:shadow-fuchsia-950/40">
          <h3 className="text-lg font-semibold leading-none">
            Add <br /> Category
          </h3>
          <PlusIcon className="w-7 text-fuchsia-900" />
        </div>
      </div>
      <div className="flex gap-2 my-4">
        <div className="p-2 border rounded-lg flex flex-1 items-end">
          <p className="text-5xl">3</p>
          <p>Products</p>
        </div>
        <div className="p-2 border rounded-lg flex flex-1 items-end">
          <p className="text-5xl">4</p>
          <p>Categories</p>
        </div>
        <div className="p-2 border rounded-lg flex flex-1 items-end">
          <p className="text-5xl">6</p>
          <p>Users</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 justify-between">
        <div className="border rounded-lg p-1 max-w-4xl flex-1 max-h-[500px] overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-400">
          <h4 className="text-xl font-semibold text-neutral-400">Orders</h4>
          {
            <table className="table-auto w-full text-left mt-4">
              <thead>
                <tr className="bg-neutral-100">
                  <th>#</th>
                  <th>Customer</th>
                  <th>Products</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-thin">01</td>
                  <td>01521436301</td>
                  <td>
                    <div>
                      <p>Apple Flavoured Cake</p>
                      <p>2.5lb</p>
                    </div>
                  </td>
                  <td className="text-cyan-800 font-semibold">Pending</td>
                  <td>
                    <MagnifyingGlassIcon className="w-4 mx-auto lg:m-0" />
                  </td>
                </tr>
              </tbody>
            </table>
          }
        </div>
        <div className="border rounded-lg p-2 bg-fuchsia-100 min-w-[350px]">
          <h4 className="text-xl font-semibold text-neutral-400">Summary</h4>
          <div className="my-4 text-xl space-y-3">
            <p>Total Orders - </p>
            <p>Pending - </p>
            <p>In Process - </p>
            <p>Delivered - </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
