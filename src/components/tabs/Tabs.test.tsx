import { render, fireEvent } from "@testing-library/react";
import { ReactNode } from "react";

import { Tabs } from "./Tabs";

const NAME = {
  FIRST: "짠 모임",
  SECOND: "나의 모임",
  THIRD: "Test",
};

const CONTENTS = {
  FIRST: `짠 모임 콘텐츠`,
  SECOND: "나의 모임 콘텐츠",
  THIRD: "Test 콘텐츠",
};

type TestProps = {
  defaultName?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

const TestComponent = ({
  defaultName = NAME.FIRST,
  leftIcon,
  rightIcon,
}: TestProps) => {
  return (
    <Tabs defaultName={defaultName} appearance="primary">
      <Tabs.List>
        <Tabs.Tab name={NAME.FIRST}>{NAME.FIRST}</Tabs.Tab>
        <Tabs.Tab isDisable name={NAME.SECOND}>
          {NAME.SECOND}
        </Tabs.Tab>
        <Tabs.Tab name={NAME.THIRD} leftIcon={leftIcon} rightIcon={rightIcon}>
          {NAME.THIRD}
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel name={NAME.FIRST}>{CONTENTS.FIRST}</Tabs.Panel>
      <Tabs.Panel name={NAME.SECOND}>{CONTENTS.SECOND}</Tabs.Panel>
      <Tabs.Panel name={NAME.THIRD}>{CONTENTS.THIRD}</Tabs.Panel>
    </Tabs>
  );
};

describe("Tabs component", () => {
  it("renders Tabs correctly", () => {
    const { getByText } = render(<TestComponent />);

    expect(getByText(NAME.FIRST)).toBeInTheDocument();
    expect(getByText(NAME.SECOND)).toBeInTheDocument();
    expect(getByText(NAME.THIRD)).toBeInTheDocument();
  });

  it("changes active tab on click", () => {
    const { getByText } = render(<TestComponent />);

    fireEvent.click(getByText(NAME.THIRD));
    expect(getByText(CONTENTS.THIRD)).toBeInTheDocument();
  });

  it("isDisable apply", () => {
    const { getByText } = render(<TestComponent />);

    fireEvent.click(getByText(NAME.SECOND));
    expect(getByText(CONTENTS.FIRST)).toBeInTheDocument();
  });

  it("defaultName apply", () => {
    const { getByText } = render(<TestComponent defaultName={NAME.SECOND} />);

    expect(getByText(CONTENTS.SECOND)).toBeInTheDocument();
  });

  it("icon apply", () => {
    const LeftIcon = () => <span>Left</span>;
    const RightIcon = () => <span>Right</span>;
    const { getByText } = render(
      <TestComponent
        defaultName={NAME.SECOND}
        leftIcon={<LeftIcon />}
        rightIcon={<RightIcon />}
      />,
    );

    expect(getByText("Left")).toBeInTheDocument();
    expect(getByText("Right")).toBeInTheDocument();
  });
});
