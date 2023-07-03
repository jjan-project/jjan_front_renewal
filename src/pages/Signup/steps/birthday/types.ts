import { SelectOption } from "../../../../../components/select";

export type BirthdaySelectOption = SelectOption<number>;
export type BirthdayState = {
  year: BirthdaySelectOption;
  month: BirthdaySelectOption;
  day: BirthdaySelectOption;
};
