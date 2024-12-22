import { Detail, IPlanRadioButton } from "../../../../types";
import { PlanRadioButton } from "../../../plan-radio-button";
import { PlansDetails } from "../../../plans-details";
import { WrapperForMostPopularPlan } from "../../../wrapper-for-most-popular-plan";

interface PremiumRadioButtonProps extends IPlanRadioButton {
  planDetails: Detail[] | undefined;
}

export function PremiumRadioButton(props: PremiumRadioButtonProps) {
  const { planDetails, checked, onChangePlan, ...buttonProps } = props;

  return (
    <WrapperForMostPopularPlan isChecked={checked} onChangePlan={onChangePlan}>
      <PlanRadioButton
        {...buttonProps}
        checked={checked}
        onChangePlan={onChangePlan}
      />
      <PlansDetails details={planDetails} />
    </WrapperForMostPopularPlan>
  );
}
