"use client";

import { useCallback } from "react";
import clsx from "clsx";

import { Detail, IPlanRadioButton } from "../../../../types";
import { PlanRadioButton } from "../../../plan-radio-button";
import { PlansDetails } from "../../../plans-details";

import styles from "./primary-radio-button.module.css";

interface PrimaryBadioButtonProps extends IPlanRadioButton {
  planDetails: Detail[] | undefined;
}

export function PrimaryRadioButton(props: PrimaryBadioButtonProps) {
  const { planDetails, checked, plan, onChangePlan, ...buttonProps } = props;

  const handleClick = useCallback(() => {
    onChangePlan(plan);
  }, [onChangePlan, plan]);

  const buttonWrapperStyle = clsx(
    styles.buttonWrapper,
    checked && styles.chosen
  );

  return (
    <div className={buttonWrapperStyle} onClick={handleClick}>
      <PlanRadioButton
        {...buttonProps}
        plan={plan}
        checked={checked}
        onChangePlan={onChangePlan}
      />
      <PlansDetails details={planDetails} />
    </div>
  );
}
