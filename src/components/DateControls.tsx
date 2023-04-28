import { format } from "date-fns";
import React from "react";

interface DateControlsProps {
  year: number;
  month: number;
  nextClick: () => void;
  prevClick: () => void;
}

export function DateControls({
  year,
  month,
  nextClick,
  prevClick,
}: DateControlsProps) {
  return (
    <span className="calendar_date">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
        onClick={prevClick}
      >
        <path
          fill="currentColor"
          d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6L14 18Z"
        />
      </svg>
      {year} {format(new Date(year, month, 1), "LLLL")}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
        onClick={nextClick}
      >
        <path
          fill="currentColor"
          d="M9.4 18L8 16.6l4.6-4.6L8 7.4L9.4 6l6 6l-6 6Z"
        />
      </svg>
    </span>
  );
}
