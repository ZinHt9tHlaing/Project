import React, { createContext, useEffect, useState } from "react";

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const [todos, setTodo] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const jsonData = await res.json();
      setTodo(jsonData);
    })();
  }, []);

  const handleSearchData = (e) => {
    setSearchData(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      return handleFilter();
    }
  };

  const handleFilter = () => {
    const filterTodo = todos.filter((todo) =>
      todo.title.includes(searchData.toLowerCase())
    );
    setTodo(filterTodo);
    setSearchData("")
  };

  return (
    <GeneralContext.Provider
      value={{
        todos,
        setTodo,
        searchData,
        setSearchData,
        handleSearchData,
        handleFilter,
        handleKeyUp,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
