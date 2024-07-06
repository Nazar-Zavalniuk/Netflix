import { HTMLInputTypeAttribute } from "react";

export interface IInput {
  id: string;
  type: React.HTMLInputTypeAttribute;
  autoComplete?: React.HTMLInputAutoCompleteAttribute;
  name?: string;
  minLength?: number;
  maxLength?: number;
  size: "small" | "normal";
}

export interface IFormInputState {
  autofill: boolean;
  inputInteraction: boolean;
  isValueValid: boolean;
  inputType: HTMLInputTypeAttribute;
  showPassword: boolean;
  value: string;
}

export type ActionTypes =
  | { type: "autofill_started" }
  | { type: "autofill_ended" }
  | { type: "change_input_type"; payload: HTMLInputTypeAttribute }
  | { type: "change_value"; payload: string }
  | { type: "interaction_began" }
  | { type: "interaction_ended" }
  | { type: "show_password" }
  | { type: "hide_password" }
  | { type: "validation_successful" }
  | { type: "validation_failed" };
