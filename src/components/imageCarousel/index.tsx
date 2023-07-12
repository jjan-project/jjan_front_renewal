import { EmblaOptionsType } from "embla-carousel-react";

import { EmblaCarousel } from "./EmblaCarousel";
import type { ImageCarouselPropType } from "./types";

const ImageCarousel = (props: ImageCarouselPropType<EmblaOptionsType>) => {
  const { type, ...otherProps } = props;

  switch (type) {
    case "primary":
      return <EmblaCarousel {...otherProps} />;
    case "secondary":
      return null;
    default:
      return <EmblaCarousel {...otherProps} />;
  }
};

export { ImageCarousel };
