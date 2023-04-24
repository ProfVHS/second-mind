import React, { useEffect } from "react";
import { useState } from "react";

import "../css/App.css";

import FilterButtons from "../components/FilterButtons";
import TasksBox from "../components/TasksBox";
import Navbar from "../components/navbar";
import AddTaskBtn from "../components/AddTaskBtn";
import { AddModal } from "../components/Modals/Tasks/AddModal";
import { DeleteModal } from "../components/Modals/Tasks/DeleteModal";
import { DoneModal } from "../components/Modals/Tasks/DoneModal";
import { EditModal } from "../components/Modals/Tasks/EditModal";

function App() {
  const [filter, setFilter] = useState<filterType>("TODO");
  const [modalVisibility, setModalVisibility] =
    useState<modalVisibility>(false);
  const [toEditId, setToEditId] = useState<number>(0);

  //==== loading/saving tasks system ====//

  const loadTasks = () => {
    const tasksStorage: string = localStorage.getItem("tasks") || "[]";
    const tasksArray = JSON.parse(tasksStorage);
    return tasksArray;
  };

  const [tasks, setTasks] = useState<[taskValues]>(loadTasks);

  const saveTasks = () => {
    const newTasksStorage = JSON.stringify(tasks);
    localStorage.setItem("tasks", newTasksStorage);
  };

  const addTask = (task: taskValues) => {
    const newTasks: [taskValues] = tasks;
    newTasks.push(task);
    setTasks(newTasks);
    saveTasks();
  };

  const editTask = (task: taskValues) => {
    const newTasks: [taskValues] = tasks;
    newTasks[toEditId] = task;
    setTasks(newTasks);
    saveTasks();
  };

  const deleteTask = (id: number) => {
    const newTasks: [taskValues] = tasks;
    newTasks.splice(id, 1);
    setTasks(newTasks);
    saveTasks();
  };

  const changeProgress = (id: number) => {
    const newTasks = tasks;
    newTasks[id].progress === "TODO"
      ? (newTasks[id].progress = "DONE")
      : (newTasks[id].progress = "TODO");
    setTasks(newTasks);
    saveTasks();
  };

  const showModal = (modal: modalVisibility, id: number) => {
    setToEditId(id);
    setModalVisibility(modal);
  };

  return (
    <>
      <div className="wrapper">
        <Navbar subpage="HOME" />
        <div className="content">
          <div className="leftContent">
            <span className="leftContent_title">Today's tasks</span>
            <FilterButtons clickHandle={setFilter} filter={filter} />
            <TasksBox tasks={tasks} showModal={showModal} filter={filter} />
          </div>
        </div>
      </div>
      <AddTaskBtn onClick={() => setModalVisibility("ADD")} />

      {modalVisibility === "ADD" && (
        <AddModal addTask={addTask} onClose={() => setModalVisibility(false)} />
      )}
      {modalVisibility === "DELETE" && (
        <DeleteModal
          onClose={() => setModalVisibility(false)}
          onDelete={() => deleteTask(toEditId)}
        />
      )}
      {modalVisibility === "DONE" && (
        <DoneModal
          onClose={() => setModalVisibility(false)}
          onChange={() => changeProgress(toEditId)}
        />
      )}
      {modalVisibility === "EDIT" && (
        <EditModal
          onClose={() => setModalVisibility(false)}
          task={tasks[toEditId]}
          onEdit={editTask}
        />
      )}
    </>
  );
}

export default App;
