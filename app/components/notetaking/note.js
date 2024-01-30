"use client";

import React, { useEffect, useState } from "react";
import CreateTask from "./createtask";
import Card from "./card";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
  };

  return (
    <>
      <div className="header text-center bg-white text-black mt-20 p-8 rounded-md w-1/2 mx-auto">
        <h3 className="text-2xl font-bold mb-4">Note-Taking</h3>
        <p className="mt-3 text-black mb-4">
          Click on the create task to note something what you want to remember.{" "}
        </p>
        <button
          className="bg-black text-white p-2 rounded hover:bg-gray-800 hover:text-white"
          onClick={() => setModal(true)}
        >
          Create Task
        </button>
      </div>
      <div className="task-container flex flex-wrap space-around justify-center items-center">
        {taskList &&
          taskList.map((obj, index) => (
            <Card
              key={index}
              taskObj={obj}
              index={index}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
            />
          ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;
