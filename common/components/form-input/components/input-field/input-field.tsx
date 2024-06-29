"use client";

import { useCallback } from "react";

import { IInput } from "../../types";
import { SetStateFunc } from "@/common/types";

import styles from "./input-field.module.css";

interface InputFieldProps extends IInput {
  value: string;
  onSetValue: SetStateFunc<string>;
  onSetInputInteraction: SetStateFunc<boolean>;
  onSetAutofill: SetStateFunc<boolean>;
}

export function InputField(props: InputFieldProps) {
  const { value, onSetValue, onSetInputInteraction, onSetAutofill } = props;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onSetValue(e.target.value);
    },
    [onSetValue]
  );

  const handleFocus = useCallback(() => {
    onSetInputInteraction(true);
  }, [onSetInputInteraction]);

  const handleBlur = useCallback(() => {
    onSetInputInteraction(false);
  }, [onSetInputInteraction]);

  const handleAnimationStart = useCallback(
    (e: React.AnimationEvent<HTMLInputElement>) => {
      const autofillStart = e.animationName.includes("autoFillStart");

      if (autofillStart) {
        onSetAutofill(true);
      } else {
        onSetAutofill(false);
      }
    },
    [onSetAutofill]
  );

  return (
    <input
      onFocus={handleFocus}
      onBlur={handleBlur}
      onAnimationStart={handleAnimationStart}
      onChange={handleChange}
      value={value}
      autoComplete={props.autoComplete}
      minLength={props.minLength}
      maxLength={props.maxLength}
      name={props.name}
      type={props.type}
      id={props.id}
      className={styles.input}
    />
  );
}
