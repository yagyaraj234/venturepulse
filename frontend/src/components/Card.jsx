import React from "react";

const Card = ({
  founded_date,
  name,
  location,
  investorName,
  investmentType,
  amount,
  SubVertical,
  IndustryVertical,
}) => {
  investorName = investorName.split(",");
  return (
    <div className="sm:mx-10 mx-3.5 my-4 w-80 rounded-lg border-2 border-gray-100 py-4 px-6 shadow-lg sm:min-h-[70vh] shadow-gray-200 max-h-[70vh]  hover:shadow-inner  overflow-y-auto scrollbar-hide cursor-pointer ">
      <p className="text-lg md:text-xl font-bold">{name}</p>
      <p className="text-sm font-semibold text-gray-500">{`${IndustryVertical} (${SubVertical})`}</p>
      <p className="mt-3 text-4xl font-bold">{`$${amount || "0"}`}</p>
      <p className="text-sm font-semibold text-gray-500">{investmentType}</p>

      <p className="mt-4 border-b border-gray-800 font-semibold">Investors</p>
      <ul className="mt-4 space-y-2 font-semibold">
        {investorName.slice(0, 2)?.map((investor, index) => (
          <li key={index} className="flex items-center space-x-4">
            <span className="h-2 w-2 rounded-full bg-black"></span>
            <span>{investor}</span>
          </li>
        ))}
        {investorName?.length > 3 && <p className="cursor-pointer">more...</p>}
      </ul>
      <hr className="my-4" />

      <p>Company information</p>

      <ul className="mt-4 space-y-2 font-semibold">
        <li className="flex items-center space-x-4">
          <span className="h-2 w-2 rounded-md  bg-blue-900"></span>
          <span>Established in : {founded_date}</span>
        </li>
        <li className="flex items-center space-x-4">
          <span className="h-2 w-2 rounded-md  bg-blue-900"></span>
          <span>Location : {location}</span>
        </li>
      </ul>
    </div>
  );
};

export default Card;
