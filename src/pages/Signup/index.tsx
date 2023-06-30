import { IconBrokenHome } from "jjan-icon";

import { Header } from "../../../components/header";

import { Address } from "./steps/address";
import { Avatar } from "./steps/avatar";
import { Birthday } from "./steps/birthday";
import { Capacity } from "./steps/capacity";
import { Email } from "./steps/email";
import { Gender } from "./steps/gender";
import { Nickname } from "./steps/nickname";

import useProgressBar from "@/components/useProgresBar";
import useFunnel from "@/hooks/useFunnel";
import { SignupProvider } from "@/store/signupStore";

const STS = {
  Email: "step1",
  Address: "step2",
  Birthday: "step3",
  Gender: "step4",
  Nickname: "step5",
  Avatar: "step6",
  Capacity: "step7",
};

const components = [
  { name: STS.Email, Component: Email },
  { name: STS.Address, Component: Address },
  { name: STS.Birthday, Component: Birthday },
  { name: STS.Gender, Component: Gender },
  { name: STS.Nickname, Component: Nickname },
  { name: STS.Avatar, Component: Avatar },
  { name: STS.Capacity, Component: Capacity },
];

const MAX_STEP = Object.keys(STS).length;
const FIRST_STEP = 0;

const Signup = () => {
  const { Funnel, onNextStep, onPreviousStep } = useFunnel(Object.values(STS));
  const { step, setGaugeUp, setGaugeDown } = useProgressBar(
    FIRST_STEP,
    MAX_STEP,
  );

  const stepUphandler = () => {
    onNextStep();
    setGaugeUp();
  };

  const stepDownHandler = () => {
    onPreviousStep();
    setGaugeDown();
  };

  const props = {
    curStep: step,
    maxStep: MAX_STEP,
    onNextStep: stepUphandler,
    onPrevStep: stepDownHandler,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px",
        height: "100vh",
        boxSizing: "border-box",
        gap: "2rem",
      }}
    >
      <Header leftIcon={<IconBrokenHome onClick={stepDownHandler} />}>
        회원가입
      </Header>
      <SignupProvider>
        <Funnel>
          {components.map(({ name, Component }) => (
            <Funnel.Step key={name} name={name}>
              <Component {...props} />
            </Funnel.Step>
          ))}
        </Funnel>
      </SignupProvider>
    </div>
  );
};

export default Signup;
