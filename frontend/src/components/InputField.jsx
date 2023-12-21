import React from "react";

const InputField = () => {
  return (
    <div className="w-72">
      <div className="relative w-full min-w-[200px] h-10">
        <input
          className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0  transition-all  text-sm px-3 py-2.5 rounded-[7px] border border-gray-900"
          placeholder="Search here "
        />
      </div>
    </div>
  );
};

export default InputField;
