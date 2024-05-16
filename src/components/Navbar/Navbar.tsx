"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavbarTopics } from "@/Misc/misc";

const Navbar = () => {
  const [isButtonClosed, setIsButtonClosed] = useState(false);

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-11/12 bg-slate-200 mt-2 px-10 py-4 sm:rounded-full flex justify-between items-center flex-row rounded-b-none rounded-t-full ">
        <Link href={"/"}>
          <Image
            src={"/images/CineVerse.png"}
            alt="logo"
            height={50}
            width={50}
            className="w-10 h-10 rounded-full cursor-pointer"
            priority
          />
        </Link>
        <button
          onClick={() => setIsButtonClosed(!isButtonClosed)}
          className="sm:hidden"
        >
          {isButtonClosed ? (
            <IoMdClose className="w-10 h-6 font-bold hover:text-orange-400" />
          ) : (
            <RxHamburgerMenu className="w-10 h-6 font-bold hover:text-orange-400" />
          )}
        </button>
        <div className="hidden md:block mx-5">
          {NavbarTopics.map((eachTopic) => (
            <Link
              href={eachTopic.location}
              key={eachTopic.title}
              className={`text-lg hover:text-orange-400  w-full p-2 rounded-md text-center hover:underline`}
            >
              {eachTopic.title}
            </Link>
          ))}
        </div>
      </div>
      {isButtonClosed && (
        <div className="sm:hidden flex flex-col items-center justify-start bg-slate-200 w-11/12 gap-3 p-4 z-50  h-screen  transition-all duration-300 ease-in-out mt-1">
          {NavbarTopics.map((eachTopic) => (
            <Link
              href={eachTopic.location}
              key={eachTopic.title}
              className="text-lg hover:text-orange-400 bg-slate-100 w-full p-2 rounded-md text-center border-2 hover:border-orange-400 transition-all duration-150 ease-in-out"
              onClick={() => setIsButtonClosed(!isButtonClosed)}
            >
              {eachTopic.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
