import { Meta, StoryObj } from "@storybook/react";

import { EmblaCarousel } from "../EmblaCarousel";
import { EmblaCarouselPropType } from "../types";

import {
  defaultArgTypes,
  defaultArgs,
  autoplayArgTypes,
  autoplayArgs,
} from "./EmblaCarouselMeta";

const meta: Meta<typeof EmblaCarousel> = {
  title: "Carousel/EmblaCarousel",
  component: EmblaCarousel,
  argTypes: { ...defaultArgTypes },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: { ...defaultArgs },
};

export default meta;

type Story = StoryObj<typeof EmblaCarousel>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Default: Story = (args: EmblaCarouselPropType) => {
  const { images, prevIcon, nextIcon, ...rest } = args;

  return <EmblaCarousel {...{ images, prevIcon, nextIcon }} options={rest} />;
};

export const Autoplay: Story = (args: EmblaCarouselPropType) => {
  const {
    images,
    prevIcon,
    nextIcon,
    delay,
    jump,
    playOnInit,
    stopOnInteraction,
    stopOnMouseEnter,
    stopOnLastSnap,
    ...rest
  } = args;

  const autoplayOptions = {
    delay,
    jump,
    playOnInit,
    stopOnInteraction,
    stopOnMouseEnter,
    stopOnLastSnap,
  };

  return (
    <EmblaCarousel
      {...{ images, prevIcon, nextIcon }}
      autoplayOptions={autoplayOptions}
      options={rest}
    />
  );
};

Autoplay.argTypes = { ...autoplayArgTypes };
Autoplay.args = { ...autoplayArgs };
