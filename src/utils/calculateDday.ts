export const calculateDday = (targetDateString: string) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const targetDate = new Date(targetDateString);
  targetDate.setHours(0, 0, 0, 0);

  const diffInMilliseconds = targetDate.getTime() - today.getTime();
  const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);
  return diffInDays;
};
