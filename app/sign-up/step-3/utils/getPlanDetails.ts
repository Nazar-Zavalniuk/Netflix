import { IPlans, PlansType } from "../types";

type LowerCasePlansType = "basic" | "standard" | "premium";

export function getPlanDetails(planName: PlansType, plansInfo: IPlans) {
  const planLowerCase = planName.toLowerCase() as LowerCasePlansType;

  const planDetails = plansInfo[planLowerCase]?.details;

  return planDetails;
}
