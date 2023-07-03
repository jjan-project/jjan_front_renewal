import { useState } from "react";

const useProgressBar = (initialStep: number, maxStep: number) => {
  const [step, setStep] = useState<number>(initialStep);

  const setGaugeUp = () => {
    setStep(prevStep => (prevStep < maxStep - 1 ? prevStep + 1 : prevStep));
  };

  const setGaugeDown = () => {
    setStep(prevStep => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  const setTargetGauge = (step: number) => {
    setStep(step);
  };

  return { step, setGaugeUp, setGaugeDown, setTargetGauge };
};

export default useProgressBar;
