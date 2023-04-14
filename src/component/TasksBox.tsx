import React from "react";
import Task from "./Task";

function TasksBox() {
  return (
    <div className="tasksBox">
      <Task
        name="Do homework"
        deadline="25.03.2023"
        desc="Math, history, biology"
        priority="HIGH"
        category="School"
      />
      <span className="leftContent_endText">No more tasks to do</span>
    </div>
  );
}

export default TasksBox;
