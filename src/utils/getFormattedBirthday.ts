interface Birthday {
  day: { label: string; value: number };
  month: { label: string; value: number };
  year: { label: string; value: number };
}

const getFormattedBirthday = (birthdayObj: Birthday) => {
  const { day, month, year } = birthdayObj;
  return `${year.value}-${month.value.toString().padStart(2, "0")}-${day.value
    .toString()
    .padStart(2, "0")}`;
};

export { getFormattedBirthday };
