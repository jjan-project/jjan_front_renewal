// @todo
// util 함수가 SelectOption 타입에 너무 의존적임. 좀 더 추상화해서 공용 util 파일에 분리하는게 좋아보임

function getDaysInMonth(month: number, year: number): number {
  return new Date(year, month, 0).getDate();
}

export function birthdayToDateString(year: number, month: number, day: number) {
  const date = new Date(year, month - 1, day);

  const formattedMonth = `0${date.getMonth() + 1}`.slice(-2);
  const formattedDay = `0${date.getDate()}`.slice(-2);

  return `${date.getFullYear()}-${formattedMonth}-${formattedDay}`;
}

export function getDays(month: number, year: number) {
  const daysInMonth = [];
  for (let i = 1; i <= getDaysInMonth(month, year); i++) {
    daysInMonth.push({ label: `${i}일`, value: i });
  }
  return daysInMonth;
}

export function getYears(startYear: number, endYear: number) {
  const years = [];
  for (let i = endYear; i >= startYear; i--) {
    years.push({ label: `${i}년`, value: i });
  }
  return years;
}

export function getMonths() {
  const months = [];
  for (let i = 1; i <= 12; i++) {
    months.push({ label: `${i}월`, value: i });
  }
  return months;
}
