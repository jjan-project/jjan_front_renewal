const formatToKoreanDateTime = (dateStr: string) => {
  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  const [date, time] = dateStr.split(" ");
  const [year, month, day] = date.split("/").map(Number);
  const [hour, minute] = time.split(":").map(Number);

  const amPm = hour >= 12 ? "오후" : "오전";
  const formattedHour = hour > 12 ? hour - 12 : hour;

  return `${year}년 ${
    months[month - 1]
  } ${day}일 ${amPm} ${formattedHour}시 ${minute}분`;
};

const formatToKoreanTime = (dateStr: string) => {
  const [date, time] = dateStr.split(" ");
  const [, ,] = date.split("-");
  const [hour, minute] = time.split(":").map(Number);

  const amPm = hour >= 12 ? "오후" : "오전";
  const formattedHour = hour > 12 ? hour - 12 : hour;
  return `${amPm} ${formattedHour}시 ${minute}분`;
};

export { formatToKoreanDateTime, formatToKoreanTime };
