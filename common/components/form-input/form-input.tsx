"use client";

import { useReducer } from "react";
import clsx from "clsx";

import { InputField } from "./components/input-field";
import { TogglePasswordVisibility } from "./components/toggle-password-visibility";
import { WarningMessage } from "./components/warning-message";
import styles from "./form-input.module.css";
import { initialState, mainReducer } from "./reducers";
import { IInput } from "./types";

interface FormInputProps extends IInput {
  label: string;
}

export function FormInput(props: FormInputProps) {
  const actualInitialState = { ...initialState, inputType: props.type };

  const [state, dispatch] = useReducer(mainReducer, actualInitialState);

  const { value, autofill, inputInteraction, isValueValid } = state;

  const transformLabel = inputInteraction || value;

  const labelStyle = clsx(
    props.size === "small" && styles.smallLabel,
    props.size === "normal" && styles.normalLabel,
    transformLabel && props.size === "small" && styles.smallLabelTransform,
    transformLabel && props.size === "normal" && styles.normalLabelTransform
  );

  const bgInputStyle = clsx(
    styles.bgInput,
    autofill && styles.bgInputAutofill,
    inputInteraction && styles.bgInputInteraction,
    isValueValid ? styles.bgValidInput : styles.bgInvalidInput
  );

  const { label, type, ...inputProps } = props;

  const showTogglePassVisibility = type === "password" && inputInteraction;

  return (
    <div className={styles.wrapper}>
      <label htmlFor={props.id} className={labelStyle}>
        {label}
      </label>
      <div className={styles.inputContainer}>
        <InputField
          {...inputProps}
          value={value}
          primaryType={type}
          type={state.inputType}
          onDispatch={dispatch}
        />
        <div aria-hidden={true} className={bgInputStyle} />
      </div>
      <WarningMessage showMessage={!isValueValid} message="temporary message" />
      <TogglePasswordVisibility
        showToggle={showTogglePassVisibility}
        isPasswordVisible={state.showPassword}
        onDispatch={dispatch}
      />
    </div>
  );
}
