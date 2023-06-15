import React, { useState, ReactNode } from "react";

type StepProps = {
  name: string;
  children: ReactNode;
};

type StepComponent = ({ name, children }: StepProps) => JSX.Element;

type FunnelBaseProps = { children: ReactNode[] };

type FunnelBaseComponent = ({ children }: FunnelBaseProps) => JSX.Element;

type FunnelType = FunnelBaseComponent & {
  Step: StepComponent;
};

type UseFunnelReturn = {
  Funnel: FunnelType;
  onNextStep: () => void;
};

function useFunnel(stepNames: string[]): UseFunnelReturn {
  const isDev = import.meta.env.DEV;
  const Dev = () => {
    return (
      <div>
        <small>개발용 이동버튼 : </small>
        {stepNames.map((name, i) => (
          <button key={i} onClick={() => setStep(name)}>
            {name}
          </button>
        ))}
      </div>
    );
  };

  type stepNamesUnion = (typeof stepNames)[number];
  const [step, setStep] = useState<stepNamesUnion>(stepNames[0]);

  const onNextStep = () => {
    const index = stepNames.indexOf(step);
    const nextStepName = stepNames[index + 1];
    if (index < stepNames.length - 1) {
      setStep(nextStepName);
    }
  };

  const Step: StepComponent = ({ name, children }) => {
    return <>{step === name && <>{children}</>}</>;
  };

  const FunnelBase: FunnelBaseComponent = ({ children }) => {
    return (
      <>
        {children}
        {isDev && <Dev />}
      </>
    );
  };

  const Funnel = Object.assign(FunnelBase, { Step });

  return { Funnel, onNextStep };
}

export default useFunnel;
