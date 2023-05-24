import React from "react";
import Lottie from "react-lottie-player";

import pickup from "../public/animation/pick-up.json";
import delivery from "../public/animation/delivery-guy-out-for-delivery.json";

const Delivery = () => {
  return (
    <div className="my-20 xl:px-32 relative">

      <div className="absolute h-fit top-0 bottom-0 -left-28 m-auto xl:-left-20 -rotate-90 origin-center z-10">
        <h1 className="font-['Prata'] text-8xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-t from-fuchsia-200 to-fuchsia-900 opacity-50 leading-normal">
          Delivery
        </h1>
      </div>


      <div className="space-y-6 lg:flex lg:items-center lg:justify-evenly max-w-6xl mx-auto">
        <div className="flex-1">
          <div>
            <Lottie
              loop
              animationData={delivery}
              play
              className="w-48 mx-auto md:w-96"
            />
            <h2 className="text-2xl md:text-4xl font-['raleway'] text-center">
              Home Delivery
            </h2>
          </div>
          <div className="hidden lg:block py-6 px-20">
            <p className="font-['raleway'] text-center">
              We provide home delivery service through Pathao Parcel. Customer
              must have to pay the delivery charge.
            </p>
          </div>
        </div>
        <div className="">
          {" "}
          <h1 className="text-2xl md:text-4xl font-['raleway'] text-center">
            Or
          </h1>
        </div>
        <div className="flex-1">
          <div className="flex flex-col-reverse lg:flex-col">
            <Lottie
              loop
              animationData={pickup}
              play
              className="w-44 mx-auto md:w-72 lg:h-60"
            />
            <h2 className="text-2xl md:text-4xl font-['raleway'] text-center">
              Pick Up
            </h2>
          </div>
          <div className="hidden lg:block py-6 px-20">
            <p className="font-['raleway'] text-center">
              You can also pick up your order from our location. This is
              recommended in case of big cakes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
