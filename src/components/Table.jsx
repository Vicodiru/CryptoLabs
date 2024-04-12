import React from "react";
import { useGlobalContext } from "../context/CryptoContext";
import { FaRegStar } from "react-icons/fa";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const Table = () => {
  const { CryptoData, currency } = useGlobalContext();

  const formatToCurrency = (num) => {
    const numericValue = parseFloat(num);

    if (isNaN(numericValue)) {
      return "-";
    }

    if (numericValue >= 1000000000000) {
      return `${(numericValue / 1000000000000).toFixed(2)}t`;
    } else if (numericValue >= 1000000000) {
      return `${(numericValue / 1000000000).toFixed(2)}b`;
    } else if (numericValue >= 1000000) {
      return `${(numericValue / 1000000).toFixed(2)}m`;
    } else {
      return `${numericValue.toFixed()}`;
    }
  };

  return (
    <>
      {" "}
      <div className="flex flex-col mt-9 border border-gray-100 rounded">
        {CryptoData ? (
          <table className="w-full table-auto">
            <thead className="capitalize text-base text-gray-100 font-medium border-b border-gray-100">
              <tr>
                <th className="py-1">asset</th>
                <th className="py-1">name</th>
                <th className="py-1">price</th>
                <th className="py-1">total volume</th>
                <th className="py-1">market cap change</th>
                <th className="py-1">1H</th>
                <th className="py-1">24H</th>
                <th className="py-1">7D</th>
              </tr>
            </thead>
            <tbody>
              {CryptoData.map((data) => {
                return (
                  <tr
                    key={data.id}
                    className="text-center text-base border-b border-gray-100 hover:bg-gray-200 last:border-b-0"
                  >
                    <td className="py-4 flex items-center uppercase">
                      <button className="outline-0 border-0 bg-none cursor-pointer">
                        <FaRegStar className="w-[1.5rem] ml-1.5 hover:text-cyan text-gray-100" />
                      </button>
                      <img
                        className="w-[1.2rem] h[1.2rem] mx-1.5"
                        src={data.image}
                        alt={data.name}
                      />
                      <span>
                        <Link to={`/${data.id}`} className="cursor-pointer">
                          {data.symbol}
                        </Link>
                      </span>
                    </td>
                    <td className="py-4">
                      <Link to={`/${data.id}`} className="cursor-pointer">
                        {data.name}
                      </Link>
                    </td>
                    <td className="py-4">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: currency,
                      }).format(data.current_price)}
                    </td>
                    <td className="py-4">
                      {data.total_volume === 0
                        ? "-"
                        : formatToCurrency(data.total_volume)}
                    </td>
                    <td className="py-4">
                      {data.market_cap_change_percentage_24h?.toFixed(2)}%
                    </td>
                    <td
                      className={
                        data.price_change_percentage_1h_in_currency > 0
                          ? "text-green py-4"
                          : "text-red py-4"
                      }
                    >
                      {data.price_change_percentage_1h_in_currency?.toFixed(2)}
                    </td>
                    <td
                      className={
                        data.price_change_percentage_24h_in_currency > 0
                          ? "text-green py-4"
                          : "text-red py-4"
                      }
                    >
                      {data.price_change_percentage_24h_in_currency?.toFixed(2)}
                    </td>
                    <td
                      className={
                        data.price_change_percentage_7d_in_currency > 0
                          ? "text-green py-4"
                          : "text-red py-4"
                      }
                    >
                      {data.price_change_percentage_7d_in_currency?.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : null}
      </div>
      <div className="flex items-center justify-between mt-4 capitalize h-[2rem]">
        <span>
          {" "}
          Data provided by{" "}
          <a
            className="text-cyan font-nunito"
            href="http://www.coingecko.com"
            rel="noreferrer"
            target="_blank"
          >
            CoinGecko
          </a>
        </span>
        <Pagination />
      </div>
    </>
  );
};

export default Table;
