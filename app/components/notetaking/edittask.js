import React, { useState, useEffect } from "react";

const EditTaskPopup = ({ modal, toggle, updateTask, taskObj }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  useEffect(() => {
    setTaskName(taskObj.Name);
    setDescription(taskObj.Description);
  }, [taskObj]);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Name"] = taskName;
    tempObj["Description"] = description;
    updateTask(tempObj);
  };

  return (
    <div className={`fixed inset-0 ${modal ? "block" : "hidden"}`}>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-500 w-full max-w-md p-8 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-black">Update Task</h2>
          <div className="mb-4">
            <label
              htmlFor="taskName"
              className="block text-sm font-medium text-black"
            >
              Task Name
            </label>
            <input
              type="text"
              id="taskName"
              className="mt-1 p-2 w-full border rounded-md text-black"
              value={taskName}
              onChange={handleChange}
              name="taskName"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-black"
            >
              Description
            </label>
            <textarea
              rows="5"
              id="description"
              className="mt-1 p-2 w-full border rounded-md text-black"
              value={description}
              onChange={handleChange}
              name="description"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-black text-white p-2 rounded hover:bg-gray-800 hover:text-white mr-2"
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              className="bg-gray-300 text-gray-700 p-2 rounded hover:bg-gray-400"
              onClick={toggle}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTaskPopup;
