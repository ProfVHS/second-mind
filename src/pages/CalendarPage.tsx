import React, { useState } from "react";
import Navbar from "../components/navbar";
import {
  eachDayOfInterval,
  format,
  getDate,
  getDay,
  getWeekOfMonth,
} from "date-fns";

const dateNow = new Date();

const daysInMonth = (year: number, month: number) =>
  new Date(2023, 4, 0).getDate();

export function CalendarPage() {
  const [year, setYear] = useState<number>(dateNow.getFullYear());
  const [month, setMonth] = useState<number>(dateNow.getMonth());
  const [days, setDays] = useState(
    eachDayOfInterval({
      start: new Date(year, month, 1),
      end: new Date(year, month, daysInMonth(year, month)),
    })
  );
  //new Date(2023, 4, 0).getDate()
  console.log(days);

  return (
    <>
      <div className="wrapper">
        <Navbar subpage="CALENDAR" />
        <div className="content" style={{ flexDirection: "column" }}>
          <span className="calendar_date">
            ( {year} {format(new Date(year, month, 1), "LLLL")} )
          </span>
          <div className="calendar">
            {days.map((day, i) => (
              <div
                className="calendar_day"
                style={{
                  gridColumn: getDay(day) === 0 ? 7 : getDay(day),
                  gridRow: getWeekOfMonth(day, { weekStartsOn: 1 }),
                }}
              >
                {getDate(day)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
