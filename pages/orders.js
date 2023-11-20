import UserOrders from "@/components/Orders";
import React from "react";

const Orders = () => {
  return (
    <div>
      <div className="p-6">
        <div className="text-center mb-10">
          <h1 className="font-['Prata'] text-xl lg:text-3xl">ORDERS</h1>
          <p className="uppercase text-sm tracking-[3px] opacity-60">
            Your order history
          </p>
        </div>

        <UserOrders />
      </div>
    </div>
  );
};

export default Orders;
