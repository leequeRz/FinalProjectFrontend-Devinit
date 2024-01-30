import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    editTodo(value, task.id);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full mb-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="outline-none bg-none border border-black rounded-md p-3 mt-3 mb-8 w-1/2 text-black placeholder-white-50"
        placeholder="Update task"
      />
      <button
        type="submit"
        className="bg-black text-white border-none p-3.5 rounded-md cursor-pointer mx-5"
      >
        Add Task
      </button>
    </form>
  );
};
