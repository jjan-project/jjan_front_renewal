import { useState, useEffect } from "react";

import { BirthdayState, BirthdaySelectOption } from "./types";
import { getDays } from "./utils";

type useBirthdayReturn = [
  BirthdayState,
  (value: BirthdaySelectOption, type: string) => void,
];

type useBirthdayArgs = BirthdayState;

function useBirthday(props: useBirthdayArgs): useBirthdayReturn {
  const [birthday, setBirthday] = useState<BirthdayState>(props);

  const handleBirthdayChange = (value: BirthdaySelectOption, type: string) => {
    setBirthday(prev => ({ ...prev, [type]: value }));
  };

  useEffect(() => {
    const maxDays = getDays(birthday.month.value, birthday.year.value).length;
    if (birthday.day.value > maxDays) {
      handleBirthdayChange({ label: `${maxDays}일`, value: maxDays }, "day");
    }
  }, [birthday.year, birthday.month]);

  return [birthday, handleBirthdayChange];
}

export { useBirthday };
