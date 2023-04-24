import React, { useState } from "react";
import { InfoSide } from "./InfoSide";
import { EditSide } from "./EditSide";
import { NavigateFunction } from "react-router-dom";
interface CategoriesProps {
  id: number;
  name: string;
  isDefault: boolean;
  tasks: [taskValues];
  showModal: (modal: modalVisibility, id: number) => void;
  navigator: NavigateFunction;
}
export function Category({
  id,
  name,
  isDefault,
  tasks,
  showModal,
  navigator,
}: CategoriesProps) {
  const [editTools, setEditTools] = useState<boolean>(false);

  const handleClick = () => {
    setEditTools(editTools ? false : true);
  };
  return (
    <div className="item" onMouseLeave={() => setEditTools(false)}>
      <div className="item-card" onClick={() => handleClick()}>
        <InfoSide
          name={name}
          isDefault={isDefault}
          todoCount={
            tasks.filter(
              (item) => item.category === name && item.progress === "TODO"
            ).length
          }
          doneCount={
            tasks.filter(
              (item) => item.category === name && item.progress === "DONE"
            ).length
          }
        />
      </div>
      <EditSide
        isEditToolsMode={editTools}
        isDefault={isDefault}
        onDeleteCategory={() => showModal("DELETE", id)}
        onEditCategory={() => showModal("EDIT", id)}
        onShowCategory={() => navigator(`/category/${name}`)}
      />
    </div>
  );
}
