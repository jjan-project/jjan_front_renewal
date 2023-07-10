import { EmblaOptionsType } from "embla-carousel-react";

type EmblaCarouselPropType = {
  images: string[];
  prevIcon?: JSX.Element;
  nextIcon?: JSX.Element;
  options?: EmblaOptionsType;
} & EmblaOptionsType;

type DotButtonPropType = {
  selected: boolean;
  onClick: () => void;
};

type PrevNextButtonPropType = {
  enabled: boolean;
  icon: JSX.Element;
  onClick: () => void;
};

export type {
  EmblaCarouselPropType,
  DotButtonPropType,
  PrevNextButtonPropType,
};
