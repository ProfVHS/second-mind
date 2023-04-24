import React, { useState } from "react";
import { InfoSide } from "./InfoSide";
import { EditSide } from "./EditSide";

interface TaskProps {
  id: number;
  priority: priority;
  name: string;
  deadline: string;
  desc: string;
  category: string;
  showModal: (modal: modalVisibility, id: number) => void;
}

export function Task({
  id,
  priority,
  name,
  deadline,
  desc,
  category,
  showModal,
}: TaskProps) {
  const [editTools, setEditTools] = useState<boolean>(false);

  const handleClick = () => {
    setEditTools(editTools ? false : true);
  };

  return (
    <div className="item" onMouseLeave={() => setEditTools(false)}>
      <div className="item-card" onClick={() => handleClick()}>
        <InfoSide
          name={name}
          desc={desc}
          priority={priority}
          deadline={deadline}
          category={category}
        />
      </div>
      <EditSide
        isEditToolsMode={editTools}
        onDoneTask={() => showModal("DONE", id)}
        onEditTask={() => showModal("EDIT", id)}
        onDeleteTask={() => showModal("DELETE", id)}
      />
    </div>
  );
}
