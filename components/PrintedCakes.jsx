import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { SocialIcon } from "react-social-icons";

const PrintedCakes = () => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  let x = useTransform(scrollYProgress, [0, 1], ["40%", "0%"]);
  let y = useTransform(scrollYProgress, [0, 1], ["70%", "0%"]);

  return (
    <div
      ref={ref}
      className="bg-gradient-to-t to-fuchsia-200 from-white py-10 overflow-x-hidden"
    >
      <div className="p-6 max-w-7xl mx-auto">
        <div className="w-fit mx-auto text-4xl md:text-6xl text-right font-['Prata'] md:pt-5 tracking-tighter">
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: [-100, -70, 0], opacity: [0.5, 1, 1] }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            Prints on
          </motion.h1>
          <motion.h1
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: [100, 70, 0], opacity: [0.5, 1, 1] }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="text-fuchsia-950"
          >
            Cakes
          </motion.h1>
        </div>

        <div className="pt-20 space-y-2 md:space-y-0 relative lg:h-[900px]">
          <div className="md:absolute z-20">
            <div className="relative w-fit">
              <Image
                src={"/img/printedCake2.jpg"}
                width={350}
                height={200}
                alt=""
                className="w-56 md:w-80 lg:w-auto border border-fuchsia-950"
              />
              <motion.div
                style={{ y }}
                className="w-44 h-44 p-2 lg:w-60 lg:h-60 flex items-center rounded-full bg-white shadow-lg absolute top-0 md:top-4 -right-32"
              >
                <h2 className="text-xl lg:text-3xl font-['Raleway'] text-center">
                  Get your{" "}
                  <span className="underline underline-offset-2 decoration-fuchsia-950">
                    desired photo
                  </span>{" "}
                  on your favourite cake.
                </h2>
              </motion.div>
            </div>
          </div>
          <div className="flex justify-end lg:absolute lg:left-1/3 lg:bottom-8 ">
            <div className="relative w-fit">
              <Image
                src={"/img/printedCake3.jpg"}
                width={350}
                height={200}
                alt=""
                className="w-56 md:w-80 lg:w-auto border border-fuchsia-950"
              />
              <motion.div
                style={{ y }}
                className="w-44 lg:h-44 p-2 lg:w-72 flex items-center rounded-xl bg-white shadow-lg absolute top-6 md:bottom-4 md:top-auto -left-32 lg:-left-60 z-30"
              >
                <h2 className="text-xl lg:text-3xl font-['Raleway'] text-center">
                  We print on{"  "}
                  <span className="underline underline-offset-2 decoration-fuchsia-950 font-bold">
                    edible
                  </span>{" "}
                  sugar paper with edible colors.
                </h2>
              </motion.div>
            </div>
          </div>
          <motion.div
            style={{ x }}
            className="lg:absolute md:w-[600px]
             md:h-[600px] p-14 right-0 left-0 mx-auto lg:-right-4 lg:left-auto z-10 flex flex-col justify-center md:gap-6 items-center bg-[url('/img/blob.png')] bg-no-repeat bg-cover bg-center"
          >
            <h3 className="text-lg md:text-2xl font-['Raleway'] tracking-wide text-center text-white">
              Add a <span className="text-fuchsia-200 font-semibold">logo</span>
              , some{" "}
              <span className="text-fuchsia-200 font-semibold italic">typography</span>
              , or perhaps your favorite{" "}
              <span className="text-fuchsia-200 font-semibold">
                memory-filled photo
              </span>{" "}
              on your cake to make the event unforgettable. <br />
              <br />
              For a personalized cake, get in touch with us right away.
            </h3>
            <div className="space-x-2">
              <SocialIcon
                url="https://www.facebook.com"
                style={{ height: 40, width: 40 }}
                fgColor="black"
                bgColor="transparent"
                className="rounded-full shadow-md"
              />
              <SocialIcon
                url="https://www.instagram.com"
                style={{ height: 40, width: 40 }}
                fgColor="black"
                bgColor="transparent"
                className="rounded-full shadow-md"
              />
              <SocialIcon
                url="https://www.whatsapp.com"
                style={{ height: 40, width: 40 }}
                fgColor="black"
                bgColor="transparent"
                className="rounded-full shadow-md"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrintedCakes;
