import React, { createContext, useContext, useReducer, Dispatch } from "react";

export type PartyLocation = {
  place: string;
  address: string;
  latitude: number;
  longitude: number;
};

export type PartyFormState = Partial<{
  partyName: string;
  photos: File[];
  description: string;
  date: Date;
  time: string;
  location: PartyLocation;
  maxPeople: string;
  keywords: Set<string>;
}>;

type Action =
  | { type: "SET_PARTY_NAME"; payload: string }
  | { type: "SET_PHTOS"; payload: File[] }
  | { type: "SET_DESCRIPTION"; payload: string }
  | { type: "SET_DATE"; payload: Date }
  | { type: "SET_TIME"; payload: string }
  | { type: "SET_LOCATION"; payload: PartyLocation }
  | { type: "SET_MAX_PEOPLE"; payload: string }
  | { type: "SET_KEYWORDS"; payload: Set<string> | undefined }
  | { type: "CLEAR" };

export type DispatchType = Dispatch<Action>;

export const initialPartyFormState: PartyFormState = {
  partyName: undefined,
  photos: undefined,
  description: undefined,
  date: undefined,
  time: undefined,
  location: undefined,
  maxPeople: undefined,
  keywords: undefined,
};

export const setTitle = (title: string): Action => ({
  type: "SET_PARTY_NAME",
  payload: title,
});
export const setPhotos = (photos: File[]): Action => ({
  type: "SET_PHTOS",
  payload: photos,
});
export const setDescription = (description: string): Action => ({
  type: "SET_DESCRIPTION",
  payload: description,
});
export const setDate = (date: Date): Action => ({
  type: "SET_DATE",
  payload: date,
});
export const setTime = (time: string): Action => ({
  type: "SET_TIME",
  payload: time,
});
export const setLocation = (location: PartyLocation): Action => ({
  type: "SET_LOCATION",
  payload: location,
});
export const setMaxPeople = (maxPeople: string): Action => ({
  type: "SET_MAX_PEOPLE",
  payload: maxPeople,
});
export const setKeywords = (keywords: Set<string> | undefined): Action => ({
  type: "SET_KEYWORDS",
  payload: keywords,
});
export const clearStore = (): Action => ({
  type: "CLEAR",
});

const partyFormReducer = (
  state: PartyFormState,
  action: Action,
): PartyFormState => {
  switch (action.type) {
    case "SET_PARTY_NAME":
      return { ...state, partyName: action.payload };
    case "SET_PHTOS":
      return { ...state, photos: action.payload };
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    case "SET_DATE":
      return { ...state, date: action.payload };
    case "SET_TIME":
      return { ...state, time: action.payload };
    case "SET_LOCATION":
      return { ...state, location: action.payload };
    case "SET_MAX_PEOPLE":
      return { ...state, maxPeople: action.payload };
    case "SET_KEYWORDS":
      return { ...state, keywords: action.payload };
    case "CLEAR":
      return { ...initialPartyFormState };
    default:
      return state;
  }
};

const partyFormStateContext = createContext<PartyFormState | undefined>(
  undefined,
);
const partyFormDispatchContext = createContext<DispatchType | undefined>(
  undefined,
);

export function PartyFormProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(partyFormReducer, initialPartyFormState);

  return (
    <partyFormStateContext.Provider value={state}>
      <partyFormDispatchContext.Provider value={dispatch}>
        {children}
      </partyFormDispatchContext.Provider>
    </partyFormStateContext.Provider>
  );
}

export const usePartyFormState = (): PartyFormState => {
  const state = useContext(partyFormStateContext);
  if (!state) {
    throw new Error("Cannot find PartyFormProvider");
  }
  return state;
};

export const usePartyFormDispatch = (): DispatchType => {
  const dispatch = useContext(partyFormDispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find PartyFormProvider");
  }
  return dispatch;
};
