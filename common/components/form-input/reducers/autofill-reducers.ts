import { IFormInputState } from "../types";

export const autofillStartedReducer = (
  state: IFormInputState
): IFormInputState => ({
  ...state,
  autofill: true,
});

export const autofillEndedReducer = (
  state: IFormInputState
): IFormInputState => ({
  ...state,
  autofill: false,
});
