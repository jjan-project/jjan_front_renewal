import { CheckBox } from "@/components/checkBox";
import { Flex } from "@/components/flex";

interface LabelCheckBoxProps {
  label: string;
  id: string;
  isChecked: boolean;
  onToggle: (checked: boolean) => void;
}

const LabelCheckBox = ({
  label,
  id,
  isChecked,
  onToggle,
}: LabelCheckBoxProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onToggle(event.target.checked);
  };

  return (
    <Flex alignItems="center" gap="10px">
      <CheckBox
        id={`checkbox${id}`}
        isChecked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor={`checkbox${id}`}>{label}</label>
    </Flex>
  );
};

export { LabelCheckBox };
