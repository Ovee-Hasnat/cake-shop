import Image from "next/image";
import React from "react";

const CakeType = () => {
  return (
    <div className="lg:py-10 bg-gradient-to-b to-fuchsia-200 from-white">
      <div className="flex flex-col  p-6 lg:flex-row gap-4 lg:gap-10 max-w-7xl mx-auto">
        <div className="text-4xl md:text-6xl font-['Prata'] tracking-tighter">
          <h1>We</h1>
          <h1 className=" text-fuchsia-950">Offer</h1>
        </div>
        <div className="flex justify-between w-full flex-col gap-4 md:flex-row">

          {/* Cards */}
          <div className=" bg-fuchsia-800 text-white p-2 rounded-lg flex gap-2 md:flex-col md:w-60">
            <Image
              src={
                "https://images.unsplash.com/photo-1652284918100-1fd4a60e7356?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              }
              width={220}
              height={200}
              alt="cake"
              className="rounded-lg w-36 md:w-56"
            />
            <div className="font-['Raleway'] flex flex-col justify-around md:h-60">
              <h2 className="text-lg">Flavored Cakes</h2>
              <p className="opacity-60 text-sm font-thin tracking-wide">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
                voluptatibus rem dolores.
              </p>
              <p className="font-thin">Price &#2547;900 /lb</p>
              <p className="font-thin py-1 px-3 border w-fit mx-auto rounded-lg">
                See more
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className=" bg-fuchsia-800 text-white p-2 rounded-lg flex gap-2 md:flex-col md:w-60">
            <Image
              src={
                "https://images.unsplash.com/photo-1652284918100-1fd4a60e7356?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              }
              width={220}
              height={200}
              alt="cake"
              className="rounded-lg w-36 md:w-56"
            />
            <div className="font-['Raleway'] flex flex-col justify-around md:h-60">
              <h2 className="text-lg">Flavored Cakes</h2>
              <p className="opacity-60 text-sm font-thin tracking-wide">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
                voluptatibus rem dolores.
              </p>
              <p className="font-thin">Price &#2547;900 /lb</p>
              <p className="font-thin py-1 px-3 border w-fit mx-auto rounded-lg">
                See more
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className=" bg-fuchsia-800 text-white p-2 rounded-lg flex gap-2 md:flex-col md:w-60">
            <Image
              src={
                "https://images.unsplash.com/photo-1652284918100-1fd4a60e7356?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              }
              width={220}
              height={200}
              alt="cake"
              className="rounded-lg w-36 md:w-56"
            />
            <div className="font-['Raleway'] flex flex-col justify-around md:h-60">
              <h2 className="text-lg">Flavored Cakes</h2>
              <p className="opacity-60 text-sm font-thin tracking-wide">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
                voluptatibus rem dolores.
              </p>
              <p className="font-thin">Price &#2547;900 /lb</p>
              <p className="font-thin py-1 px-3 border w-fit mx-auto rounded-lg">
                See more
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default CakeType;
