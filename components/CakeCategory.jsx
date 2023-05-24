import React, { useEffect, useState } from "react";
import SingleCakeCategory from "./SingleCakeCategory";
import axios from "axios";
import { publicRequest } from "@/requestMethods";

const CakeCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategoryTitle = async () => {
      try {
        const res = await publicRequest.get(`/category`);
        setCategories(res.data);
      } catch (error) {}
    };
    getCategoryTitle();
  }, []);

  return (
    <div>
      {categories.map((cat) => {
        return (
          <div className="space-y-3 my-20 xl:mt-32" key={cat._id}>
            <h1 className="text-2xl md:text-3xl font-['Prata'] tracking-tighter capitalize">
              {cat.title}
            </h1>

            <SingleCakeCategory title={cat.title} />
          </div>
        );
      })}
    </div>
  );
};

export default CakeCategory;
