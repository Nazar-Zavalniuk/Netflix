"use client";

import { useState } from "react";

import { Button } from "@/common/components/button";
import { FormWrapper } from "@/common/components/form-wrapper";

import { InputField } from "./components/input-field";
import { ResetPasswordChoices } from "./components/reset-password-choices";
import { ResetMethod } from "./types";

const emailDescription =
  "We will send you an email with instructions on how to reset your password.";

const smsDescription =
  "We will text you a verification code to reset your password. Message and data rates may apply.";

export function PasswordResetForm() {
  const [resetMethod, setResetMethod] = useState<ResetMethod>("email");

  const description =
    resetMethod === "email" ? emailDescription : smsDescription;

  const btnText = resetMethod === "email" ? "Email Me" : "Text Me";

  return (
    <FormWrapper>
      <div className="flex flex-col gap-4">
        <h1 className="font-medium text-[2rem]">Update password</h1>
        <ResetPasswordChoices
          resetMethod={resetMethod}
          onSetResetMethod={setResetMethod}
        />
        <p className="flex items-center min-h-24">{description}</p>
        <form className="flex flex-col w-full gap-4">
          <InputField inputType={resetMethod} />
          <Button type="button" className="py-1.5 px-4 min-h-10">
            {btnText}
          </Button>
        </form>
      </div>
    </FormWrapper>
  );
}
