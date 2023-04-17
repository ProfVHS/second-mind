import React, { useState } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import { InfoSide } from "./InfoSide";
import { EditToolsBox } from "./EditSide";

interface TaskProps {
  priority: priority;
  name: string;
  deadline: string;
  desc: string;
  category: string;
  onDeleteTask: () => void;
  onDoneTask: () => void;
}

export function Task({
  priority,
  name,
  deadline,
  desc,
  category,
  onDeleteTask,
  onDoneTask,
}: TaskProps) {
  const [editTools, setEditTools] = useState<boolean>(false);

  const handleClick = () => {
    setEditTools(editTools ? false : true);
  };

  return (
    <div className="task" onMouseLeave={() => setEditTools(false)}>
      <div className="task-card" onClick={() => handleClick()}>
        <InfoSide
          name={name}
          desc={desc}
          priority={priority}
          deadline={deadline}
          category={category}
        />
      </div>
      <EditToolsBox
        isEditToolsMode={editTools}
        onDeleteTask={onDeleteTask}
        onDoneTask={onDoneTask}
      />
    </div>
  );
}
