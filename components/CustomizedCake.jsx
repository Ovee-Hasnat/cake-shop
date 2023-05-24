import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";

const CustomizedCake = () => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  let width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div>
      <div ref={ref} className="p-6 md:py-20 relative max-w-7xl mx-auto">
        <div className="w-fit">
          <h1 className="text-4xl md:text-6xl font-['Prata'] tracking-tighter">
            Customized
          </h1>
          <motion.div
            style={{ width }}
            className="h-1 bg-fuchsia-950 rounded-full"
          ></motion.div>
        </div>

        <div>
          <div className="px-4">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="my-2 lg:my-4 md:w-3/4 lg:w-5/6 mx-auto shadow-lg"
            >
              <SwiperSlide>
                <div className="relative w-full h-96 lg:h-[500px]">
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1576536041890-c5ade1214670?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    }
                    fill
                    className="object-cover"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-96 lg:h-[500px]">
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1576536041890-c5ade1214670?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    }
                    fill
                    className="object-cover"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="w-fit ml-auto">
          <motion.div
            style={{ width }}
            className="h-1 bg-fuchsia-950 rounded-full mb-2"
          ></motion.div>
          <h1 className="text-4xl md:text-6xl font-['Prata'] tracking-tighter">
            Cakes
          </h1>
        </div>

        <div className="border-l-4 p-2 mt-6">
          <h2 className="uppercase font-thin text-2xl lg:text-3xl">
            Reach Us on -
          </h2>
          <h1 className="uppercase font-semibold text-4xl lg:text-5xl tracking-[3px] text-fuchsia-950 w-fit lg:leading-relaxed">
            012 3456 789
          </h1>
          <h2 className="uppercase font-thin text-2xl lg:text-3xl tracking-[3px] ">
            For <span className="underline decoration-1">customization</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CustomizedCake;
