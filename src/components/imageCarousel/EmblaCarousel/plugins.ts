import { AutoplayOptionsType } from "embla-carousel-autoplay";
import Autoplay from "embla-carousel-autoplay";

type handlePluginsArrPropsType = {
  autoplayOptions: AutoplayOptionsType | undefined;
};

const handlePluginsArr = ({ autoplayOptions }: handlePluginsArrPropsType) => {
  const emblaPlugins = [];
  if (autoplayOptions !== undefined) {
    emblaPlugins.push(Autoplay(handleAutoplayOptions(autoplayOptions)));
  }
  return emblaPlugins;
};

/**
 * AutoplayOptionsType 객체를 받아서 기본 값과 병합합니다.
 *
 * @param {AutoplayOptionsType} props - Autoplay 옵션 객체.
 * @property {number} delay - 슬라이드 간 전환 지연시간(밀리초). 기본값은 4000.
 * @property {boolean} jump - 슬라이드 전환시 즉시 전환하는지 여부. 기본값은 false.
 * @property {boolean} playOnInit - 초기에 자동재생 시작 여부. 기본값은 true.
 * @property {boolean} stopOnInteraction - 드래그 상호작용 이후 자동재생 중지 여부. 기본값은 true.
 * @property {boolean} stopOnMouseEnter - 마우스 포인터가 Embla Carousel 컨테이너에 들어갔을 때 자동재생 중지 여부. 기본값은 false.
 * @property {boolean} stopOnLastSnap - 마지막 슬라이드에 도달했을 때 자동재생 중지 여부. 기본값은 false.
 * @property {(emblaRoot: HTMLElement) => HTMLElement | null} rootNode - 마우스 Enter와 Interaction에 대응하는 노드. 기본값은 null.
 * @returns {AutoplayOptionsType} 병합된 옵션 객체.
 */
const handleAutoplayOptions = (props: AutoplayOptionsType) => {
  const {
    delay = 4000,
    jump = false,
    playOnInit = true,
    stopOnInteraction = true,
    stopOnMouseEnter = false,
    stopOnLastSnap = false,
    rootNode = null,
  } = props;
  return {
    delay,
    jump,
    playOnInit,
    stopOnInteraction,
    stopOnMouseEnter,
    stopOnLastSnap,
    rootNode,
  };
};

export { handlePluginsArr };
