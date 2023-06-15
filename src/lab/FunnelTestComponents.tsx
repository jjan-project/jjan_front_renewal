import React, { useEffect, useState } from "react";

import useFunnel from "@/hooks/useFunnel";
import {
  SignupProvider,
  useSignupState,
  useSignupDispatch,
  setEmail,
  setPassword,
  setNickname,
} from "@/store/signupStore";

const FunnelTestComponents = () => {
  const STS = {
    STEP_1: "step1",
    STEP_2: "step2",
    STEP_3: "step3",
  };

  const { Funnel, onNextStep } = useFunnel(Object.values(STS));

  return (
    <div>
      <SignupProvider>
        <Funnel>
          <Funnel.Step name={STS.STEP_1}>
            <Step1 onNextStep={onNextStep} />
          </Funnel.Step>
          <Funnel.Step name={STS.STEP_2}>
            <Step2 onNextStep={onNextStep} />
          </Funnel.Step>
          <Funnel.Step name={STS.STEP_3}>
            <Step3 onNextStep={onNextStep} />
          </Funnel.Step>
        </Funnel>
      </SignupProvider>
    </div>
  );
};

type OnNextType = { onNextStep: () => void };

const Step1 = ({ onNextStep }: OnNextType) => {
  const { nickname } = useSignupState();
  const [name, setName] = useState(nickname);
  const dispatch = useSignupDispatch();
  const handleNext = () => {
    dispatch(setNickname(name));
    onNextStep();
  };

  return (
    <div>
      <h2>Step 1</h2>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

const Step2 = ({ onNextStep }: OnNextType) => {
  const [mail, setMail] = useState("");
  const dispatch = useSignupDispatch();
  const handleNext = () => {
    dispatch(setEmail(mail));
    onNextStep();
  };

  return (
    <div>
      <h2>Step 2</h2>
      <input
        type="email"
        value={mail}
        onChange={e => setMail(e.target.value)}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

const Step3 = ({ onNextStep }: OnNextType) => {
  const state = useSignupState();
  const [pin, setPin] = useState("");
  const dispatch = useSignupDispatch();

  const handleNext = () => {
    dispatch(setPassword(pin));
  };

  useEffect(() => {
    if (state.password !== "") {
      console.info(state);
      onNextStep();
    }
  }, [state]);

  return (
    <div>
      <h2>Step 3</h2>
      <input
        type="password"
        value={pin}
        onChange={e => setPin(e.target.value)}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default FunnelTestComponents;
