import { IFormInputState } from "../types";

export const interactionBeganReducer = (
  state: IFormInputState
): IFormInputState => ({
  ...state,
  inputInteraction: true,
});

export const interactionEndedReducer = (
  state: IFormInputState
): IFormInputState => ({
  ...state,
  inputInteraction: false,
});
