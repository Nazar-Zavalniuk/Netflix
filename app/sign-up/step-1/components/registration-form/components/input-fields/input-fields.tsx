import { FormInput } from "@/common/components/form-input";
import { PhoneInput } from "@/common/components/phone-input";

export function InputFields() {
  return (
    <div className="flex flex-col w-full gap-4">
      <FormInput
        label="Email"
        type="email"
        id="email"
        size="normal"
        autoComplete="email"
        minLength={5}
        maxLength={50}
      />
      <FormInput label="Nickname" type="text" id="nickname" size="normal" />
      <FormInput
        label="Password"
        type="password"
        id="password"
        size="normal"
        autoComplete="password"
      />
      <PhoneInput />
    </div>
  );
}
