import React from "react";
import moment from "moment";

interface TaskProps {
  priority: priorityType;
  name: string;
  deadline: string;
  desc: string;
  category: string;
}

function Task({ priority, name, deadline, desc, category }: TaskProps) {
  return (
    <div className="task">
      <div className={`task_priorityDot ${priority}`} />
      <div className="task_name">{name}</div>
      <div className="task_deadline">
        {moment("2023-03-25T14:05:00").startOf("minute").fromNow()}
      </div>
      <div className="task_desc">{desc}</div>
      <div className="task_category">{category}</div>
    </div>
  );
}

export default Task;
