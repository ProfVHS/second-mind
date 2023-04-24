import React, { useState } from "react";
import { InfoSide } from "./InfoSide";
import { Category } from "./Category";
interface CategoriesProps {
  isDefault: boolean;
  categories: [categoryValues];
  tasks: [taskValues];
}
export function CategoriesBox({
  isDefault,
  categories,
  tasks,
}: CategoriesProps) {
  const [todoCount, setTodoCount] = useState<number>(2);
  const [doneCount, setDoneCount] = useState<number>(3);
  return (
    <div className="categorybox">
      {categories.map((item, i) => (
        <Category
          key={i}
          name={item.name}
          isDefault={item.isDefault}
          tasks={tasks}
        />
      ))}
    </div>
  );
}
