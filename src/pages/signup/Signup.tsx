import { Address } from "./address";
import { Avatar } from "./avatar";
import { Birthday } from "./birthday";
import { Capacity } from "./capacity";
import { Email } from "./email";
import { Gender } from "./gender";
import { Nickname } from "./nickname";

import useProgressBar from "@/components/progressbar/useProgressBar";
import useFunnel from "@/hooks/useFunnel";
// import { useSignupState } from "@/store/signupStore";

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

const FIRST_STEP = 1;
const LAST_STEP = Object.keys(STS).length;

const Signup = () => {
  /**
   * @todo
   * 값 확인용 signup 함수 완성되면 대체할 예정
   */
  // const signupState = useSignupState();

  const { Funnel, onNextStep, onPreviousStep } = useFunnel(Object.values(STS));
  const { step, setGaugeUp, setGaugeDown } = useProgressBar(
    FIRST_STEP,
    LAST_STEP,
  );

  const stepUphandler = () => {
    if (step !== LAST_STEP) {
      onNextStep();
      setGaugeUp();
    } else {
      // call signup function
      // console.log("singup");
      /**
       * @todo
       * 값 확인용 signup 함수 완성되면 대체할 예정
       * ex signup() or signup(signupState)
       */
      // console.log(signupState);
    }
  };

  const stepDownHandler = () => {
    if (step !== FIRST_STEP) {
      onPreviousStep();
      setGaugeDown();
    } else {
      // cancle signup
      // console.log("cancle");
    }
  };

  const subPageProps = {
    curStep: step,
    lastStep: LAST_STEP,
    onNextStep: stepUphandler,
    onPrevStep: stepDownHandler,
  };

  return (
    <Funnel>
      {components.map(({ name, Component }) => (
        <Funnel.Step key={name} name={name}>
          <Component {...subPageProps} />
        </Funnel.Step>
      ))}
    </Funnel>
  );
};

export { Signup };
