export function generateTimeIncrements() {
  const currentTime = new Date();
  const timeArray = [];

  const currentTimeIncrement = new Date(currentTime);
  const today = currentTimeIncrement.getDay();
  const tomorrow = today + 1;

  while (currentTimeIncrement.getDay() < tomorrow) {
    let hours = String(currentTimeIncrement.getHours()).padStart(2, "0");
    let minutes = String(
      Math.ceil(currentTimeIncrement.getMinutes() / 10) * 10,
    ).padStart(2, "0");

    if (minutes === "60") {
      hours = String((+hours + 1) % 24);
      minutes = "00";
    }

    timeArray.push(`${hours}:${minutes}`);

    currentTimeIncrement.setMinutes(currentTimeIncrement.getMinutes() + 10);
  }
  return timeArray;
}
