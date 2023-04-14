import React from "react";
import { useState } from "react";

import "./css/App.css";

import FilterButtons from "./components/FilterButtons";
import TasksBox from "./components/TasksBox";
import Navbar from "./components/navbar";
import AddTaskBtn from "./components/AddTaskBtn";
import AddTaskWindow from "./components/AddTaskWindow";

function App() {
  const [filter, setFilter] = useState<filterType>("TODO");
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <div className="wrapper">
        <Navbar subpage="HOME" />
        <div className="content">
          <div className="leftContent">
            <span className="leftContent_title">Today's tasks</span>
            <FilterButtons clickHandle={setFilter} filter={filter} />
            <TasksBox />
          </div>
        </div>
      </div>
      <AddTaskBtn onClick={() => setShowModal(true)} />

      {showModal && <AddTaskWindow onClose={() => setShowModal(false)} />}
    </>
  );
}

export default App;
