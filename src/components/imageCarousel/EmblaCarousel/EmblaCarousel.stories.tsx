import { Meta, StoryObj } from "@storybook/react";
import { IconChevronLeftSmall, IconChevronRightSmall } from "jjan-icon";

import { EmblaCarousel } from "./EmblaCarousel";
import { EmblaCarouselPropType } from "./types";

const meta: Meta<typeof EmblaCarousel> = {
  title: "Carousel/EmblaCarousel",
  component: EmblaCarousel,
  argTypes: {
    images: { table: { disable: true } },
    prevIcon: { table: { disable: true } },
    nextIcon: { table: { disable: true } },
    options: { table: { disable: true } },
    active: {
      control: { type: "boolean" },
      description:
        "캐러셀을 활성화 또는 비활성화합니다. 미디어 쿼리에 따라 캐러셀을 활성화/비활성화하려는 경우 유용합니다.",
    },
    align: {
      control: { type: "radio" },
      options: ["start", "center"],
      description: "캐러셀 뷰포트에 대한 슬라이드 정렬을 조절합니다.",
    },
    axis: {
      control: { type: "radio" },
      options: ["x", "y"],
      description:
        "x와 y 사이의 스크롤 축을 선택합니다. 이 옵션에 맞게 CSS를 사용하여 슬라이드를 수평 또는 수직으로 쌓아야 합니다.",
    },
    breakpoints: { table: { disable: true } },
    container: { table: { disable: true } },
    containScroll: {
      control: { type: "radio" },
      options: [false, "trimSnaps", "keepSnaps"],
      description:
        "과도한 스크롤을 유발하는 선행 및 후행의 빈 공간을 제거합니다.",
    },
    direction: {
      control: { type: "radio" },
      options: ["ltr", "rtl"],
      description: "ltr와 rtl 사이의 콘텐츠 방향을 선택합니다.",
    },
    dragFree: {
      control: { type: "boolean" },
      description:
        "모멘텀 스크롤링을 활성화합니다. 계속 스크롤하는 동안의 지속 시간은 드래그 제스처의 강도에 비례합니다.",
    },
    dragThreshold: {
      control: { type: "number" },
      description:
        "픽셀 단위의 드래그 임계값입니다. 이는 클릭이 발생하는 시기에만 영향을 미치며, 다른 캐러셀 라이브러리와 달리 캐러셀의 드래그 시작 시점에는 영향을 미치지 않습니다.",
    },
    duration: {
      control: { type: "number" },
      description:
        "API 메소드에 의해 트리거되는 스크롤 지속 시간을 설정합니다.",
    },
    inViewThreshold: {
      control: { type: "number" },
      description: "보이는 슬라이드의 비율을 나타내는 분수를 선택합니다.",
    },
    loop: {
      control: { type: "boolean" },
      description: "무한 루프를 활성화합니다.",
    },
    skipSnaps: {
      control: { type: "boolean" },
      description:
        "캐러셀이 강하게 드래그될 경우 스크롤 스냅을 건너뛸 수 있도록 합니다.",
    },
    slides: { table: { disable: true } },
    slidesToScroll: {
      control: { type: "number" },
      description: "한 번에 스크롤할 슬라이드의 수를 설정합니다.",
    },
    startIndex: {
      control: { type: "number" },
      description: "캐러셀이 시작할 슬라이드의 인덱스를 설정합니다.",
    },
    watchDrag: {
      control: { type: "boolean" },
      description: "드래그 이벤트를 감지하도록 설정합니다.",
    },
    watchResize: {
      control: { type: "boolean" },
      description: "리사이즈 이벤트를 감지하도록 설정합니다.",
    },
    watchSlides: {
      control: { type: "boolean" },
      description: "슬라이드 변경을 감지하도록 설정합니다.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof EmblaCarousel>;

export const Default: Story = (args: EmblaCarouselPropType) => {
  const { images, prevIcon, nextIcon, ...rest } = args;
  return (
    <EmblaCarousel
      images={images}
      prevIcon={prevIcon}
      nextIcon={nextIcon}
      options={rest}
    />
  );
};

Default.args = {
  images: [
    "/imageCaroselTestImg/carousel1.jpeg",
    "/imageCaroselTestImg/carousel2.jpeg",
    "/imageCaroselTestImg/carousel3.jpeg",
    "/imageCaroselTestImg/carousel4.jpeg",
    "/imageCaroselTestImg/carousel5.jpeg",
  ],
  prevIcon: <IconChevronLeftSmall />,
  nextIcon: <IconChevronRightSmall />,
  active: true,
  align: "center",
  axis: "x",
  containScroll: "trimSnaps",
  direction: "ltr",
  dragFree: false,
  dragThreshold: 10,
  duration: 25,
  inViewThreshold: 0,
  loop: false,
  skipSnaps: false,
  slidesToScroll: 1,
  startIndex: 0,
  watchDrag: true,
  watchResize: true,
  watchSlides: true,
};
