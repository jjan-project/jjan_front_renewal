import { BaseTest } from "../types/base";

type ProgressBarProps = {
  /**
   * The current progress value, indicating how far along the bar is filled.
   */
  curStep: number;
  /**
   * The total number of steps or stages, representing the full extent of the progress bar.
   */
  totalSteps: number;
} & BaseTest;

export type { ProgressBarProps };
