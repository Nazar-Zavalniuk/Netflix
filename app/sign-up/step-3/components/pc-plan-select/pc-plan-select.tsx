import { Disclaimer } from "../disclaimer";
import { FormButton } from "../form-button";
import { Header } from "@/app/sign-up/components/header";

import { PlansList } from "./components/plans-list";
import styles from "./pc-plan-select.module.css";

export function PCPlanSelect() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header
          currentStep={3}
          amountOfSteps={3}
          title="Choose the plan that’s right for you"
        />
        <PlansList />
        <Disclaimer />
        <FormButton />
      </div>
    </div>
  );
}
