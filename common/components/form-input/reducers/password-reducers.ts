import { IFormInputState } from "../types";

export const showPasswordReducer = (
  state: IFormInputState
): IFormInputState => ({
  ...state,
  inputType: "text",
  showPassword: true,
});

export const hidePasswordReducer = (
  state: IFormInputState
): IFormInputState => ({
  ...state,
  inputType: "password",
  showPassword: false,
});
