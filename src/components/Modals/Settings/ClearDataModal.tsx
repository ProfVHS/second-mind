import React from "react";

interface SetCategoryModalProps {
  onClose: () => void;
  onClick: () => void;
}
export function ClearDataModal({ onClose, onClick }: SetCategoryModalProps) {
  const clickHandle = () => {
    onClick();
    onClose();
  };
  return (
    <>
      <div className="modal">
        <span className="modal_title">Do you want to clear all data?</span>
        <span className="modal_desc">
          You will lose all categories and tasks.
        </span>
        <div className="modal_row">
          <button className="modal_cancel" type="reset" onClick={onClose}>
            Cancel
          </button>
          <button className="modal_delete" type="submit" onClick={clickHandle}>
            Clear
          </button>
        </div>
      </div>
      <div className="modal_blur" />
    </>
  );
}
