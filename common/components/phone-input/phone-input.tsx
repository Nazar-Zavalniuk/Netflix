"use client";

import { useCallback, useState } from "react";
import { PhoneNumberUtil } from "google-libphonenumber";
import { PhoneInput as PrimaryPhoneInput } from "react-international-phone";

import "react-international-phone/style.css";
import { WarningMessageForField } from "@/common/components/warning-message-for-field";

import usePhoneInputStyles from "./hooks/use-phone-input-styles";

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

export function PhoneInput() {
  const [phone, setPhone] = useState("");

  const [isInputValid, setIsInputValid] = useState(true);

  const [inputInteraction, setInputInteraction] = useState({
    interaction: false,
    isFirstInteraction: true,
  });

  const { isFirstInteraction } = inputInteraction;

  const showWarningMessage = !isInputValid && !isFirstInteraction;

  const handleFocus = useCallback(() => {
    setInputInteraction({ interaction: true, isFirstInteraction: true });
  }, []);

  const handleBlur = useCallback(() => {
    setInputInteraction({ interaction: false, isFirstInteraction: false });
    setIsInputValid(isPhoneValid(phone));
  }, [phone]);

  const handleChange = useCallback((phone: string) => {
    setPhone(phone);
  }, []);

  const { phoneInputStyle, bgStyle, wrapperStyle } = usePhoneInputStyles({
    inputInteraction,
    isInputValid,
  });

  return (
    <div>
      <div className={wrapperStyle} onFocus={handleFocus} onBlur={handleBlur}>
        <PrimaryPhoneInput
          value={phone}
          onChange={handleChange}
          {...phoneInputStyle}
        />
        <div className={bgStyle} />
      </div>
      <WarningMessageForField
        showMessage={showWarningMessage}
        message="Please enter a valid phone number."
      />
    </div>
  );
}
