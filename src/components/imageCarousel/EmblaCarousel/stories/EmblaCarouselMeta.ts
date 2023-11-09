import { IconChevronLeftSmall, IconChevronRightSmall } from "jjan-icon";

const DISABLE = { table: { disable: true } };

const Controls = {
  BOOLEAN: { type: "boolean" },
  RADIO: { type: "radio" },
  NUMBER: { type: "number" },
  INLINE_RADIO: { type: "inline-radio" },
  SELECT: { type: "select" },
  CHEKC: { type: "check" },
  MULTI_SELECT: { type: "multi-select" },
  JSON: { type: "object" },
  RANGE: { type: "range" },
  FILE: { type: "file" },
  COLOR: { type: "color" },
  DATE: { type: "date" },
  text: { type: "text" },
};

const Categories = {
  OPTIONS: "options",
  AUTOPLAY: "autoplay options",
};

export const defaultArgTypes = {
  images: DISABLE,
  prevIcon: DISABLE,
  nextIcon: DISABLE,
  options: DISABLE,
  autoplayOptions: DISABLE,
  delay: DISABLE,
  jump: DISABLE,
  playOnInit: DISABLE,
  stopOnInteraction: DISABLE,
  stopOnMouseEnter: DISABLE,
  stopOnLastSnap: DISABLE,
  rootNode: DISABLE,

  active: {
    control: Controls.BOOLEAN,
    table: {
      category: Categories.OPTIONS,
      defaultValue: { summary: true },
    },
    description:
      "캐러셀을 활성화 또는 비활성화합니다. 미디어 쿼리에 따라 캐러셀을 활성화/비활성화하려는 경우 유용합니다.",
  },
  align: {
    control: Controls.INLINE_RADIO,
    options: ["start", "center", "end"],
    table: {
      category: Categories.OPTIONS,
      defaultValue: { summary: "center" },
    },
    description: "캐러셀 뷰포트에 대한 슬라이드 정렬을 조절합니다.",
  },
  axis: {
    control: Controls.INLINE_RADIO,
    options: ["x", "y"],
    table: {
      category: Categories.OPTIONS,
      defaultValue: { summary: "x" },
    },
    description:
      "x와 y 사이의 스크롤 축을 선택합니다. 이 옵션에 맞게 CSS를 사용하여 슬라이드를 수평 또는 수직으로 쌓아야 합니다.",
  },
  breakpoints: DISABLE,
  container: DISABLE,
  containScroll: {
    control: Controls.SELECT,
    options: [false, "trimSnaps", "keepSnaps"],
    table: {
      category: Categories.OPTIONS,
      defaultValue: { summary: "trimSnaps" },
    },
    description:
      "과도한 스크롤을 유발하는 선행 및 후행의 빈 공간을 제거합니다.",
  },
  direction: {
    control: Controls.INLINE_RADIO,
    options: ["ltr", "rtl"],
    table: {
      category: Categories.OPTIONS,
      defaultValue: { summary: "ltr" },
    },
    description: "ltr와 rtl 사이의 콘텐츠 방향을 선택합니다.",
  },
  dragFree: {
    control: Controls.BOOLEAN,
    table: {
      category: Categories.OPTIONS,
      defaultValue: { summary: false },
    },
    description:
      "모멘텀 스크롤링을 활성화합니다. 계속 스크롤하는 동안의 지속 시간은 드래그 제스처의 강도에 비례합니다.",
  },
  dragThreshold: {
    control: Controls.NUMBER,
    table: {
      category: Categories.OPTIONS,
      defaultValue: { summary: 10 },
    },
    description:
      "픽셀 단위의 드래그 임계값입니다. 이는 클릭이 발생하는 시기에만 영향을 미치며, 다른 캐러셀 라이브러리와 달리 캐러셀의 드래그 시작 시점에는 영향을 미치지 않습니다.",
  },
  duration: {
    control: Controls.NUMBER,
    table: {
      category: Categories.OPTIONS,
      defaultValue: { summary: 25 },
    },
    description: "API 메소드에 의해 트리거되는 스크롤 지속 시간을 설정합니다.",
  },
  inViewThreshold: {
    control: Controls.NUMBER,
    table: {
      category: Categories.OPTIONS,
      defaultValue: { summary: 0 },
    },
    description: "보이는 슬라이드의 비율을 나타내는 분수를 선택합니다.",
  },
  loop: {
    control: Controls.BOOLEAN,
    table: {
      category: Categories.OPTIONS,
      defaultValue: { summary: false },
    },
    description: "무한 루프를 활성화합니다.",
  },
  skipSnaps: {
    control: Controls.BOOLEAN,
    table: {
      category: Categories.OPTIONS,
      defaultValue: { summary: false },
    },
    description:
      "캐러셀이 강하게 드래그될 경우 스크롤 스냅을 건너뛸 수 있도록 합니다.",
  },
  slides: DISABLE,
  slidesToScroll: {
    control: Controls.NUMBER,
    table: {
      category: Categories.OPTIONS,
      defaultValue: { summary: 1 },
    },
    description: "한 번에 스크롤할 슬라이드의 수를 설정합니다.",
  },
  startIndex: {
    control: Controls.NUMBER,
    table: {
      category: Categories.OPTIONS,
      defaultValue: { summary: 0 },
    },
    description: "캐러셀이 시작할 슬라이드의 인덱스를 설정합니다.",
  },
  watchDrag: {
    control: Controls.BOOLEAN,
    table: {
      category: Categories.OPTIONS,
      defaultValue: { summary: true },
    },
    description: "드래그 이벤트를 감지하도록 설정합니다.",
  },
  watchResize: {
    control: Controls.BOOLEAN,
    table: {
      category: Categories.OPTIONS,
      defaultValue: { summary: true },
    },
    description: "리사이즈 이벤트를 감지하도록 설정합니다.",
  },
  watchSlides: {
    control: Controls.BOOLEAN,
    table: {
      category: Categories.OPTIONS,
      defaultValue: { summary: true },
    },
    description: "슬라이드 변경을 감지하도록 설정합니다.",
  },
};

export const defaultArgs = {
  images: [
    "/imageCaroselTestImg/carousel1.jpeg",
    "/imageCaroselTestImg/carousel2.jpeg",
    "/imageCaroselTestImg/carousel3.jpeg",
    "/imageCaroselTestImg/carousel4.jpeg",
    "/imageCaroselTestImg/carousel5.jpeg",
  ],
  prevIcon: IconChevronLeftSmall({}),
  nextIcon: IconChevronRightSmall({}),
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

export const autoplayArgTypes = {
  rootNode: DISABLE,
  delay: {
    control: Controls.NUMBER,
    table: {
      disable: false,
      category: Categories.AUTOPLAY,
      defaultValue: { summary: 4000 },
    },
    description: "자동 재생 지연 시간을 설정합니다.",
  },
  jump: {
    control: Controls.BOOLEAN,
    table: {
      disable: false,
      category: Categories.AUTOPLAY,
      defaultValue: { summary: false },
    },
    description: "자동 재생 시에 즉시 슬라이드 전환을 수행합니다.",
  },
  playOnInit: {
    control: Controls.BOOLEAN,
    table: {
      disable: false,
      category: Categories.AUTOPLAY,
      defaultValue: { summary: true },
    },
    description: "초기화시 자동 재생을 시작할지 설정합니다.",
  },
  stopOnInteraction: {
    control: Controls.BOOLEAN,
    table: {
      disable: false,
      category: Categories.AUTOPLAY,
      defaultValue: { summary: true },
    },
    description: "사용자 상호작용 시 자동 재생을 멈출지 설정합니다.",
  },
  stopOnMouseEnter: {
    control: Controls.BOOLEAN,
    table: {
      disable: false,
      category: Categories.AUTOPLAY,
      defaultValue: { summary: false },
    },
    description: "마우스 진입 시 자동 재생을 멈출지 설정합니다.",
  },
  stopOnLastSnap: {
    control: Controls.BOOLEAN,
    table: {
      disable: false,
      category: Categories.AUTOPLAY,
      defaultValue: { summary: false },
    },
    description: "마지막 슬라이드에서 자동 재생을 멈출지 설정합니다.",
  },
};

export const autoplayArgs = {
  delay: 4000,
  jump: false,
  playOnInit: true,
  stopOnInteraction: true,
  stopOnMouseEnter: false,
  stopOnLastSnap: false,
};
