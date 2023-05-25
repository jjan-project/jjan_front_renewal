import React, { createContext, useContext, useReducer, Dispatch } from "react";

// 타입 정의
type State = {
  email: string;
  password: string;
  nickname: string;
  location: string;
  birthday: string;
  avatar: string;
  gender: string;
  drinkAmount: string;
};

type Action =
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SET_NICKNAME"; payload: string }
  | { type: "SET_LOCATION"; payload: string }
  | { type: "SET_BIRTHDAY"; payload: string }
  | { type: "SET_AVATAR"; payload: string }
  | { type: "SET_GENDER"; payload: string }
  | { type: "SET_DRINK_AMOUNT"; payload: string };

type DispatchType = Dispatch<Action>;

// 초기 상태 정의
const initialState: State = {
  email: "",
  password: "",
  nickname: "",
  location: "",
  birthday: "",
  avatar: "",
  gender: "",
  drinkAmount: "",
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
export const setBirthday = (birthday: string): Action => ({
  type: "SET_BIRTHDAY",
  payload: birthday,
});
export const setAvatar = (avatar: string): Action => ({
  type: "SET_AVATAR",
  payload: avatar,
});
export const setGender = (gender: string): Action => ({
  type: "SET_GENDER",
  payload: gender,
});
export const setDrinkAmount = (drinkAmount: string): Action => ({
  type: "SET_DRINK_AMOUNT",
  payload: drinkAmount,
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
    case "SET_DRINK_AMOUNT":
      return { ...state, drinkAmount: action.payload };
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
