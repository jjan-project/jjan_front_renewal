type ImageCarouselPropType<T> = {
  type: "primary" | "secondary";
  images: string[];
  prevIcon?: JSX.Element;
  nextIcon?: JSX.Element;
  options?: T;
};

export type { ImageCarouselPropType };
