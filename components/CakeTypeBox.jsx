import { publicRequest } from "@/requestMethods";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CakeTypeBox = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      try {
        const res = await publicRequest.get("/category/");
        setCategory(res.data);
      } catch (error) {}
    };
    getCategory();
  });
  return (
    <div className="xl:mt-10 md:py-10 bg-gradient-to-b to-fuchsia-200 from-white p-6">
      <div className="max-w-5xl w-fit mx-auto p-1 grid grid-cols-2 grid-rows-2 gap-2 rounded-xl shadow-lg">
        <div className="text-5xl md:text-7xl font-['Prata'] tracking-tighter w-40 xl:w-96 md:w-80 h-40 md:h-80 xl:h-96 flex flex-col items-center justify-center border-2 border-fuchsia-950 rounded-lg">
          <h1>We</h1>
          <h1 className=" text-fuchsia-950">Offer</h1>
        </div>

        {category.map((data) => {
          return (
            <div key={data._id}>
              <Link href={`/cakes/sub/${data._id}`}>
                <div className="relative w-40 xl:w-96 md:w-80 h-40 md:h-80 xl:h-96 rounded-lg overflow-hidden group cursor-pointer">
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1652284918100-1fd4a60e7356?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    }
                    fill
                    alt="cake"
                    className="object-cover group-hover:scale-110 transition-all duration-[2s] ease-out"
                  />
                  <div className="absolute w-full h-full bg-black/50 opacity-80 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 ease-linear" />
                  <div className="absolute text-white w-full h-full flex items-center justify-center lg:opacity-0 group-hover:opacity-100  transition-all duration-500 ease-linear">
                    <h1 className="font-semibold capitalize text-xl md:text-2xl xl:text-3xl">
                      {data.title}
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CakeTypeBox;
