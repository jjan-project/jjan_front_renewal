import { useState } from "react";

const useProgressBar = (initialStep: number, maxStep: number) => {
  if (initialStep < 0) {
    throw new Error("Initial step cannot be negative.");
  }

  if (maxStep < 0) {
    throw new Error("Max step cannot be negative.");
  }

  if (maxStep < initialStep) {
    throw new Error("Max step cannot be less than initial step.");
  }

  const [step, setStep] = useState<number>(initialStep);

  const setGaugeUp = () => {
    setStep(prevStep => (prevStep < maxStep ? prevStep + 1 : prevStep));
  };

  const setGaugeDown = () => {
    setStep(prevStep => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  return { step, setGaugeUp, setGaugeDown };
};

export default useProgressBar;
