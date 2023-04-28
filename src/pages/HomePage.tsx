import React, { useEffect } from "react";
import { useState } from "react";

import "../styles/Style.scss";

import FilterButtons from "../components/FilterButtons";
import Navbar from "../components/navbar";
import AddTaskBtn from "../components/AddTaskBtn";
import { AddModal } from "../components/Modals/Tasks/AddModal";
import { DeleteModal } from "../components/Modals/Tasks/DeleteModal";
import { DoneModal } from "../components/Modals/Tasks/DoneModal";
import { EditModal } from "../components/Modals/Tasks/EditModal";
import { TasksBox } from "../components/Task";
import {
  categoryValues,
  modalVisibility,
  progressFilter,
  taskValues,
} from "../shared/type";

export function HomePage() {
  const [filter, setFilter] = useState<progressFilter>("TODO");
  const [modalVisibility, setModalVisibility] =
    useState<modalVisibility>(false);
  const [selectedId, setSelectedId] = useState<number>(0);

  //==== loading/saving tasks system ====//

  const loadTasks = () => {
    const tasksStorage: string = localStorage.getItem("tasks") || "[]";
    const tasksArray = JSON.parse(tasksStorage);
    return tasksArray;
  };

  const loadCategories = () => {
    const categoriesStorage: string =
      localStorage.getItem("categories") || "[]";
    const categoriesArray = JSON.parse(categoriesStorage);
    return categoriesArray;
  };

  const [tasks, setTasks] = useState<[taskValues]>(loadTasks);
  const [categories, setCategories] =
    useState<[categoryValues]>(loadCategories);

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
    newTasks[selectedId] = task;
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
    setSelectedId(id);
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
            <TasksBox
              tasks={tasks}
              showModal={showModal}
              progressFilter={filter}
              filterType="TODAYS"
            />
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
          onDelete={() => deleteTask(selectedId)}
        />
      )}
      {modalVisibility === "DONE" && (
        <DoneModal
          onClose={() => setModalVisibility(false)}
          onChange={() => changeProgress(selectedId)}
        />
      )}
      {modalVisibility === "EDIT" && (
        <EditModal
          onClose={() => setModalVisibility(false)}
          task={tasks[selectedId]}
          onEdit={editTask}
          categories={categories}
        />
      )}
    </>
  );
}
