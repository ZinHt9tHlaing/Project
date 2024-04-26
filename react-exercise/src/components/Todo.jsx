import React, { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";
import EmptyStage from "./EmptyStage";

const Todo = () => {
  const { todos } = useContext(GeneralContext);
  return (
    <div>
      <p className=" mt-5 text-end text-gray-600">
        Total Todos -{" "}
        <span className=" text-black font-bold text-lg">{todos.length}</span>{" "}
      </p>
      {todos.length ? (
        <div className="grid grid-cols-2 gap-3 mt-6">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className=" bg-gray-900 shadow-lg text-white p-3 rounded cursor-pointer hover:scale-105 duration-300"
            >
              <p className=" text-yellow-500">No. {todo.id}</p>
              <h3 className=" text-xl text-white/85 line-clamp-2 my-5">
                Title - <span className=" font-bold text-white text-2xl">{todo.title}</span>
              </h3>
              <p className=" text-gray-400">
                Status -{" "}
                {todo.completed ? (
                  <span className=" text-green-500 font-bold">finished</span>
                ) : (
                  <span className=" text-red-500 font-bold">unfinished</span>
                )}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <EmptyStage />
      )}
    </div>
  );
};

export default Todo;
