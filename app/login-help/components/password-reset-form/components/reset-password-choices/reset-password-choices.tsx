"use client";

import { useCallback } from "react";

import { ResetMethod } from "../../types";
import { SetStateFunc } from "@/common/types";

import styles from "./reset-password-choices.module.css";

interface ResetPasswordChoicesProps {
  resetMethod: ResetMethod;
  onSetResetMethod: SetStateFunc<ResetMethod>;
}

export function ResetPasswordChoices(props: ResetPasswordChoicesProps) {
  const { resetMethod, onSetResetMethod } = props;

  const handleEmailMethod = useCallback(() => {
    onSetResetMethod("email");
  }, [onSetResetMethod]);

  const handleSmsMethod = useCallback(() => {
    onSetResetMethod("sms");
  }, [onSetResetMethod]);

  const isEmailMethod = resetMethod === "email";

  const isSmsMethod = resetMethod === "sms";

  return (
    <fieldset>
      <legend className="mb-4">
        How would you like to reset your password?
      </legend>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <input
            type="radio"
            id="reset-password-choice-email"
            name="reset-password-choice"
            value="email"
            checked={isEmailMethod}
            className={styles.input}
            onChange={handleEmailMethod}
          />
          <label htmlFor="reset-password-choice-email" className="flex-1">
            Email
          </label>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="radio"
            id="reset-password-choice-sms"
            name="reset-password-choice"
            value="sms"
            checked={isSmsMethod}
            className={styles.input}
            onChange={handleSmsMethod}
          />
          <label htmlFor="reset-password-choice-sms" className="flex-1">
            Text Message (SMS)
          </label>
        </div>
      </div>
    </fieldset>
  );
}
