export interface ErrorOption {
  message: string;
  name: string;
  code: number;
  detailMessage?: string;
  fixText?: string;
  func?: () => void;
}
