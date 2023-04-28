import {
  format,
  getDate,
  getDay,
  getWeekOfMonth,
  isBefore,
  isSameDay,
} from "date-fns";
import React from "react";
import { useNavigate } from "react-router-dom";

interface DayBoxProps {
  day: Date;
  year: number;
  month: number;
  tasks: [taskValues];
}

export function DayBox({ day, year, month, tasks }: DayBoxProps) {
  const navigate = useNavigate();

  const openDayPreview = (date: Date) => {
    navigate("/tasks/" + format(date, "yyyy-MM-dd"));
  };
  return (
    <div
      className={`calendar_day ${
        tasks.filter((e) => isSameDay(new Date(e.date), day)).length > 0 &&
        "hasTask"
      } ${isBefore(day, new Date(year, month, 1)) && "lastMonth"}`}
      style={{
        gridColumn: getDay(day) === 0 ? 7 : getDay(day),
        gridRow: isBefore(day, new Date(year, month, 1))
          ? 2
          : getWeekOfMonth(day, { weekStartsOn: 1 }) + 1,
      }}
      onClick={
        !isBefore(day, new Date(year, month, 1))
          ? () => openDayPreview(day)
          : () => {}
      }
    >
      {getDate(day)}
    </div>
  );
}
