import React, { useState } from "react";
import { InfoSide } from "./InfoSide";
import { Category } from "./Category";
import { useNavigate } from "react-router-dom";
interface CategoriesProps {
  isDefault: boolean;
  categories: [categoryValues];
  tasks: [taskValues];
  showModal: (modal: modalVisibility, id: number) => void;
}
export function CategoriesBox({
  isDefault,
  categories,
  tasks,
  showModal,
}: CategoriesProps) {
  const navigate = useNavigate();
  return (
    <div className="categorybox">
      {categories.map((item, i) => (
        <Category
          key={i}
          id={i}
          name={item.name}
          isDefault={item.isDefault}
          tasks={tasks}
          showModal={showModal}
          navigator={navigate}
        />
      ))}
    </div>
  );
}
