import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.svg";

const Logo = () => {
  return (
    <Link
      to="/"
      className="fixed top-[1.5rem] left-[1.5rem] items-center [text-decoration:none] text-lg text-cyan flex "
    >
      <img src={logoSvg} alt="crypto-labs" />
      <span>ElevatorsLabs</span>
    </Link>
  );
};

export default Logo;
