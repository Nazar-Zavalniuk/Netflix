import { Header } from "@/app/sign-up/components/header";
import { Button } from "@/common/components/button";
import { FormWrapper } from "@/common/components/form-wrapper";

import { EmailPreference } from "./components/email-preference";
import { InputFields } from "./components/input-fields";

export function RegistrationForm() {
  return (
    <FormWrapper>
      <div className="flex flex-col gap-4">
        <Header
          currentStep={1}
          amountOfSteps={3}
          title="Fill out the fields below to start your membership"
        />
        <div>
          <p>Just a few more steps and you&apos;re done!</p>
          <p>We hate paperwork, too.</p>
        </div>
        <InputFields />
        <EmailPreference />
        <Button
          href="step-2"
          role="link"
          className="min-h-10 py-1.5 px-4 text-[1rem]"
        >
          Next
        </Button>
      </div>
    </FormWrapper>
  );
}
