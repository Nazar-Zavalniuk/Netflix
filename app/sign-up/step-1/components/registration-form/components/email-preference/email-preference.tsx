import { Checkbox } from "@/common/components/checkbox";

export function EmailPreference() {
  return (
    <div className="flex items-start text-base font-normal mt-[0.6875rem]">
      <div className="mt-[0.125rem]">
        <Checkbox id="email-preference" name="email-preference" />
      </div>
      <label htmlFor="email-preference" className="pl-3 flex-auto">
        Please do not email me Netflix special offers.
      </label>
    </div>
  );
}
