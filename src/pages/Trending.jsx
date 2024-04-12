import React from "react";
import { useGlobalContext } from "../context/CryptoContext";
import { TrendingCoin } from "../components";
import { Outlet } from "react-router-dom";
import { BiReset } from "react-icons/bi";

const Trending = () => {
  const { trendData, resetTrendingResult } = useGlobalContext();
  return (
    <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
      <div className="w-full min-h-[60vh] py-8 flex flex-wrap justify-evenly mt-9 border border-gray-100 rounded">
        {trendData &&
          trendData.map((coin) => (
            <TrendingCoin key={coin.coin_id} data={coin.item} />
          ))}
        <button
          className="w-[2rem] ml-4 hover:scale-110 transition-all ease-in-out absolute right-0 -top-10"
          onClick={resetTrendingResult}
        >
          <BiReset className="text-cyan w-full h-full" />
        </button>
      </div>
      <Outlet />
    </section>
  );
};

export default Trending;
