import { useState, ReactNode } from "react";

type SkateProps = {
  name: string;
  children: ReactNode;
};

type SkateComponent = ({ name, children }: SkateProps) => JSX.Element;

type SkateBaseProps = { children: ReactNode[] };

type SkateBaseComponent = ({ children }: SkateBaseProps) => JSX.Element;

type SkateType = SkateBaseComponent & {
  Step: SkateComponent;
};

type UseSkateReturn = {
  Skate: SkateType;
  setSkateStep: (stepName: string) => void;
};

function useSkate(stepNames: string[]): UseSkateReturn {
  type stepNamesUnion = (typeof stepNames)[number];
  const [skateStep, setSkateStep] = useState<stepNamesUnion>(stepNames[0]);

  const Step: SkateComponent = ({ name, children }) => {
    return <>{skateStep === name && <>{children}</>}</>;
  };

  const SkateBase: SkateBaseComponent = ({ children }) => {
    return <>{children}</>;
  };

  const Skate = Object.assign(SkateBase, { Step });

  return { Skate, setSkateStep };
}

export default useSkate;
