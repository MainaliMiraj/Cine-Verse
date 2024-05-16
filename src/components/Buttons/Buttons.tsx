import React from "react";
import { IconType } from "react-icons";
import Link from "next/link";

interface ButtonProps {
  buttonName: string;
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
  const buttonClassName = `${bgColor} ${textColor} p-2 cursor-pointer rounded-md  hover:text-orange-400 w-32 transition-all flex justify-center items-center gap-1`;

  if (link) {
    return (
      <Link
        href={link}
        className={`rounded-md py-2 px-4 ${bgColor} ${textColor} flex items-center  justify-center hover:text-orange-400`}
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
