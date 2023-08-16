// 필요한 라이브러리와 스타일시트를 import합니다.
import React, { useState } from "react";
import "./Calendar.css";

import type { CalendarProps } from "./types";

const Calendar = ({
  selectedDay,
  setSelectedDay,
  isPrevMonth,
  isNextMonth,
}: CalendarProps) => {
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isSameDay = (toDay: Date, compareDay?: Date | null) => {
    if (
      toDay.getFullYear() === compareDay?.getFullYear() &&
      toDay.getMonth() === compareDay?.getMonth() &&
      toDay.getDate() === compareDay?.getDate()
    ) {
      return true;
    }
    return false;
  };

  const onClickDay = (day: Date) => {
    if (isSameDay(day, selectedDay)) {
      setSelectedDay(null);
    } else {
      setSelectedDay(day);
    }
  };

  const prevCalendar = () => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() - 1,
        currentMonth.getDate(),
      ),
    );
  };

  const nextCalendar = () => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        currentMonth.getDate(),
      ),
    );
  };

  const buildCalendarDays = () => {
    const curMonthStartDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1,
    ).getDay();
    const curMonthEndDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0,
    );
    const prevMonthEndDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      0,
    );
    const nextMonthStartDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      1,
    );
    const days: Date[] = Array.from({ length: curMonthStartDate }, (_, i) => {
      return new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() - 1,
        prevMonthEndDate.getDate() - i,
      );
    }).reverse();

    days.push(
      ...Array.from(
        { length: curMonthEndDate.getDate() },
        (_, i) =>
          new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1),
      ),
    );

    const remainingDays = 7 - (days.length % 7);
    if (remainingDays < 7) {
      days.push(
        ...Array.from(
          { length: remainingDays },
          (_, i) =>
            new Date(
              nextMonthStartDate.getFullYear(),
              nextMonthStartDate.getMonth(),
              i + 1,
            ),
        ),
      );
    }
    return days;
  };

  const buildCalendarTag = (calendarDays: Date[]) => {
    return calendarDays.map((day: Date, i: number) => {
      if (day.getMonth() < currentMonth.getMonth()) {
        return (
          <td key={i} className="prevMonthDay">
            {isPrevMonth ? day.getDate() : ""}
          </td>
        );
      }
      if (day.getMonth() > currentMonth.getMonth()) {
        return (
          <td key={i} className="nextMonthDay">
            {isNextMonth ? day.getDate() : ""}
          </td>
        );
      }
      if (day < today) {
        return (
          <td key={i} className="prevDay">
            {day.getDate()}
          </td>
        );
      }
      return (
        <td
          key={i}
          className={`futureDay ${isSameDay(day, selectedDay) && "choiceDay"}`}
          onClick={() => onClickDay(day)}
        >
          {day.getDate()}
        </td>
      );
    });
  };

  const divideWeek = (calendarTags: JSX.Element[]) => {
    return calendarTags.reduce(
      (acc: JSX.Element[][], day: JSX.Element, i: number) => {
        if (i % 7 === 0) acc.push([day]);
        else acc[acc.length - 1].push(day);
        return acc;
      },
      [],
    );
  };

  const calendarDays = buildCalendarDays();
  const calendarTags = buildCalendarTag(calendarDays);
  const calendarRows = divideWeek(calendarTags);

  return (
    <div className="calendar">
      <div className="calendarNav">
        <span className="calendarNav-title">
          {currentMonth.getFullYear()}년 {currentMonth.getMonth() + 1}월
        </span>
        <div className="calendarNav-button">
          <button
            data-testid="prevMonth"
            onClick={prevCalendar}
            className="prevMonth-button"
          >
            &lt;
          </button>
          <button
            data-testid="nextMonth"
            onClick={nextCalendar}
            className="nextMonth-button"
          >
            &gt;
          </button>
        </div>
      </div>
      <table
        style={{
          width: "100%",
        }}
      >
        <thead>
          <tr>
            {daysOfWeek.map((day, i) => (
              <th
                key={i}
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  lineHeight: "36px",
                }}
                data-testid="calendarHead"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendarRows.map((row: JSX.Element[], i: number) => (
            <tr
              key={i}
              style={{
                fontSize: "13px",
                fontWeight: 400,
                lineHeight: "36px",
              }}
            >
              {row}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
