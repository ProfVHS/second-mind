import React, { useEffect, useState } from "react";
import "../styles/Style.scss";

import Navbar from "../components/navbar";
import { eachDayOfInterval, format, getDate, getDay, getDaysInMonth, getWeekOfMonth, isBefore, isSameDay } from "date-fns";
import { useNavigate } from "react-router-dom";
import { DateControls } from "../components/DateControls";
import { DayBox } from "../components/DayBox";
import { taskValues } from "../shared/type";

const dateNow = new Date();

export function CalendarPage() {
  const daysName = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const loadTasks = () => {
    const tasksStorage: string = localStorage.getItem("tasks") || "[]";
    const tasksArray = JSON.parse(tasksStorage);
    return tasksArray;
  };

  const [year, setYear] = useState<number>(dateNow.getFullYear());
  const [month, setMonth] = useState<number>(dateNow.getMonth());

  const getAllMonthDays = (year: number, month: number) => {
    return eachDayOfInterval({
      start: new Date(year, month, 2 - getDay(new Date(year, month, 1))),
      end: new Date(year, month, getDaysInMonth(new Date(year, month, 1))),
    });
  };

  const [days, setDays] = useState<Date[]>(getAllMonthDays(year, month));
  const [tasks, setTasks] = useState<[taskValues]>(loadTasks);

  const nextDate = () => {
    if (month + 1 > 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };
  const prevDate = () => {
    if (month - 1 < 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  useEffect(() => {
    setDays(getAllMonthDays(year, month));
  }, [month]);

  return (
    <>
      <div className="wrapper">
        <Navbar subpage="CALENDAR" />
        <div className="content" style={{ flexDirection: "column" }}>
          <DateControls year={year} month={month} nextClick={nextDate} prevClick={prevDate} />
          <div className="calendar">
            {daysName.map((day, i) => (
              <div
                key={i}
                className="calendar_dayname"
                style={{
                  gridColumn: i + 1,
                  gridRow: 1,
                }}>
                {daysName[i]}
              </div>
            ))}
            {days.map((day: Date, i) => {
              return <DayBox key={i} day={day} year={year} month={month} tasks={tasks} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
