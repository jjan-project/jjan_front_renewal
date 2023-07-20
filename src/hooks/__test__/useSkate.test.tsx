import { render, fireEvent } from "@testing-library/react";

import useSkate from "../useSkate";

const COMPONENT_NAMES = {
  FIRST: "첫 번째",
  SECOND: "두 번째",
  THIRD: "세 번째",
};

const TestComponent = () => {
  const { Skate, setSkateStep } = useSkate(Object.values(COMPONENT_NAMES));

  return (
    <div>
      <button
        data-testid="1 버튼"
        onClick={() => setSkateStep(COMPONENT_NAMES.FIRST)}
      />
      <button
        data-testid="2 버튼"
        onClick={() => setSkateStep(COMPONENT_NAMES.SECOND)}
      />
      <button
        data-testid="3 버튼"
        onClick={() => setSkateStep(COMPONENT_NAMES.THIRD)}
      />

      <Skate>
        <Skate.Step name={COMPONENT_NAMES.FIRST}>
          <p>첫 번째 컴포넌트입니다.</p>
        </Skate.Step>
        <Skate.Step name={COMPONENT_NAMES.SECOND}>
          <p>두 번째 컴포넌트입니다.</p>
        </Skate.Step>
        <Skate.Step name={COMPONENT_NAMES.THIRD}>
          <p>세 번째 컴포넌트입니다.</p>
        </Skate.Step>
      </Skate>
    </div>
  );
};

describe("useSkate 테스트", () => {
  it("첫 마운트 때 '첫 번째 컴포넌트입니다.' 텍스트가 있는지 확인", () => {
    const { getByText } = render(<TestComponent />);
    expect(getByText("첫 번째 컴포넌트입니다.")).toBeInTheDocument();
  });

  it("1 버튼을 클릭하면 '첫 번째 컴포넌트입니다.' 텍스트가 보이는지 확인", () => {
    const { getByText, getByTestId } = render(<TestComponent />);
    fireEvent.click(getByTestId("1 버튼"));
    expect(getByText("첫 번째 컴포넌트입니다.")).toBeInTheDocument();
  });

  it("2 버튼을 클릭하면 '두 번째 컴포넌트입니다.' 텍스트가 보이는지 확인", () => {
    const { getByText, getByTestId } = render(<TestComponent />);
    fireEvent.click(getByTestId("2 버튼"));
    expect(getByText("두 번째 컴포넌트입니다.")).toBeInTheDocument();
  });

  it("3 버튼을 클릭하면 '세 번째 컴포넌트입니다.' 텍스트가 보이는지 확인", () => {
    const { getByText, getByTestId } = render(<TestComponent />);
    fireEvent.click(getByTestId("3 버튼"));
    expect(getByText("세 번째 컴포넌트입니다.")).toBeInTheDocument();
  });
});
