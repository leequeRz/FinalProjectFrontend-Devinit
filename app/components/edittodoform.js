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
        className="outline-none bg-none border border-purple-800 p-2 mt-4 mb-8 w-300 text-white placeholder-white-50"
        placeholder="Update task"
      />
      <button
        type="submit"
        className="bg-purple-800 text-white border-none p-3.5 cursor-pointer"
      >
        Add Task
      </button>
    </form>
  );
};
