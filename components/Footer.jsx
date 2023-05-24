import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="bg-fuchsia-950 text-white/60 text-sm lg:text-base">
      <div className="p-6 flex items-center justify-between max-w-7xl mx-auto">
        <div>
          <Image
            src={"/logo.png"}
            width={35}
            height={35}
            alt=""
            priority
            className="w-16 md:w-auto"
          />
          <div className="font-thin tracking-wide">
            <h3 className="uppercase tracking-[3px]">Rest In Cheese</h3>
            <p>012 3456 789</p>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
        <div>
          <h3 className="text-center">Find us on</h3>
          <div className="space-x-2">
            <SocialIcon
              url="https://www.facebook.com"
              style={{ height: 40, width: 40 }}
              fgColor="white"
              bgColor="transparent"
              className="rounded-full shadow-md opacity-70 hover:opacity-100"
            />
            <SocialIcon
              url="https://www.instagram.com"
              style={{ height: 40, width: 40 }}
              fgColor="white"
              bgColor="transparent"
              className="rounded-full shadow-md opacity-70 hover:opacity-100"
            />
            <SocialIcon
              url="https://www.whatsapp.com"
              style={{ height: 40, width: 40 }}
              fgColor="white"
              bgColor="transparent"
              className="rounded-full shadow-md opacity-70 hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
