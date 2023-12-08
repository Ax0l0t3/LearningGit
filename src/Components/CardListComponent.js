import React from "react";
import { NxtButtn } from "./nxtButtnComponent";
import { DtailsButtn } from "./dtailsButtnComponent";
import { PrvsButtn } from "./pvsBttnComponent";
import { DoneButtn } from "./doneButtnComponent";
import "../Styles/CardListComponent.css";

function CardList({
  columnKey,
  valuesList,
  setValuesList,
  optionsList,
  headerTitle,
  modalStatus,
  handleOpenProp,
  taskReaded,
}) {
  const progressToColumnMap = {
    "To Do": 0,
    "In Progress": 1,
    "In Hold": 2,
    "Done": 3,
  };
  const handleForward = (x) => {
    switch (x.progress) {
      case "To Do":
        const progValues = valuesList.map((z) => {
          if (z.id === x.id) {
            z.progress = "In Progress";
          }
          return z;
        });
        setValuesList(progValues);
        break;
      case "In Progress":
        const holdValues = valuesList.map((z) => {
          if (z.id === x.id) {
            z.progress = "In Hold";
          }
          return z;
        });
        setValuesList(holdValues);
        break;
      case "In Hold":
        const doneValues = valuesList.map((z) => {
          if (z.id === x.id) {
            z.progress = "Done";
          }
          return z;
        });
        setValuesList(doneValues);
        break;
      default:
        console.log("Default");
        break;
    }
  };

  const handleBackward = (x) => {
    switch (x.progress) {
      case "In Progress":
        const progValues = valuesList.map((z) => {
          if (z.id === x.id) {
            z.progress = "To Do";
          }
          return z;
        });
        setValuesList(progValues);
        break;
      case "In Hold":
        const holdValues = valuesList.map((z) => {
          if (z.id === x.id) {
            z.progress = "In Progress";
          }
          return z;
        });
        setValuesList(holdValues);
        break;
      case "Done":
        const doneValues = valuesList.map((z) => {
          if (z.id === x.id) {
            z.progress = "In Hold";
          }
          return z;
        });
        setValuesList(doneValues);
        break;
      default:
        console.log("Default");
        break;
    }
  };

  const handleDone = (x) => {
    const removeValues = valuesList.filter((z) => z.id !== x.id);
    setValuesList(removeValues);
  };

  const renderTask = (task) => (
    <div className="TaskContainer" key={task.id}>
      {columnKey !== 0 ? (
        <div onClick={() => handleBackward(task)}>
          <PrvsButtn />
        </div>
      ) : null}
      <p className="task" key={task.id}>
        {" "}
        {task.value}{" "}
      </p>
      <div className="bttnsCntner">
        <div onClick={() => handleOpenProp(task)}>
          <DtailsButtn />
        </div>
        {columnKey !== 3 ? (
          <div onClick={() => handleForward(task)}>
            <NxtButtn />
          </div>
        ) : (
          <div onClick={() => handleDone(task)}>
            <DoneButtn />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="cardStyle">
      <h3 className="cardTitle">{headerTitle}</h3>
      <div className="TasksBody">
        {valuesList.map((task) => {
          if (columnKey === progressToColumnMap[task.progress])
            return renderTask(task);
          return null;
        })}
      </div>
    </div>
  );
}

export default CardList;
