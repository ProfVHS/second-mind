import React, { useEffect } from "react";
import { useState } from "react";

import "../styles/Style.scss";

import FilterButtons from "../components/FilterButtons";
import Navbar from "../components/navbar";
import AddTaskBtn from "../components/AddTaskBtn";
import { CategoriesBox } from "../components/Categories";
import { AddModal } from "../components/Modals/Categories/AddModal";
import { DeleteModal } from "../components/Modals/Categories/DeleteModal";
import { EditModal } from "../components/Modals/Categories/EditModal";
import { categoryValues, modalVisibility, taskValues } from "../shared/type";

export function CategoriesPage() {
  const [modalVisibility, setModalVisibility] =
    useState<modalVisibility>(false);
  const [selectedId, setSelectedId] = useState<number>(0);

  //==== loading/saving categories system ====//

  const loadCategories = () => {
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
    useState<[categoryValues]>(loadCategories);

  const [tasks, setTasks] = useState<[taskValues]>(loadTasks);

  const saveCategories = () => {
    const newcategoriesStorage = JSON.stringify(categories);
    localStorage.setItem("categories", newcategoriesStorage);
  };

  const addCategory = (category: categoryValues) => {
    const newcategories: [categoryValues] = categories;
    newcategories.push(category);
    setCategories(newcategories);
    saveCategories();
  };

  const editCategory = (category: categoryValues) => {
    const newcategories: [categoryValues] = categories;
    newcategories[selectedId] = category;
    setCategories(newcategories);
    saveCategories();
  };

  //DELETE TASKS WHERE CATEGORY IS DELETED
  const deleteTask = (id: number) => {
    const newTasks = tasks.filter(
      (item) => item.category != categories[id].name
    );
    const newTasksStorage = JSON.stringify(newTasks);
    localStorage.setItem("tasks", newTasksStorage);
  };

  const deleteCategory = (id: number) => {
    deleteTask(id);
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
              showModal={showModal}
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
      {modalVisibility === "DELETE" && (
        <DeleteModal
          onClose={() => setModalVisibility(false)}
          onDelete={() => deleteCategory(selectedId)}
        />
      )}
      {modalVisibility === "EDIT" && (
        <EditModal
          onClose={() => setModalVisibility(false)}
          editCategory={editCategory}
          category={categories[selectedId]}
          tasks={tasks}
        />
      )}
    </>
  );
}
