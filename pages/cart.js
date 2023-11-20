import { clearCart, removeProduct } from "@/redux/cartRedux";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const Cart = () => {
  let total = 0;
  const cart = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  const handleRemoveProduct = (product) => {
    let index = cart.products.indexOf(product);
    dispatch(removeProduct(index));
  };

  const handleClearAll = () => {
    dispatch(clearCart());
    Swal.fire({
      title: "Removed!",
      text: "All items from your cart is removed.",
      icon: "success",
      confirmButtonText: "Cool",
    });
  };

  const Router = useRouter();
  const handleProceed = () => {
    if (currentUser) {
      Router.push("/invoice");
    } else {
      Swal.fire({
        title: "Login First",
        text: "You have to login to proceed further.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#4a044e",
        cancelButtonColor: "#bebcbd",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          Router.push("/login");
        }
      });
    }
  };

  return (
    <div>
      <div className="p-6 max-w-3xl mx-auto">
        <div className="text-center">
          <h1 className="font-['Prata'] text-xl lg:text-3xl">CART</h1>
          <p className="uppercase text-sm tracking-[3px] opacity-60">
            order summary
          </p>
        </div>
        <div className=" my-6 flex items-center justify-between">
          <Link
            href={"/cakes"}
            className="w-fit block relative group overflow-hidden border border-fuchsia-950 rounded-lg"
          >
            <p className="py-2 px-4 text-sm lg:text-base shadow-md group-hover:text-white">
              Continue Shopping
            </p>
            <span className="w-0 h-full bg-fuchsia-950 absolute top-0 left-0 group-hover:w-full transition-all ease-in-out duration-500 -z-10" />
          </Link>
          <p
            className="text-sm underline cursor-pointer font-thin"
            onClick={handleClearAll}
          >
            Remove All
          </p>
        </div>

        <div>
          {cart.products.length > 0 ? (
            <hr className="mb-2"></hr>
          ) : (
            <p className="uppercase text-red-950 font-thin tracking-widest text-center">
              No cakes added yet
            </p>
          )}
          <div className="grid grid-cols-3 gap-3">
            {cart.products.map((product, i) => {
              total += product.price;
              return (
                <Fragment key={product._id + i}>
                  <div>
                    <Image
                      src={
                        "https://images.unsplash.com/photo-1546857098-b787ce02be9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=790&q=80"
                      }
                      width={180}
                      height={180}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-between font-['raleway'] lg:py-4">
                    <h3 className="text-lg lg:text-2xl">{product.title}</h3>
                    <p className="text-sm italic">{product.note}</p>
                    <p
                      className="text-red-800 underline w-fit cursor-pointer"
                      onClick={() => handleRemoveProduct(product)}
                      //onClick={() => console.log(product)}
                    >
                      remove
                    </p>
                  </div>
                  <div className="text-right text-lg font-semibold flex flex-col justify-center">
                    <p>{product.size}lb</p>
                    <p>{product.price} Bdt</p>
                  </div>
                </Fragment>
              );
            })}
          </div>
          <div className="my-4 text-right text-xl font-bold bg-fuchsia-200 p-2">
            <p>Total- {total} Bdt</p>
          </div>
          <div className=" bg-fuchsia-100 p-2"></div>
        </div>

        <div className="my-8 w-fit ml-auto">
          <button
            className="py-2 px-6 text-white tracking-wide lg:text-xl bg-fuchsia-950 rounded-lg shadow-lg"
            onClick={handleProceed}
          >
            Proceed to Payment
          </button>

          <Link href={"/"} className="block w-fit mx-2 my-6">
            <p className="text-sm lg:text-base tracking-widest underline opacity-60">
              return to home
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
