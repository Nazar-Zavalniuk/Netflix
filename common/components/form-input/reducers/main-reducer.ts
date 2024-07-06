import { ActionTypes, IFormInputState } from "../types";

import {
  autofillEndedReducer,
  autofillStartedReducer,
} from "./autofill-reducers";
import { changeInputTypeReducer } from "./input-type-reducers";
import {
  interactionBeganReducer,
  interactionEndedReducer,
} from "./interaction-reducers";
import { hidePasswordReducer, showPasswordReducer } from "./password-reducers";
import {
  validationFailedReducer,
  validationSuccessfulReducer,
} from "./validation-reducers";
import { changeValueReducer } from "./value-reducers";

export const initialState: IFormInputState = {
  autofill: false,
  inputInteraction: false,
  inputType: "input",
  isValueValid: true,
  showPassword: false,
  value: "",
};

export function mainReducer(state: IFormInputState, action: ActionTypes) {
  switch (action.type) {
    case "autofill_started":
      return autofillStartedReducer(state);
    case "autofill_ended":
      return autofillEndedReducer(state);
    case "change_input_type":
      return changeInputTypeReducer(state, action);
    case "change_value":
      return changeValueReducer(state, action);
    case "interaction_began":
      return interactionBeganReducer(state);
    case "interaction_ended":
      return interactionEndedReducer(state);
    case "show_password":
      return showPasswordReducer(state);
    case "hide_password":
      return hidePasswordReducer(state);
    case "validation_successful":
      return validationSuccessfulReducer(state);
    case "validation_failed":
      return validationFailedReducer(state);
    default:
      throw Error("Unknown action type!");
  }
}
