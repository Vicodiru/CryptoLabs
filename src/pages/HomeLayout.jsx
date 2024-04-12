// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import { Logo, Navigation } from "../components";

const HomeLayout = () => {
  return (
    <main className="relative w-full h-full flex flex-col first-letter:content-center items-center text-white font-nunito">
      <div className="w-screen h-screen bg-gray-300 fixed -z-10" />
      <Logo />
      <Navigation />
      <Outlet />
    </main>
  );
};

export default HomeLayout;
``;
