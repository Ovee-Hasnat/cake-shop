import Image from "next/image";
import React from "react";

const Payment = () => {
  return (
    <div className="my-20 xl:px-32 relative">
      <div className="absolute h-fit top-0 bottom-0 -right-28 m-auto xl:-right-20 -rotate-90 origin-center ">
        <h1 className="font-['Prata'] text-8xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-t from-fuchsia-200 to-fuchsia-950 opacity-50 leading-normal">
          Payment
        </h1>
      </div>
      <div className="p-6 max-w-6xl mx-auto">
        <div>
          <h2 className="font-['Prata'] text-3xl tracking-tighter">
            We accept
          </h2>
        </div>
        <div className="border-l-4 border-fuchsia-950 p-4 my-4 space-y-10 md:space-y-0 md:flex md:items-center md:justify-around">
          <div>
            <Image
              src={"/img/COD2.png"}
              width={200}
              height={200}
              alt="COD"
              className="w-32 md:w-44"
            />
          </div>
          <div>
            <Image
              src={"/img/Bkash.png"}
              width={200}
              height={200}
              alt="COD"
              className="w-32 md:w-44"
            />
          </div>
          <div>
            <Image
              src={"/img/Nagad.png"}
              width={200}
              height={200}
              alt="COD"
              className="w-32 md:w-44"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
