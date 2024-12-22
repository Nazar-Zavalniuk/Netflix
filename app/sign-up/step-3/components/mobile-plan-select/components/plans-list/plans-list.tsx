"use client";

import { PlanRadioButton } from "../../../plan-radio-button";
import { WrapperForMostPopularPlan } from "../../../wrapper-for-most-popular-plan";
import { usePlansContext } from "@/app/sign-up/step-3/context";

import styles from "./plans-list.module.css";

export function PlansList() {
  const { currentPlan, setCurrentPlan, shortPlansInfo } = usePlansContext();

  const planList = shortPlansInfo.map(({ name, videoQuality }) => {
    const id = `${name}-plan`;

    const isChecked = currentPlan === name;

    if (name === "Premium") {
      return (
        <WrapperForMostPopularPlan key={id} isChecked={isChecked}>
          <PlanRadioButton
            name="plan-choice"
            plan={name}
            id={id}
            styleType="mobile"
            contentContainerStyle={{ borderRadius: "0 0 0.75rem 0.75rem" }}
            subtitle={videoQuality}
            checked={isChecked}
            onChangePlan={setCurrentPlan}
          />
        </WrapperForMostPopularPlan>
      );
    }

    return (
      <PlanRadioButton
        key={name}
        name="plan-choice"
        plan={name}
        id={id}
        styleType="mobile"
        subtitle={videoQuality}
        checked={isChecked}
        onChangePlan={setCurrentPlan}
      />
    );
  });

  return (
    <div role="radiogroup" aria-live="polite" className={styles.list}>
      {planList}
    </div>
  );
}
