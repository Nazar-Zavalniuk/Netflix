import { CSSProperties } from "react";

import { SetStateFunc } from "@/common/types";

export type PlansType = "Basic" | "Standard" | "Premium";

export type Detail = [string, string];

export interface IShortInfo {
  name: PlansType;
  videoQuality: string;
}

export interface IPlan {
  details: Detail[];
  shortInfo: IShortInfo;
}

export interface IPlans {
  basic?: IPlan;
  standard?: IPlan;
  premium?: IPlan;
}

export interface IPlanRadioButton {
  name: string;
  plan: PlansType;
  id: string;
  styleType: "mobile" | "pc";
  contentContainerStyle?: CSSProperties;
  subtitle: string;
  checked: boolean;
  onChangePlan: SetStateFunc<PlansType>;
}
