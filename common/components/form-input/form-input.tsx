"use client";

import { useState } from "react";
import clsx from "clsx";

import { InputField } from "./components/input-field";
import { WarningMessage } from "./components/warning-message";
import styles from "./form-input.module.css";
import { IInput } from "./types";

interface FormInputProps extends IInput {
  label: string;
}

export function FormInput(props: FormInputProps) {
  const [value, setValue] = useState("");

  const [inputInteraction, setInputInteraction] = useState(false);

  const [autoFill, setAutofill] = useState(false);

  const [isValueValid, setIsValueValid] = useState(true);

  const labelStyle = clsx(
    styles.label,
    inputInteraction || value ? styles.smallLabel : ""
  );

  const bgInputStyle = clsx(
    styles.bgInput,
    autoFill ? styles.bgInputAutoFill : "",
    isValueValid ? styles.bgValidInput : styles.bgInvalidInput
  );

  const { label, ...otherProps } = props;

  return (
    <div className={styles.wrapper}>
      <label htmlFor={props.id} className={labelStyle}>
        {label}
      </label>
      <>
        <div className={styles.inputContainer}>
          <InputField
            value={value}
            onSetValue={setValue}
            onSetAutofill={setAutofill}
            onSetInputInteraction={setInputInteraction}
            {...otherProps}
          />
          <div aria-hidden={true} className={bgInputStyle} />
        </div>
        {!isValueValid && <WarningMessage />}
      </>
    </div>
  );
}
