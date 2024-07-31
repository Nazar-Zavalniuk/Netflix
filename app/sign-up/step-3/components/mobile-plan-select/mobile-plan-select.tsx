"use client";

import { usePlansContext } from "../../context";
import { getPlanDetails } from "../../utils/getPlanDetails";
import { Disclaimer } from "../disclaimer";
import { FormButton } from "../form-button";
import { PlansDetails } from "../plans-details";
import { Header } from "@/app/sign-up/components/header";

import { PlansList } from "./components/plans-list";
import styles from "./mobile-plan-select.module.css";

export function MobilePlanSelect() {
  const { currentPlan, plansInfo } = usePlansContext();

  const planDetails = getPlanDetails(currentPlan, plansInfo);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header
          currentStep={3}
          amountOfSteps={3}
          title="Choose the plan that’s right for you"
        />
        <PlansList />
        <PlansDetails details={planDetails} />
        <Disclaimer />
        <FormButton />
      </div>
    </div>
  );
}
