import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SingleCakeCategory from "@/components/SingleCakeCategory";
import Link from "next/link";
import { publicRequest } from "../../../requestMethods";

const SingleCategory = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();
  const catId = router.query.catId;

  useEffect(() => {
    const getCategoryTitle = async () => {
      try {
        const res = await publicRequest.get(`/category/find/${catId}`);
        setTitle(res.data.category.title);
      } catch (error) {}
    };
    getCategoryTitle();
  }, [catId]);

  if (!catId) {
    return (
      <h1 className="uppercase font-thin tracking-[3px] text-center">
        Loading.
      </h1>
    );
  } else {
    return (
      <div className="relative h-screen">
        <div className="p-6 space-y-10 max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl xl:text-5xl font-['Prata'] tracking-tighter capitalize">
            {title}
          </h1>

          <SingleCakeCategory title={title} />

          <div>
            <Link href={"/cakes"} className="w-fit">
              <p className="py-2 px-6 w-fit border border-fuchsia-950 rounded-lg shadow-lg mx-auto font-thin">
                All Categories
              </p>
            </Link>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0"
        >
          <path
            fill="#4a044e"
            fillOpacity="1"
            d="M0,128L120,154.7C240,181,480,235,720,224C960,213,1200,139,1320,101.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
  }
};

export default SingleCategory;
