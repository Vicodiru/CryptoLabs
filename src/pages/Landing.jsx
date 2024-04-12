import React from "react";
import { Outlet } from "react-router-dom";
import { Table } from "../components";
import Filters from "../components/Filters";

const Landing = () => {
  return (
    <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
      <Filters />
      <Table />
      <Outlet />
    </section>
  );
};

export default Landing;
