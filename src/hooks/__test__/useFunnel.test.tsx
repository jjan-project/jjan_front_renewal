import { render, fireEvent, waitFor } from "@testing-library/react";

import useFunnel from "../useFunnel";

const NAME = {
  STEP_1: "step1",
  STEP_2: "step2",
  STEP_3: "step3",
};

const TITLE = {
  STEP_1: "Step 1",
  STEP_2: "Step 2",
  STEP_3: "Step 3",
};

type onNextStepType = { onNextStep: () => void };

const Step1 = ({ onNextStep }: onNextStepType) => {
  return (
    <div>
      <p>{TITLE.STEP_1}</p>
      <button onClick={onNextStep}>Next Step</button>
    </div>
  );
};

const Step2 = ({ onNextStep }: onNextStepType) => {
  return (
    <div>
      <p>{TITLE.STEP_2}</p>
      <button onClick={onNextStep}>Next Step</button>
    </div>
  );
};

const Step3 = ({ onNextStep }: onNextStepType) => {
  return (
    <div>
      <p>{TITLE.STEP_3}</p>
      <button onClick={onNextStep}>Next Step</button>
    </div>
  );
};

const TestComponent = () => {
  const { Funnel, onNextStep, onPreviousStep } = useFunnel(Object.values(NAME));

  return (
    <div>
      <Funnel>
        <Funnel.Step name={NAME.STEP_1}>
          <Step1 onNextStep={onNextStep} />
        </Funnel.Step>
        <Funnel.Step name={NAME.STEP_2}>
          <Step2 onNextStep={onNextStep} />
        </Funnel.Step>
        <Funnel.Step name={NAME.STEP_3}>
          <Step3 onNextStep={onNextStep} />
        </Funnel.Step>
      </Funnel>
      <button onClick={onPreviousStep}>Previous</button>
    </div>
  );
};

describe("useFunnel 테스트", () => {
  it("Step 변경 및 Next Step 버튼 테스트", () => {
    const { getByText, queryByText, getByRole } = render(<TestComponent />);

    expect(getByText(TITLE.STEP_1)).toBeInTheDocument();
    expect(queryByText(TITLE.STEP_2)).toBeNull();
    expect(queryByText(TITLE.STEP_3)).toBeNull();

    fireEvent.click(getByRole("button", { name: "Next Step" }));

    expect(getByText(TITLE.STEP_2)).toBeInTheDocument();
    expect(queryByText(TITLE.STEP_1)).toBeNull();
    expect(queryByText(TITLE.STEP_3)).toBeNull();

    fireEvent.click(getByRole("button", { name: "Next Step" }));

    expect(getByText(TITLE.STEP_3)).toBeInTheDocument();
    expect(queryByText(TITLE.STEP_1)).toBeNull();
    expect(queryByText(TITLE.STEP_2)).toBeNull();

    fireEvent.click(getByRole("button", { name: "Next Step" }));

    expect(getByText(TITLE.STEP_3)).toBeInTheDocument();
    expect(queryByText(TITLE.STEP_1)).toBeNull();
    expect(queryByText(TITLE.STEP_2)).toBeNull();
  });

  it("onPreviousStep 버튼 테스트", () => {
    const { getByText, getByRole } = render(<TestComponent />);

    expect(getByText(TITLE.STEP_1)).toBeInTheDocument();
    fireEvent.click(getByRole("button", { name: "Previous" }));
    expect(getByText(TITLE.STEP_1)).toBeInTheDocument();

    fireEvent.click(getByRole("button", { name: "Next Step" }));
    expect(getByText(TITLE.STEP_2)).toBeInTheDocument();

    fireEvent.click(getByRole("button", { name: "Previous" }));
    expect(getByText(TITLE.STEP_1)).toBeInTheDocument();
  });

  it("개발용 이동버튼 테스트", () => {
    const { getByText, getByRole } = render(<TestComponent />);

    const componentsNames = Object.values(NAME);
    const componentsTitles = Object.values(TITLE);

    componentsNames.forEach(async (name, index) => {
      const toggleButton = await waitFor(() =>
        getByRole("small", { name: "Funnel Dev" }),
      );

      fireEvent.click(toggleButton);
      const stepButton = getByRole("button", { name });
      expect(stepButton).toBeInTheDocument();

      fireEvent.click(stepButton);

      const stepTilte = componentsTitles[index];
      expect(getByText(stepTilte)).toBeInTheDocument();
    });
  });
});
