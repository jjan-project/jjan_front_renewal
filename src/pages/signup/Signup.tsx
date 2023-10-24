import { useNavigate } from "react-router-dom";

import { Loading } from "../loading";

import { Address } from "./address";
import { Avatar } from "./avatar";
import { Birthday } from "./birthday";
import { Capacity } from "./capacity";
import { Email } from "./email";
import { Gender } from "./gender";
import { Nickname } from "./nickname";

import useProgressBar from "@/components/progressbar/useProgressBar";
import useFunnel from "@/hooks/useFunnel";
import { useSignup } from "@/services/internal/auth/query";
import { useSignupState, State as SignupStateType } from "@/store/signupStore";
import { getFormattedBirthday } from "@/utils/date";

const STS = {
  Email: "email",
  Address: "address",
  Birthday: "birthday",
  Gender: "gender",
  Nickname: "nickname",
  Avatar: "avatar",
  Capacity: "capacity",
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
  const signupState = useSignupState();
  const signupMutation = useSignup();
  const navigate = useNavigate();

  const { Funnel, onNextStep, onPreviousStep } = useFunnel(Object.values(STS));
  const { step, setGaugeUp, setGaugeDown } = useProgressBar(
    FIRST_STEP,
    LAST_STEP,
  );

  const convertObjectToData = (obj: SignupStateType) => {
    const { birthday, ...rest } = obj;

    return {
      ...rest,
      address: rest.address || "",
      gender: rest.gender.value,
      drinkingCapacity: rest.capacity.toString(),
      birth: getFormattedBirthday(birthday),
    };
  };

  const postFormData = async () => {
    const data = convertObjectToData(signupState);
    const formData = new FormData();
    formData.append(
      "data",
      new Blob([JSON.stringify(data)], { type: "application/json" }),
    );
    formData.append("image", signupState.avatar as File);

    try {
      await signupMutation.mutateAsync(formData);
      return true;
    } catch (e) {
      /**
       * @todo
       * 추후 에러 핸들링 변경
       */
    }

    return false;
  };

  const stepUphandler = async () => {
    if (step !== LAST_STEP) {
      onNextStep();
      setGaugeUp();
    } else {
      const isSingupSuccess = await postFormData();
      if (isSingupSuccess) {
        navigate("/auth/signup-complete");
      }
    }
  };

  const stepDownHandler = () => {
    if (step !== FIRST_STEP) {
      onPreviousStep();
      setGaugeDown();
    } else {
      navigate("/landing");
    }
  };

  const subPageProps = {
    curStep: step,
    lastStep: LAST_STEP,
    onNextStep: stepUphandler,
    onPrevStep: stepDownHandler,
  };

  if (signupMutation.isLoading) {
    return <Loading />;
  }

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
