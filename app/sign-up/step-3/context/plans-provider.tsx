/* eslint-disable sort-keys */
"use client";

import { createContext, useContext, useState } from "react";

import { IPlan, IPlans, IShortInfo, PlansType } from "../types/types";
import { PLANS } from "@/app/sign-up/step-3/constants/plans";
import { IChildren, SetStateFunc } from "@/common/types";

interface IPlansContext {
  currentPlan: PlansType;
  setCurrentPlan: SetStateFunc<PlansType>;
  shortPlansInfo: IShortInfo[];
  plansInfo: IPlans;
}

const PlansContext = createContext<IPlansContext | null>(null);

const PLANSLIST: IPlan[] = Object.values(PLANS);

const SHORTPLANSLIST = PLANSLIST.map(({ shortInfo }) => shortInfo);

export function PlansProvider(props: IChildren) {
  const { children } = props;

  const [currentPlan, setCurrentPlan] = useState<PlansType>("Premium");

  const plansInfo = PLANS;

  const shortPlansInfo = SHORTPLANSLIST;

  return (
    <PlansContext.Provider
      value={{ currentPlan, setCurrentPlan, shortPlansInfo, plansInfo }}
    >
      {children}
    </PlansContext.Provider>
  );
}

export function usePlansContext() {
  const plansContext = useContext(PlansContext);

  if (!plansContext) {
    throw new Error("usePlansContext has to be used within PlansProvider");
  }

  return plansContext;
}
