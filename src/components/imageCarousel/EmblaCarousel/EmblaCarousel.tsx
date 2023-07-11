import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";

import "./EmblaCarousel.css";

import { DotButton, PrevButton, NextButton } from "./ArrowsDotsButtons";
import { handlePluginsArr } from "./plugins";
import type { EmblaCarouselPropType } from "./types";

const EmblaCarousel = (props: EmblaCarouselPropType) => {
  const { images, options = {}, prevIcon, nextIcon, autoplayOptions } = props;

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    options,
    handlePluginsArr({ autoplayOptions }),
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="sandbox">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {images.map((imageSrc, index) => (
              <div className="embla__slide" key={index}>
                <img
                  className="embla__slide__img"
                  src={imageSrc}
                  alt="slide img"
                />
              </div>
            ))}
          </div>

          {prevIcon && nextIcon && (
            <>
              <PrevButton
                onClick={scrollPrev}
                icon={prevIcon}
                enabled={prevBtnEnabled}
              />
              <NextButton
                onClick={scrollNext}
                icon={nextIcon}
                enabled={nextBtnEnabled}
              />
            </>
          )}

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                selected={index === selectedIndex}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { EmblaCarousel };
