import React, { useState } from "react";
import CardList from "./Components/CardListComponent";
import PlusButtn from "./Components/plusButtnComponent";
import { Modal } from "./Components/modalComponent";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalTask, setModalTask] = useState("");
  const [readedValue, setReadedValue] = useState(false);
  const cardHeader = ["Tasks To Do", "In Progress", "In Hold", "Tasks Done"];

  const handleChange = (x) => {
    setTask(x.target.value);
  };

  const handleClick = () => {
    if (task === "") return;
    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    };
    const taskObject = {
      id: `${task.length}-${task.slice(0, 3)}-${getRandomIntInclusive(
        0,
        task.length,
      )}-${getRandomIntInclusive(1, task.length)}`,
      value: task,
      progress: "To Do",
      readed: readedValue,
    };
    setTaskArray([...taskArray, taskObject]);
    setTask("");
  };

  const handleOpen = (modalTask) => {
    setOpenModal(true);
    setModalTask(modalTask);
  };
  const handleClose = () => setOpenModal(false);

  return (
    <div className="App">
      <div className="Titles">
        <h1>Tasks</h1>
        <div className="inputDiv">
          <input
            className="inputTask"
            type="text"
            placeholder="Type Your Task..."
            onChange={handleChange}
            value={task}
          />
          <div style={{ display: "flex" }} onClick={handleClick}>
            <PlusButtn />
          </div>
        </div>
        <p className="tradeMark">TL4K4® 2022©</p>
      </div>
      <Modal
        modalStatus={openModal}
        handleCloseProp={handleClose}
        modalTaskProp={modalTask}
      />
      <div className="Cards">
        {cardHeader.map((header, keyHeader) => (
          <CardList
            key={keyHeader}
            columnKey={keyHeader}
            taskReaded={setReadedValue}
            headerTitle={header}
            valuesList={taskArray}
            setValuesList={setTaskArray}
            modalStatus={openModal}
            handleOpenProp={handleOpen}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
