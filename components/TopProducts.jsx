import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const TopProducts = () => {
  const [selectedId, setSelectedId] = useState(null);

  const data = [1, 2, 3, 4];

  return (
    <div className="mt-20 bg-fuchsia-200 py-10 relative">
      <div className="relative">
        <div className="w-fit mx-auto">
          <motion.p
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="uppercase text-lg lg:text-xl font-thin text-left"
          >
            Our
          </motion.p>
          <p className="text-2xl lg:text-3xl font-['Prata'] text-center">
            Best Selling
          </p>
          <motion.p
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="uppercase text-lg lg:text-xl font-thin text-right text-fuchsia-950"
          >
            Cakes
          </motion.p>
        </div>

        {/* Products */}

        <div className="pt-20 pb-10 px-6 max-w-7xl mx-auto flex items-center md:justify-evenly overflow-x-scroll scrollbar-thin scrollbar-track-fuchsia-200">
          {data.map((prod) => {
            return (
              <div key={prod}>
                <motion.div
                  layoutId={prod}
                  className="p-2 border border-fuchsia-950/20 w-fit rounded-lg cursor-pointer shadow-lg z-0 mr-2"
                  onClick={() => setSelectedId(prod)}
                >
                  <motion.div className="relative h-44 w-40 lg:w-52 lg:h-56 overflow-hidden rounded-lg">
                    <Image
                      src={
                        "https://images.unsplash.com/photo-1549572189-dddb1adf739b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=782&q=80"
                      }
                      fill
                      alt=""
                      sizes=""
                      className="object-cover hover:scale-110 transition-all ease-linear duration-500"
                    />
                  </motion.div>
                  <motion.h5 className="mt-5 font-['Raleway'] font-semibold lg:text-lg">{`Chocolate Cake`}</motion.h5>
                  <motion.h2 className="text-sm lg:text-base">
                    BDT{" "}
                    <span className="font-bold text-fuchsia-950">{`900`} </span>{" "}
                    /lb
                  </motion.h2>
                </motion.div>

                <AnimatePresence>
                  {selectedId && (
                    <motion.div
                      className="p-2 bg-fuchsia-200 w-fit h-fit rounded-lg shadow-lg flex items-center gap-4 absolute top-0 bottom-0 left-0 right-0 m-auto z-10"
                      layoutId={selectedId}
                    >
                      <motion.div className="relative h-52 w-40 lg:w-52 lg:h-60 overflow-hidden rounded-lg">
                        <Image
                          src={
                            "https://images.unsplash.com/photo-1549572189-dddb1adf739b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=782&q=80"
                          }
                          fill
                          alt=""
                          className="object-cover hover:scale-110 transition-all ease-linear duration-500"
                        />
                      </motion.div>
                      <motion.div className="space-y-3">
                        <motion.h5 className="font-['Raleway'] font-semibold lg:text-lg">{`Chocolate Cake`}</motion.h5>
                        <motion.h2 className="text-sm lg:text-base">
                          BDT{" "}
                          <span className="font-bold text-fuchsia-950">
                            {`900`}{" "}
                          </span>{" "}
                          /lb
                        </motion.h2>

                        <motion.p className="w-40 sm:w-56 lg:w-96 text-sm lg:text-base lg:tracking-normal tracking-wider">
                          {" "}
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Molestias modi numquam officia corrupti error.
                        </motion.p>
                        <motion.p className=" text-fuchsia-950 font-semibold cursor-pointer hover:underline lg:text-lg w-fit">
                          Order Now
                        </motion.p>
                        <motion.p
                          className="px-2 text-red-900 font-semibold underline cursor-pointer text-sm w-fit"
                          onClick={() => setSelectedId(null)}
                        >
                          Close
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* backdrop */}
      {selectedId && (
        <div className="w-full h-full bg-black/10 backdrop-blur-sm absolute top-0 z-0" />
      )}
    </div>
  );
};

export default TopProducts;
