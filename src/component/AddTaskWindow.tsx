import React from "react";

const todayDate = new Date();
console.log(todayDate.getDate());
function AddTaskWindow() {
  return (
    <div className="modal">
      <span className="modal_title">Create a new task.</span>
      <form className="modal_form">
        <input className="modal_input" type="text" placeholder="Task name" />
        <input
          className="modal_input"
          type="text"
          placeholder="Short description"
        />
        <div className="modal_row">
          <select className="modal_select" style={{ width: "45%" }}>
            <option value={"LOW"}>Low</option>
            <option value={"MEDIUM"}>Medium</option>
            <option value={"HIGH"}>High</option>
          </select>
          <select className="modal_select" style={{ width: "45%" }}>
            <option value={"DEFAULT"}>Default</option>
          </select>
        </div>
        <div className="modal_row">
          <input
            style={{ width: "75%" }}
            type="date"
            value={todayDate.toString()}
          />
          <input style={{ width: "25%" }} type="time" value={"12:00"} />
        </div>
      </form>
    </div>
  );
}

export default AddTaskWindow;
