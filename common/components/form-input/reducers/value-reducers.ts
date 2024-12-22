import { IFormInputState } from "../types";

export interface IAction {
  type: "change_value";
  payload: string;
}

export const changeValueReducer = (
  state: IFormInputState,
  action: IAction
): IFormInputState => ({
  ...state,
  value: action.payload,
});
