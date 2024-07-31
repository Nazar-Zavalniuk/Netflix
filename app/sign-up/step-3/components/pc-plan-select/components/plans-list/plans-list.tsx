/* eslint-disable sort-keys */
"use client";

import { PremiumRadioButton } from "../premium-radio-button";
import { PrimaryRadioButton } from "../primary-radio-button";
import { usePlansContext } from "@/app/sign-up/step-3/context";
import { getPlanDetails } from "@/app/sign-up/step-3/utils/getPlanDetails";

import styles from "./plans-list.module.css";

type StyleType = "mobile" | "pc";

export function PlansList() {
  const { currentPlan, setCurrentPlan, shortPlansInfo, plansInfo } =
    usePlansContext();

  const planList = shortPlansInfo.map(({ name, videoQuality }) => {
    const id = `${name}-plan`;

    const isChecked = currentPlan === name;

    const planDetails = getPlanDetails(name, plansInfo);

    const buttonProps = {
      name: "plan-choice",
      plan: name,
      id,
      styleType: "pc" as StyleType,
      subtitle: videoQuality,
      checked: isChecked,
      onChangePlan: setCurrentPlan,
    };

    if (name === "Premium") {
      return (
        <PremiumRadioButton
          key={name}
          planDetails={planDetails}
          {...buttonProps}
        />
      );
    }

    return (
      <PrimaryRadioButton
        key={name}
        planDetails={planDetails}
        {...buttonProps}
      />
    );
  });

  return (
    <div role="radiogroup" aria-live="polite" className={styles.list}>
      {planList}
    </div>
  );
}
