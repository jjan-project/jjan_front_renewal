import styled from "@emotion/styled";
import { useState, ReactNode } from "react";

const DevButtonContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  bottom: 20px;
  right: 10px;
  background-color: white;
  border: 1px solid black;
  padding: 3px;
  z-index: 1000;
`;

const DevToggleButton = styled.small`
  display: flex;
  justify-content: center;
  margin-top: 3px;
`;

const DevButton = styled.button<{ isVisible: boolean }>`
  margin: 5px;
  display: ${({ isVisible }) => (isVisible ? "inline-block" : "none")};
`;

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
  onPreviousStep: () => void;
};

function useFunnel(stepNames: string[]): UseFunnelReturn {
  const isDev = import.meta.env.DEV;
  const [isDevButtonVisible, setDevButtonVisible] = useState(false);

  const toggleDevButton = () => {
    setDevButtonVisible(!isDevButtonVisible);
  };

  const Dev = () => {
    return (
      <DevButtonContainer onClick={toggleDevButton}>
        {stepNames.map(
          (name, i) =>
            isDevButtonVisible && (
              <DevButton
                key={i}
                isVisible={isDevButtonVisible}
                onClick={() => setStep(name)}
              >
                {name}
              </DevButton>
            ),
        )}
        <DevToggleButton>Funnel Dev</DevToggleButton>
      </DevButtonContainer>
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

  const onPreviousStep = () => {
    const index = stepNames.indexOf(step);
    const nextStepName = stepNames[index - 1];
    if (index > 0) {
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

  return { Funnel, onNextStep, onPreviousStep };
}

export default useFunnel;
