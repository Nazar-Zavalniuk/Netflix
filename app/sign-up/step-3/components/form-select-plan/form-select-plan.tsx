"use client";

import { useEffect, useState } from "react";

import { PlansProvider } from "../../context";
import { MobilePlanSelect } from "../mobile-plan-select";
import { PCPlanSelect } from "../pc-plan-select";

export function FormSelectPlan() {
  const [formType, setFormType] = useState<"mobile" | "pc">();

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      const windowWidth = window.innerWidth;

      if (windowWidth < 1050) {
        setFormType("mobile");
      } else {
        setFormType("pc");
      }
    });

    resizeObserver.observe(document.documentElement);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <PlansProvider>
      {formType === "mobile" && <MobilePlanSelect />}
      {formType === "pc" && <PCPlanSelect />}
    </PlansProvider>
  );
}
