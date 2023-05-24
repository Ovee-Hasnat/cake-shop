import { PhoneIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import { UserIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/userRedux";
import { useRouter } from "next/router";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const loggedInUser = useSelector((state) => state.user.currentUser);

  function openNav() {
    document.getElementById("sideMenu").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("sideMenu").style.width = "0px";
  }

  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogOut = () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-40">
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-fuchsia-100 w-full">
        <div className="flex p-3 items-center justify-between lg:justify-normal max-w-7xl mx-auto">
          <div className="flex lg:flex-1 items-center space-x-1">
            <PhoneIcon className="w-5 text-fuchsia-950 animate-pulse" />
            <span className="text-xl font-extralight">012 3456 789</span>
          </div>
          <div className="hidden lg:flex lg:flex-1 justify-center">
            <ul className="flex space-x-5 text-fuchsia-950 font-serif">
              <Link href="/" className="block w-fit mx-auto">
                <p className="hover:underline decoration-1 transition-all ease-linear duration-200">
                  Home
                </p>
              </Link>
              <Link href="/#about" className="block w-fit mx-auto">
                <p className="hover:underline decoration-1 transition-all ease-linear duration-200">
                  About
                </p>
              </Link>
              <Link href="/cakes" className="block w-fit mx-auto">
                <p className="hover:underline decoration-1 transition-all ease-linear duration-200">
                  Cakes
                </p>
              </Link>
              <Link href="/" className="block w-fit mx-auto">
                <p className="hover:underline decoration-1 transition-all ease-linear duration-200">
                  Contact
                </p>
              </Link>
              <Link href="/" className="block w-fit mx-auto">
                <p className="hover:underline decoration-1 transition-all ease-linear duration-200">
                  Orders
                </p>
              </Link>
            </ul>
          </div>
          <div className="space-x-3 hidden lg:flex items-center lg:flex-1 justify-end">
            <Link href={"/cart"} className="flex items-center">
              <ShoppingBagIcon className="w-5 text-fuchsia-950" />
              {quantity > 0 && (
                <div className=" bg-fuchsia-900 text-white text-sm rounded-full px-1.5 font-semibold">
                  {quantity}
                </div>
              )}
            </Link>

            {loggedInUser ? (
              <p
                className="font-serif text-fuchsia-950 py-1 px-3 rounded-md cursor-pointer hover:underline transition-all duration-200 ease-in-out"
                onClick={handleLogOut}
              >
                Log out
              </p>
            ) : (
              <Link href="/login" className="block w-fit mx-auto">
                <UserIcon className="w-5 text-fuchsia-950" />
              </Link>
            )}
          </div>
          <div className="lg:hidden">
            <Bars3Icon
              className="w-8 text-fuchsia-900 cursor-pointer"
              onClick={openNav}
            />
          </div>
        </div>
      </div>
      <div
        id="sideMenu"
        className="top-0 w-0 h-screen bg-fuchsia-100/20 backdrop-blur-md right-0 transition-all duration-200 ease-linear z-[999] py-9 fixed"
      >
        <XMarkIcon
          className="w-10 text-fuchsia-900 cursor-pointer mx-auto"
          onClick={closeNav}
        />
        <div>
          <ul className="flex flex-col space-y-5 text-lg text-fuchsia-950 font-serif mt-14">
            <Link href="/" className="block w-fit mx-auto">
              <p onClick={closeNav}>Home</p>
            </Link>
            <Link href="/#about" className="block w-fit mx-auto">
              <p onClick={closeNav}>About</p>
            </Link>
            <Link href="/cakes" className="block w-fit mx-auto">
              <p onClick={closeNav}>Cakes</p>
            </Link>
            <Link href="/" className="block w-fit mx-auto">
              <p onClick={closeNav}>Contact</p>
            </Link>
            <Link href="/" className="block w-fit mx-auto">
              <p onClick={closeNav}>Orders</p>
            </Link>
            <Link
              href={"/cart"}
              className="flex items-center w-fit mx-auto"
              onClick={closeNav}
            >
              <ShoppingBagIcon className="w-5 text-fuchsia-950" />
              {quantity > 0 && (
                <div className=" bg-fuchsia-900 text-white text-sm rounded-full px-1.5 font-semibold">
                  {quantity}
                </div>
              )}
            </Link>
            {loggedInUser ? (
              <p
                className="block w-fit mx-auto cursor-pointer"
                onClick={() => {
                  handleLogOut();
                  closeNav();
                }}
              >
                Log Out
              </p>
            ) : (
              <Link href="/login" className="block w-fit mx-auto">
                <p onClick={closeNav}>Sign In</p>
              </Link>
            )}
          </ul>
        </div>
        <div className="absolute bottom-24 text-center w-full">
          <p className="uppercase tracking-[5px] font-thin">Rest in</p>
          <p className="font-['Prata'] text-4xl text-fuchsia-950">Cheese</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
