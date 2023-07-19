import React, { createContext, useContext, useReducer, Dispatch } from "react";

import { BirthdayState, YEARS } from "@/pages/signup/birthday";
import { GenderState } from "@/pages/signup/gender";

// 타입 정의
export type State = {
  email: string;
  password: string;
  nickname: string;
  location: string;
  birthday: BirthdayState;
  avatar: File | null;
  gender: GenderState;
  capacity: number;
};

type Action =
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SET_NICKNAME"; payload: string }
  | { type: "SET_LOCATION"; payload: string }
  | { type: "SET_BIRTHDAY"; payload: BirthdayState }
  | { type: "SET_AVATAR"; payload: File }
  | { type: "SET_GENDER"; payload: GenderState }
  | { type: "SET_CAPACITY"; payload: number };

export type DispatchType = Dispatch<Action>;

// 초기 상태 정의
export const initialState: State = {
  email: "",
  password: "",
  nickname: "",
  location: "",
  birthday: {
    year: YEARS[0],
    month: { label: "1월", value: 1 },
    day: { label: "1일", value: 1 },
  },
  avatar: null,
  gender: { label: "남자", value: "남자" },
  capacity: 0,
};

// 액션 생성자 함수 정의
export const setEmail = (email: string): Action => ({
  type: "SET_EMAIL",
  payload: email,
});
export const setPassword = (password: string): Action => ({
  type: "SET_PASSWORD",
  payload: password,
});
export const setNickname = (nickname: string): Action => ({
  type: "SET_NICKNAME",
  payload: nickname,
});
export const setLocation = (location: string): Action => ({
  type: "SET_LOCATION",
  payload: location,
});
export const setBirthday = (birthday: BirthdayState): Action => ({
  type: "SET_BIRTHDAY",
  payload: birthday,
});
export const setAvatar = (avatar: File): Action => ({
  type: "SET_AVATAR",
  payload: avatar,
});
export const setGender = (gender: GenderState): Action => ({
  type: "SET_GENDER",
  payload: gender,
});
export const setCapacity = (capacity: number): Action => ({
  type: "SET_CAPACITY",
  payload: capacity,
});

// 리듀서 함수 정의
const signupReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_NICKNAME":
      return { ...state, nickname: action.payload };
    case "SET_LOCATION":
      return { ...state, location: action.payload };
    case "SET_BIRTHDAY":
      return { ...state, birthday: action.payload };
    case "SET_AVATAR":
      return { ...state, avatar: action.payload };
    case "SET_GENDER":
      return { ...state, gender: action.payload };
    case "SET_CAPACITY":
      return { ...state, capacity: action.payload };
    default:
      return state;
  }
};

// State를 공유할 Context 생성
const SignupStateContext = createContext<State | undefined>(undefined);
const SignupDispatchContext = createContext<DispatchType | undefined>(
  undefined,
);

export function SignupProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(signupReducer, initialState);

  return (
    <SignupStateContext.Provider value={state}>
      <SignupDispatchContext.Provider value={dispatch}>
        {children}
      </SignupDispatchContext.Provider>
    </SignupStateContext.Provider>
  );
}

export const useSignupState = (): State => {
  const state = useContext(SignupStateContext);
  if (!state) {
    throw new Error("Cannot find SignupProvider");
  }
  return state;
};

export const useSignupDispatch = (): DispatchType => {
  const dispatch = useContext(SignupDispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find SignupProvider");
  }
  return dispatch;
};
