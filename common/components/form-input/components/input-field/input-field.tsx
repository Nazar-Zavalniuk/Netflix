"use client";

import { Dispatch, HTMLInputTypeAttribute } from "react";
import clsx from "clsx";

import { ActionTypes, IInput } from "../../types";

import useInputField from "./hooks/use-input-field";
import styles from "./input-field.module.css";

interface InputFieldProps extends IInput {
  value: string;
  primaryType: HTMLInputTypeAttribute;
  onDispatch: Dispatch<ActionTypes>;
}

export function InputField(props: InputFieldProps) {
  const { onDispatch, size, primaryType, ...inputProps } = props;

  const handlers = useInputField(onDispatch);

  const inputStyle = clsx(
    styles.input,
    size === "small" && styles.smallInput,
    size === "normal" && styles.normalInput,
    { "mr-8": primaryType === "password" }
  );

  return (
    <input
      {...inputProps}
      className={inputStyle}
      onFocus={handlers.handleFocus}
      onBlur={handlers.handleBlur}
      onAnimationStart={handlers.handleAnimationStart}
      onChange={handlers.handleChange}
    />
  );
}
