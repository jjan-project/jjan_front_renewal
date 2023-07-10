import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Calendar from "./Calendar";

const meta: Meta<typeof Calendar> = {
  title: "Calendar",
  component: Calendar,
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: () => {
    const [selectedDay, setSelectedDay] = useState<Date | null>(null);
    return (
      <Calendar selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
    );
  },
};

export const FullMonthCalendar: Story = {
  render: () => {
    const [selectedDay, setSelectedDay] = useState<Date | null>(null);
    return (
      <Calendar
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        isPrevMonth
        isNextMonth
      />
    );
  },
};
