import CakeCategory from "@/components/CakeCategory";
import React from "react";

const CakeCategoryPage = () => {
  return (
    <div>
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#610466"
            fillOpacity="1"
            d="M0,96L48,85.3C96,75,192,53,288,90.7C384,128,480,224,576,229.3C672,235,768,149,864,138.7C960,128,1056,192,1152,218.7C1248,245,1344,235,1392,229.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div className="md:absolute top-0 left-0 w-full md:p-6">
          <div className="">
            <h1 className="text-6xl font-['Prata'] text-center tracking-tighter text-fuchsia-950 md:text-white">
              Our Cakes
            </h1>
          </div>
          <div className="max-w-7xl mx-auto px-6">
            <CakeCategory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeCategoryPage;
