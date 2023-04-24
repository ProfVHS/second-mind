import React from "react";

interface DeleteModalProps {
  onClose: () => void;
  onDelete: () => void;
}
export function DeleteModal({ onClose, onDelete }: DeleteModalProps) {
  const onDeleteClickHandler = () => {
    onDelete();
    onClose();
  };
  return (
    <>
      <div className="modal">
        <span className="modal_title">Are you sure?</span>
        <span style={{ textAlign: "center" }}>
          Do you really want to delete this task?
        </span>
        <div className="modal_row">
          <button className="modal_cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="modal_delete" onClick={onDeleteClickHandler}>
            Delete
          </button>
        </div>
      </div>
      <div className="modal_blur" />
    </>
  );
}
