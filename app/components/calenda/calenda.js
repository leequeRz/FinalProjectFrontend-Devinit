"use client";
import React, { useState } from "react";
import { Calendar, Button, Modal, DatePicker, Input, Badge } from "antd";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [taskDate, setTaskDate] = useState(null);
  const [taskTopic, setTaskTopic] = useState("");
  const [tasks, setTasks] = useState([]);

  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // Handle task creation logic here
    const newTask = {
      date: taskDate.format("YYYY-MM-DD"),
      type: "success", // You may customize the type based on your requirements
      content: taskTopic,
    };

    setTasks([...tasks, newTask]);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onDateChange = (date) => {
    setTaskDate(date);
  };

  const onTopicChange = (e) => {
    setTaskTopic(e.target.value);
  };

  const getListData = (value) => {
    return tasks
      .filter((task) => task.date === value.format("YYYY-MM-DD"))
      .map((task) => ({
        type: task.type,
        content: task.content,
      }));
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);

    return (
      <div>
        <ul className="events">
          {listData.map((item) => (
            <li key={item.content}>
              <Badge status={item.type} text={item.content} />
            </li>
          ))}
        </ul>
        {/* <Button type="primary" onClick={showModal}>
          Create Task
        </Button> */}
      </div>
    );
  };

  return (
    <div className="header text-center bg-white text-black my-20 p-8 rounded-md w-2/3 mx-auto ">
      <h3 className="text-2xl font-bold mb-4">Note-Taking</h3>
      <Button
        type="primary"
        onClick={showModal}
        className="m-4 bg-black text-white"
      >
        Create Task
      </Button>
      <Modal
        title="Create Task"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { backgroundColor: "#000000" } }}
      >
        <label>Select Date: </label>
        <DatePicker onChange={onDateChange} />
        <br />
        <br />
        <label>Task Topic:</label>
        <Input value={taskTopic} onChange={onTopicChange} />
      </Modal>

      <br />
      <Calendar
        onPanelChange={onPanelChange}
        dateCellRender={dateCellRender}
        className="mx-4 mb-4 px-2 rounded-md"
      />
    </div>
  );
};

export default App;
