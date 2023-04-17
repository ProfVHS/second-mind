import React from "react";

interface DoneModalProps {
  onClose: () => void;
  onChange: () => void;
}
export function DoneModal({ onClose, onChange }: DoneModalProps) {
  const onDoneClickHandler = () => {
    onChange();
    onClose();
  };
  return (
    <>
      <div className="modal">
        <span className="modal_title">Task completed?</span>
        <span style={{ textAlign: "center" }}>
          Are you sure you've finished this task?
        </span>
        <div className="modal_row">
          <button className="modal_cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="modal_submit" onClick={onDoneClickHandler}>
            Done!
          </button>
        </div>
      </div>
      <div className="modal_blur" />
    </>
  );
}
