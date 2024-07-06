import { IFormInputState } from "../types";

export const validationSuccessfulReducer = (
  state: IFormInputState
): IFormInputState => ({
  ...state,
  isValueValid: true,
});

export const validationFailedReducer = (
  state: IFormInputState
): IFormInputState => ({
  ...state,
  isValueValid: false,
});
