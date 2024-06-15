"use client";

import clsx from "clsx";

import useInput from "./hooks/useInput";
import XCircleIcon from "./icons/x-circle";
import styles from "./input.module.css";

export function Input() {
  const [
    handleChange,
    handleFocus,
    handleBlur,
    handleAnimationStart,
    value,
    inputInteraction,
    autoFill,
    isValueValid,
  ] = useInput();

  const labelStyle = clsx(
    styles.label,
    inputInteraction || value ? styles.smallLabel : ""
  );

  const bgInputStyle = clsx(
    styles.bgInput,
    autoFill ? styles.bgInputAutoFill : "",
    isValueValid ? styles.bgValidInput : styles.bgInvalidInput
  );

  return (
    <div className="inline-flex flex-wrap flex-auto w-full relative text-[1rem] font-normal text-white sm:w-auto">
      <label htmlFor="email-input" className={labelStyle}>
        Email address
      </label>
      {isValueValid && (
        <div className="inline-flex w-full relative z-0">
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            onAnimationStart={handleAnimationStart}
            onChange={handleChange}
            value={value}
            autoComplete="email"
            minLength={5}
            maxLength={50}
            name="email"
            type="email"
            id="email-input"
            className={styles.input}
          />
          <div aria-hidden={true} className={bgInputStyle}></div>
        </div>
      )}
      {!isValueValid && (
        <>
          <div className="inline-flex w-full relative z-0">
            <input
              onFocus={handleFocus}
              onBlur={handleBlur}
              onAnimationStart={handleAnimationStart}
              onChange={handleChange}
              value={value}
              autoComplete="email"
              minLength={5}
              maxLength={50}
              name="email"
              type="email"
              id="email-input"
              aria-describedby="warning-message"
              className={styles.input}
            />
            <div aria-hidden={true} className={bgInputStyle}></div>
          </div>
          <div id="warning-message" className={styles.warningMessage}>
            <XCircleIcon className="mr-1 mt-px" />
            Please enter a valid email address.
          </div>
        </>
      )}
    </div>
  );
}
