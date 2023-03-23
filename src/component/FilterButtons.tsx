import React from "react";

function FilterButtons() {
  return (
    <div className="filter">
      <div className="filter_btn active">todo</div>
      <div className="filter_btn">done</div>
      <div className="filter_btn">all</div>
    </div>
  );
}

export default FilterButtons;
