import { getYears } from "./utils";

const YEAR_RANGE = 107;
const ADULT_AGE = 19;
const CURRNET_YEAR = new Date().getFullYear();
const START_YEAR = CURRNET_YEAR - ADULT_AGE - YEAR_RANGE;
const END_YEAR = CURRNET_YEAR - ADULT_AGE;
const YEARS = getYears(START_YEAR, END_YEAR);

export { YEARS };
