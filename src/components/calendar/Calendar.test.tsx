import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, vi, beforeEach } from "vitest";

import { Calendar } from "./";

describe("Calendar 컴포넌트", () => {
  let currentDate = new Date();
  let setSelectedDay = vi.fn();

  beforeEach(() => {
    currentDate = new Date();

    setSelectedDay = vi.fn();
    render(
      <Calendar
        selectedDay={null}
        setSelectedDay={setSelectedDay}
        isNextMonth
        isPrevMonth
      />,
    );
  });

  const buildExpectedMonthText = (currentDate: Date) => {
    return `${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월`;
  };

  test("현재의 년,월 정보가 표시되어야합니다.", () => {
    const expectedMonthText = buildExpectedMonthText(currentDate);

    const currentMonth = screen.getByText(expectedMonthText);
    expect(currentMonth).toBeInTheDocument();
  });

  test("캘린더 상단에 요일 정보가 일~토 까지 순서대로 존재해야합니다.", () => {
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const calendarHead = screen.getAllByTestId("calendarHead");

    calendarHead.forEach((head, index) => {
      const dayOfWeek = head.textContent;
      const isSameDayOfWeek = daysOfWeek[index] === dayOfWeek;
      expect(isSameDayOfWeek).toBe(true);
    });
  });

  test("오늘 이후 날짜를 클릭하면 setSelectedDay 함수가 호출되어야 합니다.", () => {
    const toDay = currentDate.getDate();
    const toDayCells = screen.queryAllByRole("cell", {
      name: new RegExp(`${toDay}`, "i"),
    });
    const toDayCell = toDayCells.find(el => el.classList.contains("futureDay"));

    if (toDayCell) {
      fireEvent.click(toDayCell);
    }
    expect(setSelectedDay).toHaveBeenCalled();
  });

  test("오늘 이전 날짜를 클릭하면 setSelectedDay 함수가 호출되지 않아야 합니다.", () => {
    const yesterDay = currentDate.getDate() - 1;

    const yesterDayCells = screen.queryAllByRole("cell", {
      name: new RegExp(`${yesterDay}`, "i"),
    });
    const yesterDayCell = yesterDayCells.find(el =>
      el.classList.contains("prevDay"),
    );

    if (yesterDayCell) {
      fireEvent.click(yesterDayCell);
    }
    expect(setSelectedDay).not.toHaveBeenCalled();
  });

  test("이전 달 버튼을 클릭하면 이전 달로 이동해야 합니다.", () => {
    const prevButton = screen.getByTestId("prevMonth");
    fireEvent.click(prevButton);

    const prevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0,
    );

    const expectedMonthText = buildExpectedMonthText(prevMonth);

    const currentMonth = screen.getByText(expectedMonthText);
    expect(currentMonth).toBeInTheDocument();
  });

  test("다음 달 버튼을 클릭하면 다음 달로 이동해야 합니다.", () => {
    const nextButton = screen.getByTestId("nextMonth");
    fireEvent.click(nextButton);

    const nextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 2,
      0,
    );

    const expectedMonthText = buildExpectedMonthText(nextMonth);

    const currentMonth = screen.getByText(expectedMonthText);
    expect(currentMonth).toBeInTheDocument();
  });
});
