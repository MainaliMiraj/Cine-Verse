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
    <div className="flex flex-col items-center justify-center">
      <div className="mt-2  flex w-11/12 flex-row items-center justify-between rounded-t-full px-10 py-4 text-blue-300 sm:rounded-full">
        <Link href={"/"}>
          <Image
            src={"/images/CineVerse.png"}
            alt="logo"
            height={50}
            width={50}
            className="h-10 w-10 cursor-pointer rounded-full transition-all hover:scale-110"
            priority
          />
        </Link>
        <button
          onClick={() => setIsButtonClosed(!isButtonClosed)}
          className="sm:hidden"
        >
          {isButtonClosed ? (
            <IoMdClose className="h-6 w-10 font-bold transition-all hover:scale-110 hover:text-blue-400" />
          ) : (
            <RxHamburgerMenu className="h-6 w-10 font-bold transition-all hover:scale-110 hover:text-blue-400" />
          )}
        </button>
        <div className="mr-5 hidden transition-all sm:block">
          {NavbarTopics.map((eachTopic) => (
            <Link
              href={eachTopic.location}
              key={eachTopic.title}
              className="w-full p-4 text-center transition-all  hover:text-sm hover:text-blue-400"
            >
              {eachTopic.title}
            </Link>
          ))}
        </div>
      </div>
      {isButtonClosed && (
        <div className="z-50 mt-1 flex h-screen w-11/12 flex-col items-center justify-start gap-2  p-4  transition-all duration-300 ease-in-out sm:hidden">
          {NavbarTopics.map((eachTopic) => (
            <Link
              href={eachTopic.location}
              key={eachTopic.title}
              className="w-full  p-2 py-2 text-center  text-blue-300 transition-all  duration-150 ease-in-out hover:scale-95 hover:text-blue-400"
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
