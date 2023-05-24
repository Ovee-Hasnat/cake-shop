import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="md:h-[calc(100vh-74px)]">
      <div className="max-w-7xl mx-auto p-6 sm:px-16 md:p-6 flex flex-col space-y-2 md:flex-row-reverse md:space-y-0 justify-center h-full md:items-center gap-2">
        <div className="md:hidden">
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="font-['Raleway'] text-lg"
          >
            The <span className="underline decoration-fuchsia-950">right</span>{" "}
            dessert for any occasion
          </motion.p>
        </div>
        <div className="flex-1">
          <Image
            src={
              "https://images.unsplash.com/photo-1618508369127-ad3309bdec43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            }
            width={500}
            height={650}
            alt=""
            priority
            className="mx-auto md:mx-0"
          />
        </div>
        <div className="space-y-4 md:space-y-16 flex flex-col justify-between flex-1">
          <p className="font-['Raleway'] text-lg text-right hidden md:block">
            The <span className="text-fuchsia-950">right</span> dessert for any
            occasion
          </p>
          <div className="text-6xl md:text-7xl font-['Prata'] text-right">
            <h1 className="">Homemade</h1>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="text-fuchsia-950"
            >
              Cakes
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 0, 0, 1] }}
              transition={{ duration: 2.5 }}
              className="text-xl mt-2 lg:mt-5 font-['Raleway']"
            >
              By Rest In Cheese
            </motion.p>
          </div>

          <div className="sm:w-80 space-y-6">
            <p className="font-['Raleway'] text-lg hidden sm:block">
              We offer cakes, cupcakes, cookies, pastries and more. Baked with
              love and joy to make your moment unforgettable.
            </p>
            <p className="uppercase py-2 px-9 border border-fuchsia-950 w-fit mx-auto sm:mx-0 rounded-xl shadow-lg hover:bg-fuchsia-950 hover:text-white cursor-pointer transition-all ease-linear duration-200">
              discover
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
