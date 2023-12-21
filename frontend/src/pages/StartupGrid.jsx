import React, { useState } from "react";
import Filter from "../components/Filter";
import InputField from "../components/InputField";

import { FaFilter } from "react-icons/fa";
import Card from "../components/Card";

const items = [
  {
    _id: "65829045769e8ef5a0f1e31c",
    SNo: 0,
    Date: "01/08/2017",
    StartupName: "TouchKin",
    IndustryVertical: "Technology",
    SubVertical: "Predictive Care Platform",
    CityLocation: "Bangalore",
    InvestorsName: "Kae Capital",
    InvestmentType: "Private Equity",
    AmountInUSD: "1,300,000",
  },
  {
    _id: "65829045769e8ef5a0f1e31e",
    SNo: 2,
    Date: "02/08/2017",
    StartupName: "Leverage Edu",
    IndustryVertical: "Consumer Internet",
    SubVertical: "Online platform for Higher Education Services",
    CityLocation: "New Delhi",
    InvestorsName:
      "Kashyap Deorah, Anand Sankeshwar, Deepak Jain, Sadashiva NT, Arjun Mehta, Satish Kaul, Anindya Ghose",
    InvestmentType: "Seed Funding",
  },
  {
    _id: "65829045769e8ef5a0f1e31c",
    SNo: 0,
    Date: "01/08/2017",
    StartupName: "TouchKin",
    IndustryVertical: "Technology",
    SubVertical: "Predictive Care Platform",
    CityLocation: "Bangalore",
    InvestorsName: "Kae Capital",
    InvestmentType: "Private Equity",
    AmountInUSD: "1,300,000",
  },
  {
    _id: "65829045769e8ef5a0f1e31e",
    SNo: 2,
    Date: "02/08/2017",
    StartupName: "Leverage Edu",
    IndustryVertical: "Consumer Internet",
    SubVertical: "Online platform for Higher Education Services",
    CityLocation: "New Delhi",
    InvestorsName:
      "Kashyap Deorah, Anand Sankeshwar, Deepak Jain, Sadashiva NT, Arjun Mehta, Satish Kaul, Anindya Ghose",
    InvestmentType: "Seed Funding",
  },
  {
    _id: "65829045769e8ef5a0f1e31c",
    SNo: 0,
    Date: "01/08/2017",
    StartupName: "TouchKin",
    IndustryVertical: "Technology",
    SubVertical: "Predictive Care Platform",
    CityLocation: "Bangalore",
    InvestorsName: "Kae Capital",
    InvestmentType: "Private Equity",
    AmountInUSD: "1,300,000",
  },
  {
    _id: "65829045769e8ef5a0f1e31e",
    SNo: 2,
    Date: "02/08/2017",
    StartupName: "Leverage Edu",
    IndustryVertical: "Consumer Internet",
    SubVertical: "Online platform for Higher Education Services",
    CityLocation: "New Delhi",
    InvestorsName:
      "Kashyap Deorah, Anand Sankeshwar, Deepak Jain, Sadashiva NT, Arjun Mehta, Satish Kaul, Anindya Ghose",
    InvestmentType: "Seed Funding",
  },
  {
    _id: "65829045769e8ef5a0f1e31c",
    SNo: 0,
    Date: "01/08/2017",
    StartupName: "TouchKin",
    IndustryVertical: "Technology",
    SubVertical: "Predictive Care Platform",
    CityLocation: "Bangalore",
    InvestorsName: "Kae Capital",
    InvestmentType: "Private Equity",
    AmountInUSD: "1,300,000",
  },
  {
    _id: "65829045769e8ef5a0f1e31e",
    SNo: 2,
    Date: "02/08/2017",
    StartupName: "Leverage Edu",
    IndustryVertical: "Consumer Internet",
    SubVertical: "Online platform for Higher Education Services",
    CityLocation: "New Delhi",
    InvestorsName:
      "Kashyap Deorah, Anand Sankeshwar, Deepak Jain, Sadashiva NT, Arjun Mehta, Satish Kaul, Anindya Ghose",
    InvestmentType: "Seed Funding",
  },
];
const StartupGrid = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto">
      {" "}
      <div className="flex justify-center items-center relative  gap-20 max-sm:mx-2">
        <InputField />
        {/* <div> */}
        <FaFilter
          className="font-semibold text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && <Filter setIsOpen={setIsOpen} />}
        {/* </div> */}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 items-center w-full justify-items-center	  mx-auto ">
        {items?.map((StartupItem, index) => (
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
    </div>
  );
};

export default StartupGrid;
