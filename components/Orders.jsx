import { userRequest } from "@/requestMethods";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { format } from "timeago.js";

const UserOrders = () => {
  const [orders, setOrders] = useState([]);

  const currentUser = useSelector((state) => state.user.currentUser);
  const userId = currentUser && currentUser._id;

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = userId && (await userRequest.get(`orders/find/${userId}`));
        setOrders(res.data.orders);
      } catch (error) {}
    };
    getOrders();
  }, [userId]);


  if(!currentUser){
    return(
        <div className="text-center space-y-10">
            <h3 className="text-red-800 font-semibold tracking-wide">Please log in to see your order history.</h3>
            <Link href={"/login"} className="block w-fit mx-auto">
            <p className="text-lg uppercase tracking-widest cursor-pointer underline w-fit hover:tracking-[5px] transition-all duration-300 ease-in-out">Login</p>
            </Link>
        </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h3 className="my-6 font-['raleway'] text-lg md:font-semibold">
          Hello, {currentUser.phoneNumber}
        </h3>

        <div className="space-y-8">
          {orders.map((order, i) => (
            <div
              key={order._id}
              className="text-sm md:text-base md:flex gap-4 justify-center"
            >
              <table className="table-auto lg:table-fixed w-full text-left max-w-3xl">
                <thead>
                  <tr className="bg-gray-200">
                    <th>Order #{i}</th>
                    <th></th>
                    <th></th>
                    <th className="text-right">{format(order.createdAt)}</th>
                  </tr>
                </thead>
                <tbody>
                  {order.products.map((product, i) => (
                    <tr key={i}>
                      <td>{product.title}</td>
                      <td>{product.size}lb</td>
                      <td></td>
                      <td>{product.price} ৳</td>
                    </tr>
                  ))}
                  <tr className="bg-gray-100 font-semibold">
                    <td></td>
                    <td></td>
                    <td className="text-right pr-2">{"Total"}</td>
                    <td>{order.total} ৳</td>
                  </tr>
                </tbody>
              </table>
              <ul className="pl-4 py-2 my-2 bg-fuchsia-100 md:w-60 md:m-0 rounded-lg font-['Raleway'] text-xs lg:text-sm">
                <li>Order ID: {order._id}</li>
                <li className="text-cyan-800 capitalize font-semibold my-1">
                  {order.status} &#128337;
                </li>
                <li>Address: {order.address}</li>
                <li>Payment method: {order.payment}</li>
                <li>Delivery method: {order.delivery}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserOrders;
