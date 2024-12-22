"use client";

import { useCallback } from "react";
import clsx from "clsx";

import { IPlanRadioButton } from "../../types";

import FilledCircleCheckmarkIcon from "./icons/filled-circle-checkmark";
import styles from "./plan-radio-button.module.css";

export function PlanRadioButton(props: IPlanRadioButton) {
  const {
    name,
    plan,
    id,
    styleType,
    contentContainerStyle,
    subtitle,
    checked,
    onChangePlan,
  } = props;

  const handleChange = useCallback(() => {
    onChangePlan(plan);
  }, [onChangePlan, plan]);

  const bgOfSelectedPlan = clsx(
    plan === "Basic" && styles.bgBasicPlan,
    plan === "Standard" && styles.bgStandardPlan,
    plan === "Premium" && styles.bgPremiumPlan
  );

  const labelContentContainerStyle = clsx(
    styles.labelContentContainer,
    (checked || styleType === "pc") && bgOfSelectedPlan
  );

  const checkmarkStyle = clsx(
    styles.checkmark,
    checked && styles.checkmarkChecked
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <input
          type="radio"
          name={name}
          value={plan}
          id={id}
          checked={checked}
          className={styles.input}
          onChange={handleChange}
        />
        <label htmlFor={id} className={styles.label}>
          <div
            className={labelContentContainerStyle}
            style={contentContainerStyle}
          >
            <h2 className={styles.title}>{plan}</h2>
            <sub className={styles.subtitle}>{subtitle}</sub>
            <div className={styles.checkmarkContainer}>
              <FilledCircleCheckmarkIcon className={checkmarkStyle} />
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}
