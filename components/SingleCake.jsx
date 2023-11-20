import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const SingleCake = () => {
  const [size, setSize] = useState(2);
  const [note, setNote] = useState("");

  const sizeHandler = (command) => {
    if (command === "inc") {
      setSize(size + 0.5);
    } else {
      size > 2 && setSize(size - 0.5);
    }
  };

  const router = useRouter();
  const productId = router.query.id;
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res =
          productId &&
          (await axios.get(
            `http://localhost:5000/api/products/find/${productId}`
          ));
        setProduct(res.data.product);
      } catch (error) {}
    };
    getProduct();
  }, [productId]);

  const [cartId, setCartId] = useState("");

  const [price, setPrice] = useState(product.price);

  useEffect(() => {
    setPrice(product.price * size);
    setCartId(product._id + size);
  }, [size, product]);

  const dispatch = useDispatch();
  const Router = useRouter();
  const handleAddToCart = () => {
    dispatch(addProduct({ ...product, size, price, note, cartId }));
    Swal.fire({
      title: "Added",
      text: "This product is added to the cart.",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#4a044e",
      cancelButtonColor: "#bebcbd",
      confirmButtonText: "Go to cart",
    }).then((result) => {
      if (result.isConfirmed) {
        Router.push("/cart");
      }
    });
  };

  return (
    <div>
      <div className="p-6 select-none">
        <div className="lg:flex items-center gap-5">
          <Image
            src={
              "https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            }
            width={500}
            height={500}
            alt=""
          />
          <div className="space-y-6 lg:space-y-10 my-8">
            <h2 className="font-['Prata'] text-3xl tracking-tighter">
              {product.title}
            </h2>
            <p className="text-xs uppercase tracking-[2px] italic opacity-40">
              Tag: [{product.category}]
            </p>
            <p className="font-['Raleway']">
              {product.description} <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sit
              iure placeat, sapiente omnis tempore! Molestias molestiae unde
              nulla quo quasi expedita at labore natus maiores, quaerat,
              pariatur, totam eum.
            </p>
            <p className="text-lg font-semibold">Size (in pound):</p>
            <div className="flex items-center justify-between w-64 mx-auto space-x-3">
              <MinusIcon
                className="w-8 cursor-pointer"
                onClick={() => sizeHandler("dec")}
              />
              <p className="px-4 py-2 border rounded-full border-fuchsia-950 text-2xl font-bold w-fit">
                {size}
              </p>
              <PlusIcon
                className="w-8 cursor-pointer"
                onClick={() => sizeHandler("inc")}
              />
            </div>
            <p className="text-2xl font-semibold text-fuchsia-950">
              Price: {price} bdt
            </p>

            <div className="font-['Raleway']">
              <label className="text-sm opacity-60 block">
                Anything you want to write on cake?
              </label>
              <input
                type="text"
                className="border-b w-2/3 border-fuchsia-950 leading-relaxed rounded-md p-2 text-sm focus:outline-none"
                placeholder="ex. Happy Birthday"
                onKeyUp={(e) => setNote(e.target.value)}
              />
            </div>
            <div
              className="w-fit relative group overflow-hidden border border-fuchsia-950 rounded-lg cursor-pointer shadow-lg"
              onClick={handleAddToCart}
            >
              <p className="py-1 px-6 text-xl shadow-md group-hover:text-white font-['Raleway'] tracking-wider">
                Add to Cart
              </p>
              <span className="w-0 h-full bg-fuchsia-950 absolute top-0 left-0 group-hover:w-full transition-all ease-in-out duration-500 -z-10" />
            </div>
            <Link href={"/cart"} className="block w-fit">
              <p className="my-4 text-fuchsia-950 text-lg font-['Raleway']">
                Go to cart
              </p>
            </Link>
            <Link href={"/cakes"} className="block w-fit">
              <p className="my-4 text-sm text-red-900 lg:text-base font-['Raleway'] underline">
                Back
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCake;
