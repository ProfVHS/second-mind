import React, { useEffect } from "react";
import { useState } from "react";

import "./css/App.css";

import FilterButtons from "./components/FilterButtons";
import TasksBox from "./components/TasksBox";
import Navbar from "./components/navbar";
import AddTaskBtn from "./components/AddTaskBtn";
import AddTaskWindow from "./components/AddTaskWindow";
import { DeleteModal } from "./components/DeleteModal";
import { DoneModal } from "./components/DoneModal";

function App() {
  const [filter, setFilter] = useState<filterType>("TODO");
  const [showModalAddTask, setShowModalAddTask] = useState<boolean>(false);
  const [showModalDeleteTask, setShowModalDeleteTask] =
    useState<boolean>(false);
  const [showModalDoneTask, setShowModalDoneTask] = useState<boolean>(false);
  const [toEditId, setToEditId] = useState<number>(0);

  //==== loading/saving tasks system ====//

  const loadTasks = () => {
    const tasksStorage: string = localStorage.getItem("tasks") || "[]";
    const tasksArray = JSON.parse(tasksStorage);
    return tasksArray;
  };

  const [tasks, setTasks] = useState<[TaskValues]>(loadTasks);

  const saveTasks = () => {
    const newTasksStorage = JSON.stringify(tasks);
    localStorage.setItem("tasks", newTasksStorage);
    console.log(tasks);
  };

  const addTask = (task: TaskValues) => {
    const newTasks: [TaskValues] = tasks;
    newTasks.push(task);
    setTasks(newTasks);
    saveTasks();
  };

  const deleteTask = (id: number) => {
    const newTasks: [TaskValues] = tasks;
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

  const showDeleteModal = (id: number) => {
    setToEditId(id);
    setShowModalDeleteTask(true);
  };
  const showDoneModal = (id: number) => {
    setToEditId(id);
    setShowModalDoneTask(true);
  };

  return (
    <>
      <div className="wrapper">
        <Navbar subpage="HOME" />
        <div className="content">
          <div className="leftContent">
            <span className="leftContent_title">Today's tasks</span>
            <FilterButtons clickHandle={setFilter} filter={filter} />
            <TasksBox
              tasks={tasks}
              onDeleteTask={showDeleteModal}
              onDoneTask={showDoneModal}
              filter={filter}
            />
          </div>
        </div>
      </div>
      <AddTaskBtn onClick={() => setShowModalAddTask(true)} />

      {showModalAddTask && (
        <AddTaskWindow
          addTask={addTask}
          onClose={() => setShowModalAddTask(false)}
        />
      )}
      {showModalDeleteTask && (
        <DeleteModal
          onClose={() => setShowModalDeleteTask(false)}
          onDelete={() => deleteTask(toEditId)}
        />
      )}
      {showModalDoneTask && (
        <DoneModal
          onClose={() => setShowModalDoneTask(false)}
          onChange={() => changeProgress(toEditId)}
        />
      )}
    </>
  );
}

export default App;
