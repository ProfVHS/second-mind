import React from "react";

interface FilterButtonsProps {
  clickHandle: (filter: filterType) => void;
  filter: filterType;
}

function FilterButtons({ clickHandle, filter }: FilterButtonsProps) {
  return (
    <div className="filter">
      <div
        className={`filter_btn ${filter === "TODO" && "active"}`}
        onClick={() => clickHandle("TODO")}
      >
        to do
      </div>
      <div
        className={`filter_btn ${filter === "DONE" && "active"}`}
        onClick={() => clickHandle("DONE")}
      >
        done
      </div>
      <div
        className={`filter_btn ${filter === "ALL" && "active"}`}
        onClick={() => clickHandle("ALL")}
      >
        all
      </div>
    </div>
  );
}

export default FilterButtons;
