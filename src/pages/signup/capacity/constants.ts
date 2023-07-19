import { DisplayText } from "./types";

const DISPLAY_TEXT_MAP: DisplayText = {
  0: "0병 ~ 0.5병",
  1: "0.5병 ~ 1병",
  2: "1.5병 ~ 2병",
  3: "2.5병 ~ 3병",
  4: "3병이상",
};

const SLIDER_MIN_VALUE = 0;
const SLIDER_MAX_VALUE = Object.keys(DISPLAY_TEXT_MAP).length - 1;
const STEP = 1;

export { DISPLAY_TEXT_MAP, SLIDER_MIN_VALUE, SLIDER_MAX_VALUE, STEP };
