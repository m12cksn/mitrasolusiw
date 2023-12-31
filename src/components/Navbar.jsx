"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const handleSmallerScreenNavigation = () => {
    setMenuIcon(!menuIcon);
  };
  return (
    <header className=" text-primary bg-secondary w-full ease-in-out duration-500 fixed top-0 left-0 z-50">
      <nav className="max-w-[1366px] mx-auto  flex justify-between items-center py-3 px-4">
        <div className="flex items-center">
          <Link className="flex items-center gap-3" href="/">
            <Image
              className=" md:w-14 w-12 object-center object-cover"
              src={"/imagesmsw/logomsw.jpg"}
              width={1000}
              height={1000}
              alt="Cruise"
              priority={true}
            />
            <h1 className="xl:text-xl hidden md:block md:text-base font-semibold">
              Mitra Solusi Wicaksana
            </h1>
          </Link>
        </div>
        <h1 className="xl:text-xl md:hidden md:text-base font-semibold">
          Mitra Solusi Wicaksana
        </h1>
        <div className="md:flex gap-10 hidden items-center">
          <Link
            className="font-semibold hover:text-slate-900 ease-in-out duration-150 transition-all"
            href="/visi"
          >
            <h1>Visi Misi</h1>
          </Link>
          <Link
            className="font-semibold hover:text-slate-900 ease-in-out duration-150 transition-all"
            href="/legalitas"
          >
            <h1>Legalitas</h1>
          </Link>
          <Link
            className="font-semibold hover:text-slate-900 ease-in-out duration-150 transition-all"
            href="/vo"
          >
            <h1>Order Vo ?</h1>
          </Link>
        </div>
        <div className="flex md:hidden" onClick={handleSmallerScreenNavigation}>
          {/* {openIndexes.includes(index) ? <AiOutlineMinus /> : <AiOutlinePlus />} */}
          {menuIcon ? (
            <AiOutlineClose size={25} className="text-primary" />
          ) : (
            <AiOutlineMenu size={25} className="text-primary" />
          )}
        </div>
        <div
          className={
            menuIcon
              ? "md:hidden absolute top-[72px] right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-slate-800 text-white ease-in-out duration-500"
              : "md:hidden absolute top-[72px] right-0  left-[100%] flex justify-center items-center w-full h-screen text-center g-slate-800 text-white ease-in-out duration-500"
          }
        >
          <div className="w-full">
            <ul className="uppercase font-bold text-2xl flex flex-col justify-center items-center gap-10">
              <li
                onClick={handleSmallerScreenNavigation}
                className="font-semibold hover:text-secondary ease-in-out duration-150 transition-all"
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={handleSmallerScreenNavigation}
                className="font-semibold hover:text-secondary ease-in-out duration-150 transition-all"
              >
                <Link href="/visi">Visi Misi</Link>
              </li>
              <li
                onClick={handleSmallerScreenNavigation}
                className="font-semibold hover:text-secondary ease-in-out duration-150 transition-all"
              >
                <Link href="/legalitas">Legalitas</Link>
              </li>
              <li
                onClick={handleSmallerScreenNavigation}
                className="font-semibold hover:text-secondary ease-in-out duration-150 transition-all"
              >
                <Link href="/">Order VO</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
