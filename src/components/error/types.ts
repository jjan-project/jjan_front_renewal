type ErrorType = {
  message: string;
  detailMessage?: string;
  fixText?: string;
  func?: () => void;
};

export type ErrorComponentProps = {
  resetError: () => void;
  error: ErrorType;
  errorImg?: string;
};
