"use client";
import React from "react";
import classNames from "classnames";
import "./ButtonStyles.css";
import Link from "next/link";

interface Params {
  text: string;
  primary?: boolean;
  href: string;
}

const Button = ({ text, primary = false, href }: Params) => {
  return (
    <Link
      className={classNames({
        "button border-2 rounded-md flex items-center justify-center font-bold":
          true,
        "w-[120px] h-[40px]": true,
        "lg:w-[150px] lg:h-[50px]": true,
        defaultButton: !primary,
        primaryButton: primary,
      })}
      href={href}
    >
      <p className="lg:text-xl">{text}</p>
    </Link>
  );
};

export default Button;
