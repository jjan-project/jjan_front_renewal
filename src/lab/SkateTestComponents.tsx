import { ProgressBar } from "@/components/progressbar";
import useProgressBar from "@/components/progressbar/useProgressBar";
import useSkate from "@/hooks/useSkate";

const COMPONENT_NAMES = {
  FIRST: "첫 번째",
  SECOND: "두 번째",
  THIRD: "세 번째",
};

const SkateTestComponents = () => {
  const componentsLen = Object.keys(COMPONENT_NAMES).length;
  const { step, setGaugeUp, setGaugeDown } = useProgressBar(1, componentsLen);

  const { Skate, setSkateStep } = useSkate(Object.values(COMPONENT_NAMES));

  const onProgressBar = (nextStep: number) => {
    const diff = Math.abs(nextStep - step);
    if (nextStep > step) {
      for (let i = 0; i < diff; i++) {
        setGaugeUp();
      }
    }

    if (nextStep < step) {
      for (let i = 0; i < diff; i++) {
        setGaugeDown();
      }
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          setSkateStep(COMPONENT_NAMES.FIRST);
          onProgressBar(1);
        }}
      >
        첫 번째 컴포넌트 보기
      </button>
      <button
        onClick={() => {
          setSkateStep(COMPONENT_NAMES.SECOND);
          onProgressBar(2);
        }}
      >
        두 번째 컴포넌트 보기
      </button>
      <button
        onClick={() => {
          setSkateStep(COMPONENT_NAMES.THIRD);
          onProgressBar(3);
        }}
      >
        세 번째 컴포넌트 보기
      </button>
      <hr></hr>
      <ProgressBar curStep={step} totalSteps={componentsLen} />
      <Skate>
        <Skate.Step name={COMPONENT_NAMES.FIRST}>
          <p>첫 번째 컴포넌트입니다.</p>
        </Skate.Step>
        <Skate.Step name={COMPONENT_NAMES.SECOND}>
          <p>두 번째 컴포넌트입니다.</p>
        </Skate.Step>
        <Skate.Step name={COMPONENT_NAMES.THIRD}>
          <p>세 번째 컴포넌트입니다.</p>
        </Skate.Step>
      </Skate>
    </div>
  );
};

export default SkateTestComponents;
