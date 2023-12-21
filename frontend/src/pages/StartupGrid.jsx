import React, { useState, useEffect, useCallback } from "react";
import Filter from "../components/Filter";
import InputField from "../components/InputField";
import { FaFilter } from "react-icons/fa";
import Card from "../components/Card";
import axios from "axios";
import { BASE_URL } from "../constant";

let timerId;
const StartupGrid = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startUps, setStartUps] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");

  const fetchStartups = async (page) => {
    try {
      const res = await axios.get(
        `${BASE_URL}api/v1/startups?page=${page}&limit=9`
      );
      if (res.data) {
        setStartUps(res.data.data);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  // const fetchSearchData = async () => {
  //   try {
  //     const res = await axios.get(`${BASE_URL}startup-search=:${searchText}`);
  //     console.log(res);
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // };

  const fetchSearchData = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}api/v1/startup-search=:${searchText}`
      );
      if (res.data) {
        setStartUps(res.data.data);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const fetchData = useCallback(() => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fetchSearchData();
    }, 1000);
  }, [searchText]);

  useEffect(() => {
    fetchData();
    return () => clearTimeout(timerId);
  }, [searchText, fetchData]);

  useEffect(() => {
    fetchStartups(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center relative  gap-20 max-sm:mx-2">
        {/* Seacrh */}

        <div className="w-72">
          <div className="relative w-full min-w-[200px] h-10">
            <input
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0  transition-all  text-sm px-3 py-2.5 rounded-[7px] border border-gray-900"
              placeholder="Search here "
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>

        {/* <div> */}
        <FaFilter
          className="font-semibold text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && <Filter setIsOpen={setIsOpen} />}
        {/* </div> */}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 items-center w-full justify-items-center	  mx-auto ">
        {startUps?.length === 0 && (
          <p className="text-black text-3xl text-center my-10 w-full">
            No Startups Available
          </p>
        )}
        {startUps?.map((StartupItem, index) => (
          <div key={StartupItem + index}>
            <Card
              founded_date={StartupItem?.Date}
              name={StartupItem?.StartupName}
              location={StartupItem?.CityLocation}
              investorName={StartupItem?.InvestorsName}
              investmentType={StartupItem?.InvestmentType}
              amount={StartupItem?.AmountInUSD}
              SubVertical={StartupItem?.SubVertical}
              IndustryVertical={StartupItem?.IndustryVertical}
            />
          </div>
        ))}
      </div>

      {/* Pagination btn */}
      <div className="flex justify-center my-6">
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded ${
            currentPage === 1 && "opacity-50 cursor-not-allowed"
          }`}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded ${
            startUps.length === 0 && "opacity-50 cursor-not-allowed"
          }`}
          onClick={handleNextPage}
          disabled={startUps.length === 0}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StartupGrid;
