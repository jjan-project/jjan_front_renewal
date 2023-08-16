import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

const terms = [
  "외향적인",
  "내향적인",
  "술꾼들",
  "알쓰",
  "시끄러운",
  "조용한",
  "친구끼리",
  "소통",
  "칵테일바",
  "파티룸",
  "와인바",
  "술집",
  "미팅",
  "소주",
  "맥주",
  "대학생",
  "직장인",
  "친해져요",
];

export const Default: Story = {
  render: () => {
    const [selectedValues, setSelectedValues] = useState<Set<string>>(
      new Set(),
    );

    const handleCheckboxGroupChange = (selectedValues: string[]) => {
      setSelectedValues(new Set(selectedValues));
    };

    return (
      <>
        <Checkbox options={terms} onChange={handleCheckboxGroupChange} />
        <h1>selected:</h1>
        {Array.from(selectedValues).map(value => (
          <p key={value}>{value}</p>
        ))}
      </>
    );
  },
};
