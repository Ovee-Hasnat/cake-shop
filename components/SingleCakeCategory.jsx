import { publicRequest } from "@/requestMethods";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SingleCakeCategory = ({ title }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res =
          title && (await publicRequest.get(`/products?category=${title}`));

        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [title]);

  if (products?.length > 0) {
    return (
      <div>
        <div className="flex flex-col items-center gap-10 md:flex-row">
          {products.map((product) => {
            return (
              <Link
                href={`/cakes/${product._id}`}
                className="w-fit"
                key={product._id}
              >
                <div className="p-2 shadow-lg rounded-lg flex md:flex-col items-center gap-4 w-fit mx-auto group bg-white">
                  <div className="relative w-36 h-44 md:w-40 md:h-52 lg:w-52 lg:h-60 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={
                        "https://images.unsplash.com/photo-1642069251474-5cc71cfdf49b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      }
                      fill
                      alt=""
                      className="object-cover group-hover:scale-110 transition-all duration-700 ease-linear"
                    />
                  </div>
                  <div className="font-['raleway'] w-36 xl:w-auto">
                    <p className="text-lg font-semibold">{product.title}</p>
                    <p className="xl:text-lg font-serif xl:text-right">
                      Price {product.price}/lb
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p className="font-thin">No Stock Currently</p>
      </div>
    );
  }
};

export default SingleCakeCategory;
