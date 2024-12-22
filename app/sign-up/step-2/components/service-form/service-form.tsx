import { Header } from "@/app/sign-up/components/header";
import { Button } from "@/common/components/button";
import { FormWrapper } from "@/common/components/form-wrapper";

import { ListOfServiceBenefits } from "./components/list-of-service-benefits";
import CircleCheckmarkIcon from "./icons/circle-checkmark";

const SETVICEBENEFITS = [
  "No commitments, cancel anytime.",
  "Everything on Netflix for one low price.",
  "Unlimited viewing on all your devices.",
];

export function ServiceForm() {
  return (
    <FormWrapper>
      <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          <CircleCheckmarkIcon width={50} height={50} />
        </div>
        <Header
          currentStep={2}
          amountOfSteps={3}
          title="Choose your plan."
          className="flex flex-col items-center justify-center"
        />
        <div className="flex flex-col items-center gap-4 m-[0_auto]">
          <ListOfServiceBenefits list={SETVICEBENEFITS} />
          <Button
            href="step-3"
            role="link"
            className="min-h-10 py-1.5 px-4 text-[1rem] min-w-full"
          >
            Next
          </Button>
        </div>
      </div>
    </FormWrapper>
  );
}
