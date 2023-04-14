import React from "react";
import { useState } from "react";

import "./css/App.css";

import FilterButtons from "./component/FilterButtons";
import TasksBox from "./component/TasksBox";
import Navbar from "./component/Navbar";
import AddTaskBtn from "./component/AddTaskBtn";
import AddTaskWindow from "./component/AddTaskWindow";

function App() {
  const [filter, setFilter] = useState<filterType>("TODO");
  return (
    <>
      <div className="wrapper">
        <Navbar sub="HOME" />
        <div className="content">
          <div className="leftContent">
            <span className="leftContent_title">Today's tasks</span>
            <FilterButtons clickHandle={setFilter} filter={filter} />
            <TasksBox />
          </div>
        </div>
      </div>
      <AddTaskBtn />
      <AddTaskWindow />
    </>
  );
}

export default App;
