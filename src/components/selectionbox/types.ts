type SelectionboxProps = {
  options: string[];
  defaultValues?: Set<string>;
  onChange?: (values: string[]) => void;
};

export type { SelectionboxProps };
