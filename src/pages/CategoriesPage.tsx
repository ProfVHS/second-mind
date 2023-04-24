import React, { useEffect } from "react";
import { useState } from "react";

import "../css/App.css";

import FilterButtons from "../components/FilterButtons";
import Navbar from "../components/navbar";
import AddTaskBtn from "../components/AddTaskBtn";
import { CategoriesBox } from "../components/Categories";
import { AddModal } from "../components/Modals/Categories/AddModal";

export function CategoriesPage() {
  const [modalVisibility, setModalVisibility] =
    useState<modalVisibility>(false);
  const [selectedId, setSelectedId] = useState<number>(0);

  //==== loading/saving categories system ====//

  const loadcategories = () => {
    const categoriesStorage: string =
      localStorage.getItem("categories") || "[]";
    const categoriesArray = JSON.parse(categoriesStorage);
    return categoriesArray;
  };

  const loadTasks = () => {
    const tasksStorage: string = localStorage.getItem("tasks") || "[]";
    const tasksArray = JSON.parse(tasksStorage);
    return tasksArray;
  };

  const [categories, setCategories] =
    useState<[categoryValues]>(loadcategories);

  const [tasks, setTasks] = useState<[taskValues]>(loadTasks);

  const saveCategories = () => {
    const newcategoriesStorage = JSON.stringify(categories);
    localStorage.setItem("categories", newcategoriesStorage);
  };

  const addCategory = (task: categoryValues) => {
    const newcategories: [categoryValues] = categories;
    newcategories.push(task);
    setCategories(newcategories);
    saveCategories();
  };

  const editCategory = (task: categoryValues) => {
    const newcategories: [categoryValues] = categories;
    newcategories[selectedId] = task;
    setCategories(newcategories);
    saveCategories();
  };

  const deleteCategory = (id: number) => {
    const newcategories: [categoryValues] = categories;
    newcategories.splice(id, 1);
    setCategories(newcategories);
    saveCategories();
  };

  const showModal = (modal: modalVisibility, id: number) => {
    setSelectedId(id);
    setModalVisibility(modal);
  };

  return (
    <>
      <div className="wrapper">
        <Navbar subpage="CATEGORIES" />
        <div className="content">
          <div className="leftContent">
            <span className="leftContent_title">Your categories</span>
            <CategoriesBox
              isDefault={true}
              categories={categories}
              tasks={tasks}
            />
          </div>
        </div>
      </div>
      <AddTaskBtn onClick={() => setModalVisibility("ADD")} />

      {modalVisibility === "ADD" && (
        <AddModal
          onClose={() => setModalVisibility(false)}
          addCategories={addCategory}
        />
      )}
    </>
  );
}
