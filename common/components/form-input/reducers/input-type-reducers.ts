import { HTMLInputTypeAttribute } from "react";

import { IFormInputState } from "../types";

export interface IAction {
  type: "change_input_type";
  payload: HTMLInputTypeAttribute;
}

export const changeInputTypeReducer = (
  state: IFormInputState,
  action: IAction
): IFormInputState => ({
  ...state,
  inputType: action.payload,
});
