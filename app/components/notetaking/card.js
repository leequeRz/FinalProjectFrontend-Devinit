import React, { useState } from "react";
import EditTask from "./edittask";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  return (
    <div className="w-72 h-full flex mx-10 my-10 bg-white border border-gray-300 shadow-md rounded-lg p-4">
      <div className="flex flex-col w-full h-full relative">
        <span className="card-header bg-black text-white rounded p-2">
          {taskObj.Name}
        </span>
        <p className="mt-3 text-black break-all">{taskObj.Description}</p>

        <div className="flex justify-end mt-4">
          <button
            className="bg-black text-white p-2 rounded hover:bg-gray-800 mr-2"
            onClick={() => setModal(true)}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button
            className="bg-black text-white p-2 rounded hover:bg-gray-800"
            onClick={handleDelete}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    </div>
  );
};

export default Card;
