import { useNavigate } from "react-router-dom";

import { Keywords } from "./keywords";
import { Location } from "./location";
import { MaxPeople } from "./max-people";
import { Schedule } from "./schedule";
import { Title } from "./title";

import useProgressBar from "@/components/progressbar/useProgressBar";
import useFunnel from "@/hooks/useFunnel";
import { useCreateParty } from "@/services/internal/party/query";
import {
  PartyFormState,
  clearStore,
  usePartyFormState,
  usePartyFormDispatch,
} from "@/store/partyStore";

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
  const partyFormState = usePartyFormState();
  const dispatch = usePartyFormDispatch();
  const cratePartyMutation = useCreateParty();
  const navigate = useNavigate();

  const { Funnel, onNextStep, onPreviousStep } = useFunnel(Object.values(STS));
  const { step, setGaugeUp, setGaugeDown } = useProgressBar(
    FIRST_STEP,
    LAST_STEP,
  );

  const convertObjectToData = (obj: PartyFormState) => {
    const {
      description,
      maxPeople,
      location,
      date,
      time,
      keywords,
      partyName,
    } = obj;

    return {
      title: partyName,
      content: description,
      address: location?.address,
      maxPartyNum: maxPeople?.slice(0, maxPeople.length - 1),
      partyLatitude: location?.latitude,
      partyLongitude: location?.longitude,
      partyDate: `${date?.getFullYear()}/${((date?.getMonth() as number) + 1)
        .toString()
        .padStart(2, "0")}/${date
        ?.getDate()
        .toString()
        .padStart(2, "0")} ${time}`,
      partyTags: Array.from(keywords || []),
    };
  };

  const postFormData = async () => {
    const data = convertObjectToData(partyFormState);

    const formData = new FormData();
    formData.append(
      "data",
      new Blob([JSON.stringify(data)], { type: "application/json" }),
    );

    partyFormState.photos?.forEach(photo => {
      formData.append("images", photo);
    });

    try {
      await cratePartyMutation.mutateAsync(formData);
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
        dispatch(clearStore());
        navigate("/");
      }
    }
  };

  const stepDownHandler = () => {
    if (step !== FIRST_STEP) {
      onPreviousStep();
      setGaugeDown();
    } else {
      navigate(-1);
      dispatch(clearStore());
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

export { CreateParty };
