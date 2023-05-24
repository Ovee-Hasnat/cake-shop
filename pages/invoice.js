import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Invoice = () => {
  let total = 0;
  const [delivery, setDelivery] = useState("");
  const [address, setAddress] = useState("");
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <div className="p-6 max-w-6xl mx-auto">
        <div>
          <div className="text-center mb-10">
            <h1 className="font-['Prata'] text-xl lg:text-3xl">PAYMENT</h1>
          </div>

          {cart.products.length > 0 ? (
            <div className="md:flex gap-8 justify-center">
              <div className="text-sm leading-6 text-left font-mono flex-1">
                <table className="table-auto w-full">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="pr-2">#</th>
                      <th>Cake</th>
                      <th>Size</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.products.map((product, i) => {
                      total += product.price;
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{product.title}</td>
                          <td>{product.size}lb</td>
                          <td>{product.price} bdt</td>
                        </tr>
                      );
                    })}
                    <tr className="bg-gray-100">
                      <td></td>
                      <td></td>
                      <td>Total-</td>
                      <td className="font-semibold">{total} bdt</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="space-y-12 md:my-0 my-10 flex-1 md:text-center md:border rounded-lg md:py-10 md:shadow-xl">
                <div className="text-sm">
                  <p className="uppercase tracking-[2px] opacity-60 mb-2">
                    choose delivery
                  </p>

                  <input
                    id="draft"
                    className="peer/draft mx-2"
                    type="radio"
                    name="status"
                    value={"Home Delivery"}
                    onChange={(e) => setDelivery(e.target.value)}
                  />
                  <label
                    htmlFor="draft"
                    className="peer-checked/draft:text-fuchsia-950 mr-4"
                  >
                    Home Delivery
                  </label>

                  <input
                    id="published"
                    className="peer/published mx-2"
                    type="radio"
                    name="status"
                    value={"Pick Up"}
                    onChange={(e) => setDelivery(e.target.value)}
                  />
                  <label
                    htmlFor="published"
                    className="peer-checked/published:text-fuchsia-950"
                  >
                    Pick-up
                  </label>

                  <div className="hidden peer-checked/draft:block text-cyan-800 my-2">
                    Delivery charge depends on Pathao Parcel fee.
                  </div>
                </div>
                <div className="text-sm">
                  <p className="uppercase tracking-[2px] opacity-60">
                    Enter Your address
                  </p>
                  <input
                    className="border-b-2 drop-shadow-md leading-6 w-full max-w-md rounded-md my-2 p-2 "
                    onKeyUp={(e) => setAddress(e.target.value)}
                    placeholder="address"
                  />
                </div>
                <div className="text-sm">
                  <p className="uppercase tracking-[2px] opacity-60">
                    choose payment method
                  </p>
                  <div className="flex flex-col text-center space-y-2 my-2 max-w-sm mx-auto">
                    <p className="py-2 border rounded-lg">
                      Cash On Delivery (COD)
                    </p>
                    <p className="py-2 border rounded-lg">BKash</p>
                    <p className="py-2 border rounded-lg">Nagad</p>
                  </div>
                </div>

                <div>
                  <div className="w-fit mx-auto block relative group overflow-hidden border border-fuchsia-950 rounded-lg">
                    <p className="py-2 px-20 group-hover:text-white cursor-pointer font-['raleway'] hover:font-semibold tracking-wider">
                      Place Order
                    </p>
                    <span className="w-0 h-full bg-fuchsia-950 absolute top-0 left-0 group-hover:w-full transition-all ease-in-out duration-500 -z-10" />
                  </div>
                  <Link href={"/cart"} className="block w-fit mx-auto">
                    <p className="uppercase text-sm font-thin tracking-wide text-center my-6 underline opacity-60">
                      Return to cart
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <Link href={"/cakes"}>
              <p className="uppercase text-red-950 font-thin tracking-widest text-center my-6 underline">
                Add cakes to your cart
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Invoice;
