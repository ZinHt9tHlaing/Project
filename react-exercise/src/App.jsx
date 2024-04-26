import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";
import Search from "./components/Search";

const App = () => {
  return (
    <section className=" w-1/2 mx-auto">
      <Search />
      <Todo />
    </section>
  );
};

export default App;
