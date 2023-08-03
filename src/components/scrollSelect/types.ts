export interface ScrollPickerProps {
  list: (string | number)[];
  width?: number;
  height: number;
  onSelectedChange?: (selected: string | number) => void;
}
