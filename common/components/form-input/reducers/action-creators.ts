/* eslint-disable sort-keys */
import { ActionTypes } from "../types";

type ActionCreator<T extends ActionTypes> = T extends { payload: infer P }
  ? (payload: P) => T
  : () => T;

export function createAction<T extends ActionTypes["type"]>(
  type: T
): ActionCreator<Extract<ActionTypes, { type: T }>> {
  return ((payload?: any) => ({ type, payload })) as ActionCreator<
    Extract<ActionTypes, { type: T }>
  >;
}

export const autofillStarted = createAction("autofill_started");

export const autofillEnded = createAction("autofill_ended");

export const showPassword = createAction("show_password");

export const hidePassword = createAction("hide_password");

export const interactionBegan = createAction("interaction_began");

export const interactionEnded = createAction("interaction_ended");

export const validationSuccessful = createAction("validation_successful");

export const validationFailed = createAction("validation_failed");

export const changeInputType = createAction("change_input_type");

export const changeValue = createAction("change_value");
