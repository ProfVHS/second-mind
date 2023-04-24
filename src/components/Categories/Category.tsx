import React, { useState } from "react";
import { InfoSide } from "./InfoSide";
interface CategoriesProps {
  name: string;
  isDefault: boolean;
  tasks: [taskValues];
}
export function Category({ name, isDefault, tasks }: CategoriesProps) {
  const [todoCount, setTodoCount] = useState<number>(2);
  const [doneCount, setDoneCount] = useState<number>(3);
  return (
    <div className="item">
      <div className="item-card">
        <InfoSide
          name={name}
          isDefault={isDefault}
          todoCount={tasks.filter((item) => item.category === "Default").length}
          doneCount={doneCount}
        />
      </div>
    </div>
  );
}
