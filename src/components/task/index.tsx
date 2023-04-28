import React from "react";
import { Task } from "./Task";
import { isToday } from "date-fns";
import {
  filterType,
  modalVisibility,
  progressFilter,
  taskValues,
} from "../../shared/type";

interface TasksBoxProps {
  tasks: [taskValues];
  showModal: (modal: modalVisibility, id: number) => void;
  progressFilter: progressFilter;
  filterType: filterType;
  category?: string;
  date?: string;
}

const priorityIndex = ["LOW", "MEDIUM", "HIGH"];

export function TasksBox({
  tasks,
  showModal,
  progressFilter,
  filterType,
  category,
  date,
}: TasksBoxProps) {
  return (
    <div className="flex-column">
      {tasks
        .sort((a, b) =>
          priorityIndex.indexOf(a.priority) < priorityIndex.indexOf(b.priority)
            ? 1
            : -1
        )
        .map((item: taskValues, i: number) => {
          if (
            (filterType === "TODAYS" &&
              isToday(new Date(item.date)) &&
              item.progress === progressFilter) ||
            (filterType === "TODAYS" &&
              progressFilter === "ALL" &&
              isToday(new Date(item.date)))
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
          } else if (
            (filterType === "CATEGORY" &&
              item.category === category &&
              item.progress === progressFilter) ||
            (filterType === "CATEGORY" &&
              progressFilter === "ALL" &&
              item.category === category)
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
          } else if (
            (filterType === "DATE" &&
              item.date === date &&
              item.progress === progressFilter) ||
            (filterType === "DATE" &&
              progressFilter === "ALL" &&
              item.date === date)
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
