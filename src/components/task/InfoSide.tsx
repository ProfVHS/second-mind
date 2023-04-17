import React, { useState } from "react";
import { formatDistanceToNowStrict } from "date-fns";

interface InfoSide {
  priority: priority;
  name: string;
  deadline: string;
  desc: string;
  category: string;
}

export function InfoSide({
  priority,
  name,
  deadline,
  desc,
  category,
}: InfoSide) {
  return (
    <div className="task-card_grid">
      <div className={`task-card_priorityDot ${priority}`} />
      <div className="task-card_name">{name}</div>
      <div className="task-card_deadline">
        {formatDistanceToNowStrict(new Date(deadline), {
          addSuffix: true,
        })}
      </div>
      <div className="task-card_desc">{desc}</div>
      <div className="task-card_category">{category}</div>
    </div>
  );
}
