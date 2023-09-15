import React, { createContext, useContext, useReducer, Dispatch } from "react";

import { BirthdayState, YEARS } from "@/pages/signup/birthday";
import { GenderState } from "@/pages/signup/gender";

// 타입 정의
export type State = {
  email: string;
  password: string;
  nickname: string;
  address: string;
  birthday: BirthdayState;
  avatar: File | null;
  gender: GenderState;
  capacity: number;
  latitude: number;
  longitude: number;
};

type Action =
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SET_NICKNAME"; payload: string }
  | { type: "SET_ADDRESS"; payload: string }
  | { type: "SET_BIRTHDAY"; payload: BirthdayState }
  | { type: "SET_AVATAR"; payload: File }
  | { type: "SET_GENDER"; payload: GenderState }
  | { type: "SET_CAPACITY"; payload: number }
  | { type: "SET_LATITUDE"; payload: number }
  | { type: "SET_LONGITUDE"; payload: number };

export type DispatchType = Dispatch<Action>;

// 초기 상태 정의
export const initialState: State = {
  email: "",
  password: "",
  nickname: "",
  address: "",
  birthday: {
    year: YEARS[0],
    month: { label: "1월", value: 1 },
    day: { label: "1일", value: 1 },
  },
  avatar: null,
  gender: { label: "남자", value: "남자" },
  capacity: 0,
  latitude: 0,
  longitude: 0,
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
export const setAddress = (address: string): Action => ({
  type: "SET_ADDRESS",
  payload: address,
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
export const setLatitude = (latitude: number): Action => ({
  type: "SET_LATITUDE",
  payload: latitude,
});
export const setLongitude = (longitude: number): Action => ({
  type: "SET_LONGITUDE",
  payload: longitude,
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
    case "SET_ADDRESS":
      return { ...state, address: action.payload };
    case "SET_BIRTHDAY":
      return { ...state, birthday: action.payload };
    case "SET_AVATAR":
      return { ...state, avatar: action.payload };
    case "SET_GENDER":
      return { ...state, gender: action.payload };
    case "SET_CAPACITY":
      return { ...state, capacity: action.payload };
    case "SET_LATITUDE":
      return { ...state, latitude: action.payload };
    case "SET_LONGITUDE":
      return { ...state, longitude: action.payload };
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
