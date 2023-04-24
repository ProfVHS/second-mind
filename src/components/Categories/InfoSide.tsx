import React from "react";

interface InfoSideProps {
  name: string;
  isDefault: boolean;
  todoCount: number;
  doneCount: number;
}
export function InfoSide({
  name,
  isDefault,
  todoCount,
  doneCount,
}: InfoSideProps) {
  return (
    <div className="item-card_grid">
      <div className={`item-card_dot ${isDefault ? "DEFAULT" : "NORMAL"}`} />
      <div className="item-card_name">{name}</div>
      <div className="item-card_todoCounter">{todoCount} tasks to do</div>
      <div className="item-card_doneCounter">{doneCount} tasks done</div>
    </div>
  );
}
