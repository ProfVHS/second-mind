import React, { useState } from "react";
import Navbar from "../components/navbar";
import { eachDayOfInterval, getDate, getDay, getWeekOfMonth } from "date-fns";

const dateNow = new Date();

export function CalendarPage() {
  const [year, setYear] = useState<number>(dateNow.getFullYear());
  const [month, setMonth] = useState<number>(dateNow.getMonth());
  const [days, setDays] = useState(
    eachDayOfInterval({
      start: new Date(2023, 3, 1),
      end: new Date(2023, 3, 30),
    })
  );
  //new Date(2023, 4, 0).getDate()
  console.log(days);

  return (
    <>
      <div className="wrapper">
        <Navbar subpage="CALENDAR" />
        <div className="content">
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
