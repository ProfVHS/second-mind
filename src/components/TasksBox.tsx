import React from "react";
import { Task } from "./task";
import { isToday } from "date-fns";

interface TasksBoxProps {
  tasks: [taskValues];
  showModal: (modal: modalVisibility, id: number) => void;
  filter: filterType;
}

const priorityIndex = ["LOW", "MEDIUM", "HIGH"];

function TasksBox({ tasks, showModal, filter }: TasksBoxProps) {
  return (
    <div className="tasksBox">
      {tasks
        .sort((a, b) =>
          priorityIndex.indexOf(a.priority) < priorityIndex.indexOf(b.priority)
            ? 1
            : -1
        )
        .map((item: taskValues, i: number) => {
          if (
            (isToday(new Date(item.date)) && item.progress === filter) ||
            (filter === "ALL" && isToday(new Date(item.date)))
          ) {
            return (
              <Task
                key={i}
                id={i}
                name={item.taskname}
                deadline={`${item.date} ${item.time}`}
                desc={item.desc}
                priority={item.priority}
                category={item.category}
                showModal={showModal}
              />
            );
          }
        })}
      <span className="leftContent_endText">No more tasks to do</span>
    </div>
  );
}

export default TasksBox;
