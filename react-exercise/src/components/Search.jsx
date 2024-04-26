import React, { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";

const Search = () => {
  const { searchData, handleSearchData, handleFilter, handleKeyUp } =
    useContext(GeneralContext);
  return (
    <div>
      <h1 className=" text-4xl font-bold text-center my-4 uppercase">
        React Exercises
      </h1>
      <input
        type="text"
        onKeyUp={handleKeyUp}
        value={searchData}
        onChange={handleSearchData}
        className="border-2 border-black rounded-md p-1 w-3/4"
      />
      <button
        onClick={handleFilter}
        className=" bg-black text-white p-2 rounded ms-3 text-sm active:scale-95 duration-200"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
