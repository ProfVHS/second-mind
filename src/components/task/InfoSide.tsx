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
    <div className="item-card_grid">
      <div className={`item-card_dot ${priority}`} />
      <div className="item-card_name">{name}</div>
      <div className="item-card_deadline">
        {formatDistanceToNowStrict(new Date(deadline), {
          addSuffix: true,
        })}
      </div>
      <div className="item-card_desc">{desc}</div>
      <div className="item-card_category">{category}</div>
    </div>
  );
}
