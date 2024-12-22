"use client";

import { useCallback } from "react";
import clsx from "clsx";

import { PlansType } from "../../types";
import { SetStateFunc } from "@/common/types";

import styles from "./wrapper-for-most-popular-plan.module.css";

interface IWrapperForMostPopularPlan {
  isChecked: boolean;
  children: React.ReactNode;
  onChangePlan?: SetStateFunc<PlansType>;
}

const voidFunction = () => {};

export function WrapperForMostPopularPlan(props: IWrapperForMostPopularPlan) {
  const { isChecked, children, onChangePlan = voidFunction } = props;

  const mostPopularChoiceStyle = clsx(
    styles.mostPopularChoice,
    isChecked && styles.mostPopularChoiceChecked
  );

  const contentContainerStyle = clsx(
    styles.contentContainer,
    isChecked && styles.contentContainerChecked
  );

  const shadowBoxStyle = clsx(styles.shadowBox, isChecked && styles.chosen);

  const handleChange = useCallback(() => {
    onChangePlan("Premium");
  }, [onChangePlan]);

  return (
    <div className={styles.wrapper} onClick={handleChange}>
      <div className={mostPopularChoiceStyle}>Most Popular</div>
      <div className={contentContainerStyle}>{children}</div>
      <div className={shadowBoxStyle} />
    </div>
  );
}
