import { createContext, useContext, useLayoutEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [CryptoData, setCryptoData] = useState("");
  const [searchData, setSearchData] = useState("");
  const [coinSearch, setCoinSearch] = useState("");

  // currency search state
  const [currency, setCurrency] = useState("usd");
  const [sortBy, setSortBy] = useState("market_cap_desc");

  // Pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(100);
  const [perPage, setPerPage] = useState(20);

  // coinID
  const [coinData, setCoinData] = useState();

  // trending Page
  const [trendData, setTrendData] = useState();

  const getTrendData = async (coinId) => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/search/trending`
      )
        .then((res) => res.json())
        .then((json) => json);
      console.log(data);
      setTrendData(data.coins);
    } catch (error) {
      console.log(error);
    }
  };

  const getCoinData = async (coinId) => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`
      )
        .then((res) => res.json())
        .then((json) => json);
      console.log(data);
      setCoinData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCryptoData = async () => {
    try {
      const data = await fetch(`https://api.coingecko.com/api/v3/coins/list`)
        .then((res) => res.json())
        .then((json) => json);
      console.log("CoinData", data);
      setTotalPages(data.length);
    } catch (error) {
      console.log(error);
    }
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
      )
        .then((res) => res.json())
        .then((json) => json);
      console.log(data);
      setCryptoData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchResult = async (query) => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      )
        .then((res) => res.json())
        .then((json) => json);
      console.log(data);
      setSearchData(data.coins);
    } catch (error) {
      console.log(error);
    }
  };

  const reset = () => {
    setPage(1);
    setCoinSearch("");
    console.log("reset");
  };
  const resetTrendingResult = () => {
   getTrendData()
  };
  useLayoutEffect(() => {
    getCryptoData();
  }, [coinSearch, currency, sortBy, page, perPage]);

  useLayoutEffect(() => {
    getTrendData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        CryptoData,
        searchData,
        getSearchResult,
        setCoinSearch,
        setSearchData,
        currency,
        setCurrency,
        sortBy,
        setSortBy,
        page,
        setPage,
        totalPages,
        reset,
        perPage,
        setPerPage,
        getCoinData,
        coinData,
        trendData,
        setTrendData,
        resetTrendingResult
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
