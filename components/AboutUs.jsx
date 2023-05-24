import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";

const AboutUs = () => {
  return (
    <div className="py-20">
      <div className="px-6 md:flex gap-4 justify-center items-end max-w-7xl mx-auto">
        <div className="flex justify-center">
          <Image
            src={
              "https://images.unsplash.com/photo-1625036809268-07375fdbaeca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
            }
            width={450}
            height={260}
            alt="wedding cake"
          />
        </div>
        <div className="flex flex-col space-y-4 md:space-y-12 flex-1 py-10">
          <div className="text-right md:text-left md:space-y-2">
            <p className="text-xl md:text-3xl font-['Raleway'] uppercase tracking-[4px]">
              About
            </p>
            <h1 className="text-4xl md:text-6xl font-['Prata']  text-fuchsia-950">
              Rest In Cheese
            </h1>
          </div>
          <div className="space-y-4 md:space-y-9">
            <p className="font-['Raleway'] tracking-wide max-w-2xl text-justify md:text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium optio saepe itaque, quasi nisi eaque facere mollitia
              voluptatibus hic nemo, fugiat corrupti illum expedita odio!
              Provident voluptates ipsam blanditiis obcaecati.
            </p>

            <div className="space-y-2 text-right md:text-left">
              <p className="uppercase font-thin">Find Us On</p>
              <div className="space-x-2">
                <SocialIcon
                  url="https://www.facebook.com"
                  style={{ height: 40, width: 40 }}
                  fgColor="#4a044e"
                  bgColor="transparent"
                  className="border rounded-full shadow-md"
                />
                <SocialIcon
                  url="https://www.instagram.com"
                  style={{ height: 40, width: 40 }}
                  fgColor="#4a044e"
                  bgColor="transparent"
                  className="border rounded-full shadow-md"
                />
                <SocialIcon
                  url="https://www.whatsapp.com"
                  style={{ height: 40, width: 40 }}
                  fgColor="#4a044e"
                  bgColor="transparent"
                  className="border rounded-full shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
