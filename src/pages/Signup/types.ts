export interface SignupStepProps {
  curStep: number;
  maxStep: number;
  onNextStep: () => void;
  onPrevStep: () => void;
}
