import React, { useRef } from "react";
import Search from "./Search";
import { TbLogout } from "react-icons/tb";
import { RiVipDiamondFill } from "react-icons/ri";
import { useGlobalContext } from "../context/CryptoContext";
import { BiReset } from "react-icons/bi";

const Filters = () => {
  const { currency, setCurrency, setSortBy, reset } = useGlobalContext();
  const currencyRef = useRef(null);

  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    const val = currencyRef.current.value;
    setCurrency(val);
    currencyRef.current.value = "";
  };
  const handleSortBy = (e) => {
    e.preventDefault();
    const val = e.target.value;
    console.log("clicked");
    setSortBy(val);
  };
  return (
    <div className="w-full h-12 border border-gray-100 rounded-lg flex items-center justify-between relative">
      <Search />
      <div className="flex mr-7">
        <form
          className="relative flex items-center font-nunito mr-12"
          onSubmit={handleCurrencySubmit}
        >
          <label
            htmlFor="currency"
            className="relative flex justify-center items-center mr-2 font-bold"
          >
            currency:
          </label>
          <input
            type="text"
            name="currency"
            id="currency"
            ref={currencyRef}
            placeholder="usd"
            className="w-16 rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan leading-4"
          />
          <button type="submit" className="ml-1 cursor-pointer">
            <TbLogout className="w-full h-auto text-cyan" />
          </button>
        </form>
        <div className="relative flex justify-center items-center">
          <span className="font-bold mr-2  ">sort by:</span>
          <select
            name="sortBy"
            className="rounded bg-gray-200 text-base pl-2 pr-10 py-0.5 leading-4 capitalize focus:outline-0 "
            onClick={handleSortBy}
          >
            <option value="market_cap_asc">market_cap_asc</option>
            <option value="market_cap_desc">market_cap_desc</option>
            <option value="volume_asc">volume_asc</option>
            <option value="volume_desc">volume_desc</option>
            <option value="id_asc">id_asc</option>
            <option value="id_desc">id_desc</option>
          </select>
          <RiVipDiamondFill className="text-cyan absolute right-1 w-[1rem] h-[auto] pointer-events-none" />
        </div>
        <button className="w-[2rem] ml-4 hover:scale-110 transition-all ease-in-out relative" onClick={reset}>
          <BiReset className="text-cyan w-full h-full"/>
        </button>
      </div>
    </div>
  );
};

export default Filters;
