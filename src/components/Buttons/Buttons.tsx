import React from "react";
import { IconType } from "react-icons";
import Link from "next/link";

interface ButtonProps {
  buttonName?: string;
  bgColor: string;
  textColor: string;
  color?: string;
  colorValue?: string | number;
  icon?: IconType;
  link?: string;
}
const Button: React.FC<ButtonProps> = ({
  buttonName,
  bgColor,
  textColor,
  icon: Icon,
  link,
}) => {
  const buttonClassName = `${bgColor} ${textColor} p-1 cursor-pointer w-32 transition-all flex justify-center items-center gap-1 hover:scale-125 text-2xl`;

  if (link) {
    return (
      <Link
        href={link}
        className={`rounded-md px-4 py-2 ${bgColor} ${textColor} flex items-center  justify-center`}
      >
        {buttonName}
        {Icon && <Icon className="mr-2" />}
      </Link>
    );
  }

  return (
    <button className={buttonClassName}>
      {Icon && <Icon className="inline-block" />} {buttonName}
    </button>
  );
};

export default Button;
