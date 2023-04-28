import React, { useState } from "react";
import Navbar from "../components/navbar";
import { SetCategoryModal } from "../components/Modals/Settings/SetCategoryModal";
import { ClearDataModal } from "../components/Modals/Settings/ClearDataModal";

export function SettingsPage() {
  const loadCategories = () => {
    const categoriesStorage: string =
      localStorage.getItem("categories") || "[]";
    const categoriesArray = JSON.parse(categoriesStorage);
    return categoriesArray;
  };

  const [categories, setCategories] =
    useState<[categoryValues]>(loadCategories);

  const [showModal, setShowModal] = useState<"SETDEFAULT" | "CLEAR" | false>(
    false
  );

  const saveCategories = () => {
    const newcategoriesStorage = JSON.stringify(categories);
    localStorage.setItem("categories", newcategoriesStorage);
  };

  const setOldDefaultToNormal = () => {
    const newCategories = categories;
    newCategories[
      categories.findIndex((category) => category.isDefault)
    ].isDefault = false;

    setCategories(newCategories);
    saveCategories();
  };

  const setNewDefaultCategories = (index: number) => {
    setOldDefaultToNormal();
    const newCategories: [categoryValues] = categories;
    newCategories[index].isDefault = true;
    setCategories(newCategories);
    saveCategories();
  };

  const clearData = () => {
    localStorage.clear();
    localStorage.setItem("categories", `[{"name":"Default","isDefault":true}]`);
  };
  return (
    <>
      <div className="wrapper">
        <Navbar subpage="SETTINGS" />
        <div className="content">
          <div className="leftContent">
            <span className="leftContent_title">Settings</span>
            <div className="flex-column">
              <div className="setting">
                <div className="setting_col">
                  <span className="setting_name">Clear all data</span>
                  <span className="setting_desc">
                    Delete all task and categories
                  </span>
                </div>
                <button
                  style={{ backgroundColor: "#ba0b4a" }}
                  onClick={() => setShowModal("CLEAR")}
                >
                  CLEAR
                </button>
              </div>
              <div className="setting">
                <div className="setting_col">
                  <span className="setting_name">Set default category</span>
                  <span className="setting_desc">
                    Current -{" "}
                    {categories
                      .filter((category) => category.isDefault)
                      .map((category, i) => category.name)}
                  </span>
                </div>
                <button
                  style={{ backgroundColor: "#3b93fc" }}
                  onClick={() => setShowModal("SETDEFAULT")}
                >
                  SET
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal === "SETDEFAULT" && (
        <SetCategoryModal
          onClose={() => setShowModal(false)}
          categories={categories}
          onSet={setNewDefaultCategories}
        />
      )}
      {showModal === "CLEAR" && (
        <ClearDataModal
          onClose={() => setShowModal(false)}
          onClick={() => clearData()}
        />
      )}
    </>
  );
}
