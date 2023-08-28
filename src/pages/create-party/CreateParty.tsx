// import { usePartyFormState } from "@/store/partyStore";
import { Keywords } from "./keywords";
import { Location } from "./location";
import { MaxPeople } from "./max-people";
import { Schedule } from "./schedule";
import { Title } from "./title";

import useProgressBar from "@/components/progressbar/useProgressBar";
import useFunnel from "@/hooks/useFunnel";

const STS = {
  Title: "step1",
  Schedule: "step2",
  Location: "step3",
  MaxPeople: "step4",
  Keywords: "step5",
};

const components = [
  { name: STS.Title, Component: Title },
  { name: STS.Schedule, Component: Schedule },
  { name: STS.Location, Component: Location },
  { name: STS.MaxPeople, Component: MaxPeople },
  { name: STS.Keywords, Component: Keywords },
];

const FIRST_STEP = 1;
const LAST_STEP = Object.keys(STS).length;

const CreateParty = () => {
  /**
   * @todo
   * 값 확인용 signup 함수 완성되면 대체할 예정
   */
  // const partyFormState = usePartyFormState();

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
      // console.log(partyFormState);
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

export default CreateParty;
