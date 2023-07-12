import { AutoplayOptionsType } from "embla-carousel-autoplay";
import { EmblaOptionsType } from "embla-carousel-react";

type EmblaCarouselPropType = {
  images: string[];
  prevIcon?: JSX.Element;
  nextIcon?: JSX.Element;
  options?: EmblaOptionsType;
  autoplayOptions?: AutoplayOptionsType;
} & EmblaOptionsType &
  AutoplayOptionsType;

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
