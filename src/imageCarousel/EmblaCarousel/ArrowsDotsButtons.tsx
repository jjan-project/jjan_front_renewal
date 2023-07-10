import type { DotButtonPropType, PrevNextButtonPropType } from "./types";

export const DotButton = (props: DotButtonPropType) => {
  const { selected, onClick } = props;

  return (
    <button
      className={"embla__dot".concat(selected ? " embla__dot--selected" : "")}
      type="button"
      onClick={onClick}
    />
  );
};

export const PrevButton = (props: PrevNextButtonPropType) => {
  const { enabled, onClick, icon } = props;

  return (
    <button
      className="embla__button embla__button--prev"
      onClick={onClick}
      disabled={!enabled}
    >
      {icon}
    </button>
  );
};

export const NextButton = (props: PrevNextButtonPropType) => {
  const { enabled, onClick, icon } = props;

  return (
    <button
      className="embla__button embla__button--next"
      onClick={onClick}
      disabled={!enabled}
    >
      {icon}
    </button>
  );
};
