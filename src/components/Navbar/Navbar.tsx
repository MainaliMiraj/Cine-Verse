"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const [isButtonClosed, setIsButtonClosed] = useState(false);
  return (
    <div className="flex justify-center">
      <div className="w-11/12 bg-slate-200 mt-2 h-16 p-4 rounded-sm flex justify-between items-center flex-row">
        <Link href={"/"}>
          <Image
            src={"/images/CineVerse.png"}
            alt="logo"
            height={50}
            width={50}
            className="w-10 h-10 rounded-full cursor-pointer"
          />
        </Link>
        <button onClick={() => setIsButtonClosed(!isButtonClosed)}>
          {isButtonClosed ? (
            <IoMdClose className="w-10 h-6 font-bold" />
          ) : (
            <RxHamburgerMenu className="w-10 h-6 font-bold" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
