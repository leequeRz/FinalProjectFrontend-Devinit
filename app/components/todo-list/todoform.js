import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    if (value) {
      // add todo
      addTodo(value);
      // clear form after submission
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full mb-4 text-white">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full mb-4 text-center bg-black p-5 rounded-md"
        placeholder="Add your task in today :)"
      />
      <button
        type="submit"
        className="bg-black text-white border-none px-10 mt-3 py-3 text-ml cursor-pointer rounded-md"
      >
        Add Task
      </button>
    </form>
  );
};
