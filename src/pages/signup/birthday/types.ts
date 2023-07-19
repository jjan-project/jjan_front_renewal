import type { SelectOption } from "@/components/select";

type BirthdaySelectOption = SelectOption<number>;
type BirthdayState = {
  year: BirthdaySelectOption;
  month: BirthdaySelectOption;
  day: BirthdaySelectOption;
};

export type { BirthdayState, BirthdaySelectOption };
